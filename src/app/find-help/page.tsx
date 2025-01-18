import { Button, HeaderOne } from "@/components";
import Card from "@/components/card";
import Link from "next/link";

const FindHelpPage = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen w-screen p-8 px-24'>
      <HeaderOne>Find Help</HeaderOne>
      <p>If you are in need of assistance, Bridge is here to help:</p>
      <p>
        If you are a business or charity with services or goods to offer, please
        sign up.
      </p>
      <Card>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>Find local shelters and food banks.</li>
          <li>Access medical and mental health services.</li>
          <li>Connect with job training and employment opportunities.</li>
          <li>
            Receive up-to-the-minute notifications about goods and services
            available in your area.
          </li>
        </ul>
      </Card>
      <p>
        We are committed to supporting you on your journey to stability and
        renewal.
      </p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8 max-w-96'>
        <Link href='/signup?type=individual'>
          <Button variant='primary'>Sign me up</Button>
        </Link>
        <Link href='/dashboard?mock=individual'>
          <Button variant='secondary'>I have an account</Button>
        </Link>
      </div>
    </div>
  );
};

export default FindHelpPage;
