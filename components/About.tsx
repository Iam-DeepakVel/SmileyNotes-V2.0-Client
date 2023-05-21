import {
  SparklesIcon,
  ShieldCheckIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";

const features = [
  {
    name: "Add your Notes.",
    description:
      "At SmileyNotes, we believe that taking notes should be easy and hassle-free. That's why we've created a user-friendly platform that makes note-taking a breeze. With our notes feature, you can capture your thoughts, ideas, and to-do lists quickly and easily. ",
    icon: PencilSquareIcon,
  },
  {
    name: "View some Quotes.",
    description:
      "At SmileyNotes, we believe that quotes have the power to inspire, motivate, and uplift us. That's why we've curated a vast collection of quotes that are sure to brighten your day and boost your spirits.",
    icon: SparklesIcon,
  },
  {
    name: "Keep all your data secure.",
    description:
      "At SmileyNotes, we take the security and privacy of our users very seriously. We understand the importance of keeping your data safe and secure, which is why we've implemented a range of security measures to protect your information.",
    icon: ShieldCheckIcon,
  },
];

const About = () => {
  return (
    <>
      <Head key={"Smiley"}>
        <title>SmileyNotes | About</title>
        <meta
          name="description"
          content="Smiley Notes | A Notes & Quotes application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_smiley.png" />
      </Head>
      <div className="font-cursive overflow-hidden bg-white pt-36 mb-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-base font-semibold leading-7 text-yellow-600"
                >
                  Smiley World
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: +100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Why SmileyNotes?
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: +60 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  SmileyNotes was founded with a simple yet powerful goal in
                  mind - to create a platform that helps people feel good. We
                  understand that life can be stressful and challenging, that is
                  why SmileyNotes was designed to be a place of positivity,
                  inspiration, and support.
                </motion.p>

                <motion.dl
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.5 },
                    },
                  }}
                  className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                >
                  {features.map((feature) => (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      key={feature.name}
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </motion.div>
                  ))}
                </motion.dl>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: +80 },
                visible: { opacity: 1, x: 0 },
              }}
              className="sm:px-6 lg:px-0"
            >
              <div className="relative isolate overflow-hidden bg-yellow-600 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-yellow-100 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          CreatedByDeepak.tsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          _app.tsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 text-white pb-14 pt-6">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: { staggerChildren: 0.3 },
                          },
                        }}
                        className="max-w-lg"
                      >
                        <motion.h1
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          className="text-4xl font-bold mb-4"
                        >
                          Hi, I'm Deepak
                        </motion.h1>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          className="text-lg mb-4 pr-4 text-justify"
                        >
                          I'm a 3rd year BTech IT student at Coimbatore
                          Institute of Technology, passionate about full stack
                          web development and always eager to learn new
                          technologies. My expertise includes React, Next.js,
                          Node.js, Express, MongoDB, Eleventy, and Tailwind CSS.
                          I'm continually expanding my expertise in utilizing
                          the TypeScript and NestJS framework to create
                          efficient and scalable web applications. I'm dedicated
                          to improving my skills and expanding my knowledge in
                          the field. I'm also technically sound and have a good
                          subject knowledge.
                        </motion.p>
                        <motion.a
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          href="https://deepakwings.netlify.app"
                          target="_blank"
                          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
                        >
                          View Portfolio
                        </motion.a>
                        <div className="mt-8">
                          <p>Connect with me:</p>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 2 }}
                            variants={{
                              hidden: {},
                              visible: {
                                transition: { staggerChildren: 0.5 },
                              },
                            }}
                            className="flex mt-2"
                          >
                            <motion.a
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                              }}
                              href="https://github.com/Iam-DeepakVel"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500 mx-4"
                            >
                              <FaGithub className="inline-block mr-1" /> GitHub
                            </motion.a>
                            <motion.a
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                              }}
                              href="https://www.linkedin.com/in/iamdeepakvel/"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500 mx-4"
                            >
                              <FaLinkedin className="inline-block mr-1" />{" "}
                              LinkedIn
                            </motion.a>
                            <motion.a
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                              }}
                              href="mailto:deepakvel82@gmail.com"
                              className="text-gray-400 hover:text-gray-500 mx-4"
                            >
                              <FaEnvelope className="inline-block mr-1" /> Email
                            </motion.a>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default About;
