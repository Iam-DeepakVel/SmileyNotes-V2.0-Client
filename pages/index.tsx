import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SmileyNotes | Home</title>
        <meta
          name="description"
          content="Scribble Quote | A notes & quotes application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_smiley.png" />
      </Head>
      <Hero />
    </>
  );
}
