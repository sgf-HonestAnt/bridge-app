import { Button } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";

const SignupSuccess: React.FC = () => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Signup Successful!</h1>
      <p>
        Thank you for joining Bridge. We&apos;re excited to have you on board!
      </p>
      <Button variant='primary' onClick={handleGoToDashboard}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default SignupSuccess;
