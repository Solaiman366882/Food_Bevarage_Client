import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            This is brand details
        </div>
    );
};

export default BrandDetails;