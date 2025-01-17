"use client";
import { HeaderOne } from "@/components";
import { USERS } from "@/mock-data/users";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  // if ?mock=individual, clear local storage then set local storage to the sample individual user
  // if ?mock=business, clear local storage then set local storage to the sample business user
  const searchParams = useSearchParams();

  useEffect(() => {
    const mock = searchParams.get("mock");
    if (mock === "individual") {
      localStorage.clear();
      localStorage.setItem(
        "user",
        JSON.stringify(USERS.find((user) => user.id === "3"))
      );
    } else if (mock === "business") {
      localStorage.clear();
      localStorage.setItem(
        "user",
        JSON.stringify(USERS.find((user) => user.id === "B1"))
      );
    }
  }, [searchParams]);

  return (
    <div>
      <HeaderOne>Dashboard</HeaderOne>
      <p>Centralized hub showing relevant features based on user role.</p>
    </div>
  );
};

export default DashboardPage;
