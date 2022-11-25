import BookCard from "../../book-card-1";
import CatalogueText from "../../catalogue-text";


const MostReadCatalogue = () => {

    return (<section className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-6">
        <BookCard
            title={"Twenty thousand leagues under the ocean"}
            type={0}
            img={"trialImage"}
            author={"Jules Verne"}
            reads={3}
            points={2500}
            genres={["action", "adventure", "fantasy"]}
        />
        <BookCard
            title={"Twenty thousand leagues under the ocean"}
            type={0}
            img={"trialImage"}
            author={"Jules Verne"}
            reads={3}
            points={2500}
            genres={["action", "adventure", "fantasy"]}
        />
        <BookCard
            title={"Twenty thousand leagues under the ocean"}
            type={0}
            img={"trialImage"}
            author={"Jules Verne"}
            reads={3}
            points={2500}
            genres={["action", "adventure", "fantasy"]}
        />


    </section>);
}

export default MostReadCatalogue;