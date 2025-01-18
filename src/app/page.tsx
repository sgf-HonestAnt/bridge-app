import { Button, HeaderOne } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen w-screen p-8 px-24'>
      <HeaderOne>Welcome to Bridge</HeaderOne>
      <Image src='/image.png' alt='ChatGPT-generated image of a bridge' width={300} height={300} />
      <p className='text-lg text-center sm:text-left max-w-prose'>
        Bridge connects homeless individuals with essential goods and services
        provided by local businesses and charities. Our mission is to foster a
        sense of community, renewal, and support.
      </p>
      <div className='w-full flex flex-col justify-between gap-2 sm:flex-row sm:gap-8 max-w-96'>
        <Link href='/get-involved'>
          <Button variant='primary'>Get Involved</Button>
        </Link>
        <Link href='/find-help'>
          <Button variant='secondary'>Find Help</Button>
        </Link>
        <Link href='/dashboard?mock=business'>
          <Button variant='warning'>Demo Login</Button>
        </Link>
      </div>
    </div>
  );
}
