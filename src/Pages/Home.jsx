import { useState, useEffect } from "react";
import BrandCard from "../components/BrandCard";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import brands from "../brands";

function Home() {

    const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("https://lara2.fcqdaqp.online/api/products/all")
                .then(res => res.json())
                .then(
                    (result) => {
                        setItems(result.data);
                    },
                )
        }, [])

    return (
        <Layout>
            <div className="container">
                <section className="xs:mt-2 mt-16 lg:mt-4">
                    {/* Section heading  */}
                    <h2 className="text-lg lg:text-[32px] font-black text-darkblue">Products</h2>

                    {/* Products list */}
                    <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-8">
                        {items.slice(0, 6).map(item => (
                            <ProductCard key={item.id} src={"https://lara2.fcqdaqp.online/storage/images/" + item.thumbnail} properties={item.json_properties} text={item.text} title={item.title} price={item.price} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to={'/catalog'} className="btn btn-blue cursor-pointer">All Products &nbsp;→</Link>
                    </div>
                </section>

                <section className="mt-20">
                    {/* Section heading  */}
                    <h2 className="text-lg lg:text-[32px] font-black text-darkblue">Brands</h2>

                    {/* Brands list */}
                    <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4 md:gap-8 mt-12">
                        {brands.map(brand => (
                            < BrandCard key={brand.id} logo={brand.logo} title={brand.title} />
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;