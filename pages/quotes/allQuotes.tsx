import dynamic from "next/dynamic";

const AllQuotes = dynamic(() => import("@/components/AllQuotes"), {
  ssr: false,
});

export default function AllQuotesPage() {
  return <AllQuotes />;
}
