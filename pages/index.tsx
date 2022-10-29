import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nextjs starter</title>
      </Head>

      <h1>Nextjs starter</h1>
    </div>
  );
};

export default Home;
