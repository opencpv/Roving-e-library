import Head from "next/head";
import LandingSwiper from "../components/home/landing-swiper";
import BookCard1 from "../components/shared/book-card-1";
import MostReadCatalogue from "../components/shared/book-catalogues/most-read-catalogue";
import CatalogueText from "../components/shared/catalogue-text";
import CategoriesCatalogue from "../components/shared/categories-catalogue";

import { Navbar } from "../components/shared/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roving Library</title>
      </Head>
      <main className="bg-[#141414] py-6 w-[100vw]">
        <div className="px-6">
          <Navbar />
          <LandingSwiper books={[{}]} />
          <CategoriesCatalogue itemNumber={6} />
          <CatalogueText text={"Most Read"} />
          <MostReadCatalogue />
        </div>
      </main>
    </>
  );
}
