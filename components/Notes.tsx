import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { RiFileEditLine } from "react-icons/ri";
import { CiTrash } from "react-icons/ci";
import { useSelector } from "react-redux";
import LoggedOutSvg from "@/assets/loggedOut.svg";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export interface Note {
  _id: string;
  title: string;
  content?: string;
  label?: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  username: string;
  email: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/notes", {
          withCredentials: true,
        });
        const notes: Note[] = await res.data;
        setNotes(notes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotes();
  }, []);

  async function handleDelete(noteId: string) {
    setIsLoading(true);
    await axios.delete(`http://localhost:8000/api/v1/notes/${noteId}`, {
      withCredentials: true,
    });
    if (notes) {
      const updatedNotes: Note[] = notes?.filter((note) => note._id !== noteId);
      setNotes(updatedNotes);
    }
    setIsLoading(false);
  }
  const { isLoggedIn } = useSelector((state: any) => state.user);
  return (
    <>
      <Head key={"Smiley"}>
        <title>SmileyNotes | Notes</title>
        <meta
          name="description"
          content="Smiley Notes | A Notes & Quotes application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_smiley.png" />
      </Head>
      {isLoggedIn ? (
        <div className="bg-white py-32 font-cursive">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: +100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Your Notes
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="my-2 text-lg leading-8 text-gray-600"
              >
                Take note of the good times, leave a smile for the tough times.
              </motion.p>
              <Link
                href="/notes/new"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-yellow-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Add note
                </span>
              </Link>
              <div className="mt-10 space-y-6 border-t  border-gray-200 pt-2 sm:mt-5 sm:pt-10">
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
                ) : notes && notes.length > 0 ? (
                  notes?.map((note) => (
                    <motion.article
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: +100 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      key={note._id}
                      className={`flex max-w-xl rounded-lg ${
                        note.label === 1 && "shadow-red-400"
                      } ${note.label === 2 && "shadow-orange-300"} ${
                        note.label === 3 && "shadow-gray-300"
                      } shadow-md p-10 py-8 flex-col items-start justify-between`}
                    >
                      <div className="w-full flex items-start justify-between">
                        <div className="flex items-center gap-x-4">
                          <p className="text-gray-500">
                            {` ${
                              note.createdAt >= note.updatedAt
                                ? `${formatDate(note.createdAt)}`
                                : `${formatDate(note.updatedAt)} (edited)`
                            }`}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <Link href={`/notes/${note._id}`}>
                            <RiFileEditLine
                              size={20}
                              className=" text-yellow-500"
                            />
                          </Link>
                          <div
                            className=" cursor-pointer"
                            onClick={() => handleDelete(note._id)}
                          >
                            <CiTrash size={20} className=" text-red-500" />
                          </div>
                        </div>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <div>
                            <span className="absolute inset-0" />
                            {note.title}
                          </div>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {note.content}
                        </p>
                      </div>
                    </motion.article>
                  ))
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
                      No notes
                    </h3>
                    <p className="mt-1 text-xl text-gray-500">
                      Get started by creating a new note.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/notes/new"
                        className="relative shadow-lg shadow-yellow-200 text-xl  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-24 ml-16 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <div className="mt-1 flex items-center gap-1 relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                          <span className=" text-xl">+</span>Add Note
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center gap-8">
          <Image
            src={LoggedOutSvg}
            alt="loggedout"
            className="mt-44 w-[60%] md:w-[50%] lg:w-[30%]"
          />
          <p className=" text-center font-cursive text-yellow-500 font-semibold text-2xl">
            Please Login to View or Add your notes!!
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
            <span className="absolute font-cursive flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Login
            </span>
            <span className="relative invisible">Login</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Notes;
