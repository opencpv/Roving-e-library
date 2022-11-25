import Head from "next/head";
import LandingSwiper from "../components/home/landing-swiper";
import BookCard1 from "../components/shared/book-card-1";
import CatalogueText from "../components/shared/catalogue-text";

import { Navbar } from "../components/shared/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roving Library</title>
      </Head>
      <main className="bg-[#141414] py-6 px-5">
        <Navbar />
        <LandingSwiper books={[{}]} />
        <CatalogueText text={"Most Read"} />
        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
        <CatalogueText text={"Recently Added"} />

        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
        <BookCard1
          title={"Twenty thousand leagues under the ocean"}
          type={0}
          img={"trialImage"}
          author={"Jules Verne"}
          reads={3}
          points={2500}
          genres={["action", "adventure", "fantasy"]}
        />
      </main>
    </>
  );
}
