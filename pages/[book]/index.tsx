import Head from "next/head";
import BookCover from "../../components/read-book-page/book-cover";
import BookLanding from "../../components/read-book-page/book-landing";

const BooKDetailsPage = () => {
  return (
    <>
      <Head>
        <title>Book Details Page</title>
      </Head>
      <main className="bg-[#141414]  w-full">
       <BookLanding author={"Jules Verne"} reads={3} points={3000} />
      </main>
    </>
  );
};

export default BooKDetailsPage;
