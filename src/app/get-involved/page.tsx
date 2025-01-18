import { Button, HeaderOne } from "@/components";
import Link from "next/link";

const GetInvolvedPage = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen w-screen p-8 px-24'>
      <HeaderOne>Get Involved</HeaderOne>
      <p>
        Bridge aims to connect homeless invidiuals with businesses and charities
        in their local area.
      </p>
      <p>
        If you are a business or charity with services or goods to offer, please
        sign up.
      </p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8 max-w-96'>
        <Link href='/signup?type=business'>
          <Button variant='primary'>Sign up my business</Button>
        </Link>
        <Link href='/signup?type=charity'>
          <Button variant='secondary'>Sign up my charity</Button>
        </Link>
        <Link href='/dashboard?mock=business'>
          <Button variant='warning'>Demo Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
