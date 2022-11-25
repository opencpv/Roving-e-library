
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import axiosGet from "../../../utils/customHooks/requests/axiosGet";
import CatalogueText from "../catalogue-text";

interface CategoriesCatalogueProps {
    itemNumber: number
}
const CategoriesCatalogue = ({ itemNumber }: CategoriesCatalogueProps) => {
    const [categoriesData, setCategoriesData] = useState([])
    const [error, setError] = useState(false)

    const reqURL = `${process.env.NEXT_PUBLIC_LIBRARY_API_URL}/categories`
    interface CategoriesDataTypes {
        id: number,
        category_name: string,
        category_img: string,
        createdAt: string,
        updatedAt: string
    }

    interface Props {
        data: CategoriesDataTypes[]
    }
    useEffect(() => {
        axiosGet(reqURL).then((data) => {
            setCategoriesData(data.splice(0, itemNumber))
            setError(false)
        }).catch((err) => {
            setError(true)
        })
    }, [])
    return (<section>
        <CatalogueText text={'Browse Categories'} />
        {!error && categoriesData.length > 1 && <div className="grid grid-cols-3 xl:grid-cols-4 flex-wrap gap-6">
            {categoriesData.map((data: any, index) =>
                <div key={index} className="relative flex-none h-[154px] w-[110px]  xl:h-[280px] xl:w-[200px] rounded-md ">
                    <Image
                        src={data.category_img}
                        alt={data.category_name}
                        className="rounded-md"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            )}</div>}
    </section>);
}

export default CategoriesCatalogue;