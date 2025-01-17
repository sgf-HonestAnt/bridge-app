import { Button, HeaderOne } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderOne>Welcome to Bridge</HeaderOne>
      <p className='text-lg text-center sm:text-left max-w-prose'>
        Bridge connects homeless individuals with essential goods and services
        provided by local businesses and charities. Our mission is to foster a
        sense of community, renewal, and support.
      </p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8'>
        <Link href='/get-involved'>
          <Button variant='primary'>Get Involved</Button>
        </Link>
        <Link href='/find-help'>
          <Button variant='secondary'>Find Help</Button>
        </Link>
        <Link href='/dashboard?mock=business'>
          <Button variant='warning'>Fast Login</Button>
        </Link>
      </div>
    </>
  );
}
