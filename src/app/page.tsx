import { HeaderOne } from "@/components";

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
        <a
          className='mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'
          href='/get-involved'>
          Get Involved
        </a>
        <a
          className='mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition'
          href='/find-help'>
          Find Help
        </a>
      </div>
    </>
  );
}
