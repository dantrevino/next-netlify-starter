import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getUserData, UserData } from "@stacks/connect";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    setData(await getUserData());
  });

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`welcome ${data?.username}`} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}

const getUser = async () => {
  return 
};
