import dynamic from "next/dynamic";

const Quotes = dynamic(() => import("@/components/Quotes"), {
  ssr: false,
});

export default function QuotesPage() {
  return <Quotes />;
}
