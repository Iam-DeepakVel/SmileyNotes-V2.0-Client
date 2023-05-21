import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo_smiley.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/reducers";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Notes", href: "/notes" },
  { name: "Quotes", href: "/quotes/allQuotes" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state: any) => state.user);

  const router = useRouter();
  const dispatch = useDispatch();
  const { asPath } = useRouter();

  const handleLogout = async () => {
    await axios.get("http://localhost:8000/api/v1/auth/logout", {
      withCredentials: true,
    });
    dispatch(logout());
    router.push("/");
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50 font-cursive shadow-lg shadow-yellow-500 bg-yellow-300">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.div
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className=" flex items-center justify-center gap-2"
            >
              <Image className="h-8 w-auto" src={logo} alt="smileyNotes" />
              <p className="font-cursive font-bold text-2xl tracking-wider">
                SmileyNotes
              </p>
            </motion.div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-4.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="hidden lg:flex lg:gap-x-12"
        >
          {navigation.map((item) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Link
                key={item.name}
                href={item.href}
                className={` tracking-wide  leading-6  ${
                  asPath === item.href
                    ? "text-yellow-600 font-bold text-2xl"
                    : "text-gray-900 font-semibold text-lg"
                } `}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="hidden lg:flex items-center ml-20 gap-10">
          {!isLoggedIn ? (
            <motion.div
              whileTap={{ scale: 0.6 }}
              className="hidden lg:flex lg:flex-1 lg:justify-end"
            >
              <Link
                href="/auth/login"
                className="text-lg font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: +80 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="font-semibold pr-12"
              >
                {isLoggedIn && `Welcome ✨ ${user?.username}❤️`}
              </motion.p>
              <motion.div
                whileTap={{ scale: 0.6 }}
                onClick={handleLogout}
                className="text-lg cursor-pointer font-semibold leading-6 text-gray-900"
              >
                Logout <span aria-hidden="true">&rarr;</span>
              </motion.div>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed bg-yellow-200 inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 font-cursive sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-4">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: +80 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="font-semibold text-lg"
              >
                {" "}
                {isLoggedIn && `Welcome ✨ ${user?.username}❤️`}
              </motion.p>
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-yellow-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {!isLoggedIn ? (
                <div className="py-6">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block  rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-yellow-300"
                  >
                    Log in
                  </Link>
                </div>
              ) : (
                <div className="py-6">
                  <div
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3  block cursor-pointer rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-yellow-300"
                  >
                    Log out
                  </div>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
