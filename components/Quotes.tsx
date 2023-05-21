import Link from "next/link";
import { HomeIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";

const pages = [
  { name: "All Quotes", href: "/quotes/allQuotes" },
  { name: "My Quotes", href: "/quotes/myQuotes" },
];

type LayoutProps = { children?: ReactNode };

const Quotes = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();
  return (
    <>
      <Head key={"Smiley"}>
        <title>SmileyNotes | Quotes</title>
        <meta
          name="description"
          content="Smiley Notes | A Notes & Quotes application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_smiley.png" />
      </Head>
      <div className="bg-white py-32 font-cursive">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Quotes
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: +100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="my-2 text-lg  leading-8 text-gray-600"
            >
              Let our quotes be the fuel that ignites your passion and
              motivation.
            </motion.p>
            <motion.nav
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex"
              aria-label="Breadcrumb"
            >
              <ol
                role="list"
                className="flex space-x-4  rounded-md bg-yellow-200 shadow-md px-6 shadow-yellow-400"
              >
                <li className="flex">
                  <div className="flex items-center">
                    <Link href="/" className="text-black hover:text-gray-500">
                      <HomeIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                {pages.map((page) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      hidden: { opacity: 0, x: +100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    key={page.name}
                    className="flex"
                  >
                    <div className="flex items-center">
                      <svg
                        className="h-full w-6 flex-shrink-0 text-black"
                        viewBox="0 0 24 44"
                        preserveAspectRatio="none"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                      </svg>
                      <a
                        href={page.href}
                        className={`ml-4  ${
                          asPath === page.href
                            ? "text-yellow-600 font-bold text-lg md:text-xl underline underline-offset-4"
                            : "text-black font-semibold text-md md:text-lg"
                        }  tracking-wide  hover:text-gray-700`}
                      >
                        {page.name}
                      </a>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.nav>
            <div className="mt-10 space-y-10 border-t border-gray-200 pt-2 sm:mt-5 sm:pt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
