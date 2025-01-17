import { HeaderOne } from "@/components";
import { useRouter } from "next/router";

const ResourceDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <HeaderOne>Resource Details</HeaderOne>
      <p>
        Detailed view of a specific resource (e.g., beds, food, or services).
      </p>
      <p>Resource ID: {id}</p>
    </div>
  );
};

export default ResourceDetailsPage;
