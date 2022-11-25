import Head from "next/head";
import ReaderNav from "../../components/reader/reader-nav";

const Reader = () => {
  return (
    <>
      <Head>
        <title>Reading Book</title>
      </Head>
      <main className="bg-black">
        <ReaderNav title={"Alice in woinderland"} chapters={[]} />
      </main>
    </>
  );
};

export default Reader;
