import {
  BsFillEnvelopeAtFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { motion } from "framer-motion";

const navigation = [
  {
    name: "Github",
    href: "https://github.com/Iam-DeepakVel",
    icon: <BsGithub />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/iamdeepakvel",
    icon: <BsLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Iam_DeepakVel",
    icon: <BsTwitter />,
  },
  {
    name: "Mail",
    href: "mailto:deepakvel82@gmail.com",
    icon: <BsFillEnvelopeAtFill />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-yellow-300 absolute bottom-0 font-cursive mt-32 w-full">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="flex justify-center space-x-6 md:order-2"
        >
          {navigation.map((item) => (
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-black-400 hover:text-gray-500"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-8 md:order-1 md:mt-0">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: +80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-center text-md font-bold leading-5 text-black-500"
          >
            © {new Date().getFullYear()} SmileyNotes . All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
