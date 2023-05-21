import dynamic from "next/dynamic";

const MyQuotes = dynamic(() => import("@/components/MyQuotes"), {
  ssr: false,
});

export default function MyQuotesPage() {
  return <MyQuotes />;
}
