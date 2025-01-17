import { Button, HeaderOne } from "@/components";
import Link from "next/link";

const FindHelpPage = () => {
  return (
    <div>
      <HeaderOne>Find Help</HeaderOne>
      <p>If you are in need of assistance, Bridge is here to help:</p>
      <ul>
        <li>Find local shelters and food banks.</li>
        <li>Access medical and mental health services.</li>
        <li>Connect with job training and employment opportunities.</li>
        <li>
          Receive up-to-the-minute notifications about goods and services
          available in your area.
        </li>
      </ul>
      <p>
        We are committed to supporting you on your journey to stability and
        renewal.
      </p>
      <p>To get started, sign up:</p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8'>
        <Link href='/login?signup=true&type=individual'>
          <Button variant='primary'>Sign up</Button>
        </Link>
        <Link href='/login'>
          <Button variant='secondary'>Login (I already have an account)</Button>
        </Link>
      </div>
    </div>
  );
};

export default FindHelpPage;
