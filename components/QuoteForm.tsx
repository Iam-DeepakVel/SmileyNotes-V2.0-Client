import { EditQuoteDto } from "@/pages/quotes/[id]";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";


interface AddEditQuoteDto {
  quote: string;
  category: string;
}

interface QuoteFormProps {
  quoteToEdit?: EditQuoteDto;
}

const QuoteForm = ({ quoteToEdit }: QuoteFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddEditQuoteDto>({
    defaultValues: {
      quote: quoteToEdit?.quote || "",
      category: quoteToEdit?.category || "",
    },
  });

  const onSubmit: SubmitHandler<AddEditQuoteDto> = async (data) => {
    try {
      if (quoteToEdit) {
        await axios.patch(
          `http://localhost:8000/api/v1/quotes/${quoteToEdit._id}`,
          data,
          { withCredentials: true }
        );
      } else {
        await axios.post("http://localhost:8000/api/v1/quotes", data, {
          withCredentials: true,
        });
      }
      router.push("/quotes/myQuotes");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="isolate bg-white px-6  py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffda0b] to-[#f8e36c] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {quoteToEdit ? "Update Quote" : "Add Quote"}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {quoteToEdit ? "Update your Quote" : "Add your Quote"}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-xl sm:mt-12"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="quote"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Quote
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("quote", { required: "Quote is Required" })}
                id="quote"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
              {errors.quote && (
                <p className="text-red-500 text-sm">Quote is required!</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Choose Category
            </label>
            <select
              {...register("category")}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
            >
              <option value="Happiness">Happiness</option>
              <option value="Motivation">Motivation</option>
              <option value="Love">Love</option>
              <option value="Friendship">Friendship</option>
              <option value="Humerous">Humerous</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 mt-10">
          <Link
            href={"/quotes/myQuotes"}
            className="block w-32 rounded-md border border-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-500 shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="block tracking-wide w-32 rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            {isSubmitting ? "Launching..." : "Launch Quote"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
