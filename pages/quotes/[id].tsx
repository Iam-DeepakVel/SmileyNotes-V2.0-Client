import QuoteForm from "@/components/QuoteForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export interface EditQuoteDto {
  _id: string;
  userId: string;
  quote: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export default function EditQuotePage() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<EditQuoteDto | null>(null);

  useMemo(() => {
    if (id) {
      const fetchQuoteToEdit = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/v1/quotes/${id}`,
          { withCredentials: true }
        );
        setQuote(response.data);
        setIsLoading(false);
      };
      fetchQuoteToEdit();
    }
  }, [id]);
  return !isLoading && quote ? (
    <QuoteForm quoteToEdit={quote} />
  ) : (
    <div>Loading</div>
  );
}
