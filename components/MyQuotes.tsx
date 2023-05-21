import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiTrash } from "react-icons/ci";
import { RiFileEditLine } from "react-icons/ri";
import Quotes from "./Quotes";
import axios from "axios";
import { useSelector } from "react-redux";
import LoggedOutSvg from "@/assets/loggedOut.svg";
import Image from "next/image";
import { FaRegLaughSquint, FaRegLightbulb, FaRegSadTear } from "react-icons/fa";
import {
  BsFillBalloonHeartFill,
  BsLightningChargeFill,
  BsStars,
} from "react-icons/bs";
import { motion } from "framer-motion";

export interface Quote {
  _id: string;
  userId: {
    username: string;
    _id: string;
    _v: string;
  };
  quote: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
const MyQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector((state: any) => state.user);

  useEffect(() => {
    async function fetchLoggedinUserQuotes() {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/quotes/loggedin-user",
          { withCredentials: true }
        );
        const quotes: Quote[] = await res.data;
        setQuotes(quotes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLoggedinUserQuotes();
  }, []);

  async function handleDelete(quoteId: string) {
    setIsLoading(true);
    await axios.delete(`http://localhost:8000/api/v1/quotes/${quoteId}`, {
      withCredentials: true,
    });
    if (quotes) {
      const updatedQuotes: Quote[] = quotes?.filter(
        (quote) => quote._id !== quoteId
      );
      setQuotes(updatedQuotes);
    }
    setIsLoading(false);
  }

  return (
    <Quotes>
      {isLoggedIn ? (
        <div>
          {isLoading ? (
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="shape-rendering: auto;"
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  fill="none"
                  stroke="#fcf097"
                  strokeWidth="8"
                  strokeDasharray="42.76482137044271 42.76482137044271"
                  d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                  strokeLinecap="round"
                  className="transform:scale(0.8);transform-origin:50px 50px"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="0;256.58892822265625"
                  ></animate>
                </path>
              </svg>
            </div>
          ) : quotes && quotes.length > 0 ? (
            <div>
              <Link
                href="/quotes/new"
                className="relative inline-flex items-center justify-center px-6 py-3 mb-8 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Add Quote
                </span>
              </Link>

              {quotes?.map((quote) => (
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: +100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  key={quote._id}
                  className={`flex max-w-xl rounded-lg ${
                    quote.category === "Happiness" &&
                    "shadow-yellow-200 bg-yellow-50"
                  } ${
                    quote.category === "Motivation" &&
                    "shadow-teal-200 bg-teal-50"
                  } ${
                    quote.category === "Love" && "shadow-pink-200 bg-pink-50"
                  } ${
                    quote.category === "Friendship" &&
                    "shadow-blue-200 bg-blue-50"
                  } ${
                    quote.category === "Humerous" &&
                    "shadow-orange-200 bg-orange-50"
                  } ${
                    quote.category === "Others" &&
                    "shadow-indigo-200 bg-indigo-50"
                  } shadow-md p-10 py-8 mb-6 flex-col items-start justify-between`}
                >
                  <div className="w-full flex items-start justify-between">
                    <div className="flex-col justify-center  gap-4">
                      <div>
                        <p className="text-gray-500">
                          {` ${
                            quote.createdAt >= quote.updatedAt
                              ? `${formatDate(quote.createdAt)}`
                              : `${formatDate(quote.updatedAt)} (edited)`
                          }`}
                        </p>
                      </div>
                      <div className="pt-2">
                        {quote.category === "Happiness" && (
                          <div className=" flex items-center gap-1 text-yellow-600">
                            <BsStars />
                            <p className=" text-yellow-600">{quote.category}</p>
                          </div>
                        )}
                        {quote.category === "Motivation" && (
                          <div className=" flex items-center gap-1 text-teal-600">
                            <BsLightningChargeFill />
                            <p className=" text-teal-600">{quote.category}</p>
                          </div>
                        )}
                        {quote.category === "Love" && (
                          <div className=" flex items-center gap-1 text-pink-600">
                            <BsFillBalloonHeartFill />
                            <p className=" text-pink-600">{quote.category}</p>
                          </div>
                        )}
                        {quote.category === "Friendship" && (
                          <div className=" flex items-center gap-1 text-blue-600">
                            <FaRegSadTear />
                            <p className="mt-1 text-blue-600">
                              {quote.category}
                            </p>
                          </div>
                        )}
                        {quote.category === "Humerous" && (
                          <div className=" flex items-center gap-1 text-orange-500">
                            <FaRegLaughSquint />
                            <p className="mt-1 text-orange-500">
                              {quote.category}
                            </p>
                          </div>
                        )}
                        {quote.category === "Others" && (
                          <div className=" flex items-center gap-1 text-indigo-600">
                            <FaRegLightbulb />
                            <p className=" text-indigo-600">{quote.category}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <Link href={`/quotes/${quote._id}`}>
                        <RiFileEditLine
                          size={20}
                          className=" text-yellow-500"
                        />
                      </Link>
                      <div
                        onClick={() => handleDelete(quote._id)}
                        className=" cursor-pointer"
                      >
                        <CiTrash size={20} className=" text-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 font-patrick text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <div>
                        <span className="absolute inset-0" />
                        {quote.quote}
                      </div>
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <svg
                className="mx-auto h-32 w-32 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                No Quotes Available
              </h3>
              <p className="mt-1 text-xl text-gray-500">
                Get started by adding your quotes!!
              </p>
              <div className="mt-6">
                <Link
                  href="/quotes/new"
                  className="relative shadow-lg shadow-yellow-200 text-xl  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-24 ml-16 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="mt-1 flex items-center gap-1 relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <span className=" text-xl">+</span>Add Quote
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center gap-8">
          <Image
            src={LoggedOutSvg}
            alt="loggedout"
            className="mt-10 w-[60%] md:w-[50%] lg:w-[35%]"
          />
          <p className=" text-center font-cursive text-yellow-500 font-semibold text-2xl">
            Please Login to View or Add your Quotes!!
          </p>
          <Link
            href="/auth/login"
            className="relative w-32 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Login
            </span>
            <span className="relative invisible">Login</span>
          </Link>
        </div>
      )}
    </Quotes>
  );
};

export default MyQuotes;
