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
        <Link href='/login?signup=true&type=business'>
          <Button variant='primary'>Sign up (I am a business)</Button>
        </Link>
        <Link href='/login?signup=true&type=charity'>
          <Button variant='secondary'>Sign up (I am a charity)</Button>
        </Link>
        <Link href='/login'>
          <Button variant='warning'>Login (I already have an account)</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
