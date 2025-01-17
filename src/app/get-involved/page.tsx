import { Button, HeaderOne } from "@/components";
import Link from "next/link";

const GetInvolvedPage = () => {
  return (
    <div>
      <HeaderOne>Get Involved</HeaderOne>
      <p>
        Bridge aims to connect homeless invidiuals with businesses and charities
        in their local area.
      </p>
      <p>
        If you are a business or charity with services or goods to offer, please
        sign up.
      </p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8'>
        <Link href='/signup?type=business'>
          <Button variant='primary'>Sign up my business</Button>
        </Link>
        <Link href='/signup?type=charity'>
          <Button variant='secondary'>Sign up my charity</Button>
        </Link>
        <Link href='/dashboard?mock=business'>
          <Button variant='warning'>I already have an account</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
