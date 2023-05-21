import Link from "next/link";

export default function InternalServerErrorPage() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 pt-52 sm:pt-44 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-yellow-600">500</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong..
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, it's look like something went wrong. Please refresh the page or try again later.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link
            href="mailto:deepakvel82@gmail.com"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
