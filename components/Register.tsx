import logo from "@/public/logo_smiley.png";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { SET_IS_LOGGEDIN, SET_USER } from "@/store/reducers";
import { fetchLoggedInUser } from "@/utils/fetchLoggedInUser";
import { useState } from "react";
import { fetchData } from "@/network/api";
import { FiAlertOctagon } from "react-icons/fi";
import { ConflictError } from "@/errors/http_errors";

interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  error: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDto>();
  const [errorText, setErrorText] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<RegisterDto> = async (data) => {
    try {
      await fetchData("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      // Fetching loggedin User
      const user = await fetchLoggedInUser();
      dispatch(SET_USER(user));
      dispatch(SET_IS_LOGGEDIN(true));
      router.push("/notes");
    } catch (error) {
      if (error instanceof ConflictError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  };
  return (
    <div className="mt-20 font-cursive flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image className="mx-auto h-12 w-auto" src={logo} alt="Smiley Notes" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {errorText && (
              <div className="flex gap-2 bg-red-100 rounded-md p-4 ">
                <div className="mt-[2px]">
                  <FiAlertOctagon size={20} color="red" />
                </div>
                <p className="text-red-500">{errorText}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">Username is required!</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required!</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">Password is required!</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 text-sm">
              <span>Already Having an account?</span>
              <Link
                href="/auth/login"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Login
              </Link>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                {isSubmitting ? "Please wait.." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
