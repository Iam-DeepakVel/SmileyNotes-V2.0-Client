import Link from "next/link";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-10 lg:px-8 font-cursive">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f8e36c" />
                  <stop offset={1} stopColor="#f8e36c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mx-auto max-w-2xl pt-32 sm:pt-24 lg:pt-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: +100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Step into the world of inspiration and positivity with
                SmileyNotes quotes{" "}
                <Link
                  href="/quotes/allQuotes"
                  className="font-semibold text-yellow-500"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Explore <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </div>
            <div className="text-center">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Notes that inspire, quotes that heal - SmileyNotes has it all.
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: +100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                "Welcome to SmileyNotes - the online destination for uplifting
                notes and inspiring quotes that aim to spread joy, positivity,
                and healing to our community."
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  href="/quotes/myQuotes"
                  className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-black  shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                >
                  Get started
                </Link>
                <Link
                  href="/notes"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Make a Note <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f8e36c" />
                  <stop offset={1} stopColor="#f8e36c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
