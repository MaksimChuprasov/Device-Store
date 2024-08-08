import { Link } from "react-router-dom";
import BrandsFilter from "../components/BrandsFilter";
import Layout from "../components/Layout";
import Price from "../components/Price";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import CatalogNavigation from "../components/CatalogNavigation";


function Catalog() {

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;

    useEffect(() => {
        fetch("https://lara2.fcqdaqp.online/api/products/all")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.data);
                },
            )
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <Layout>
            <main className="py-8 lg:pb-16">
                <div className="container">
                    <ul className="breadcrumbs flex flex-wrap gap-y-1 gap-x-4 mb-6">
                        <li><Link to={"/"} className="text-gray hover:text-darkblue text-xs">Home</Link></li>
                        <li><Link to={"/catalog"} className="text-gray hover:text-darkblue text-xs">Catalog</Link></li>
                        {/* <li>
                            <span className="text-gray text-xs">
                                 {{ $category->title }} 
                            </span>
                        </li> */}
                    </ul>
                    <section className="xs:mt-2 mt-16 lg:mt-10">
                        {/* Section heading  */}
                        <h2 className="text-lg lg:text-[32px] font-black text-darkblue">Catalog</h2>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 2xl:gap-8 mt-8">

                            {/* Filters  */}
                            <aside className="basis-2/5 xl:basis-1/4">
                                <form action="{{ route('catalog', $category) }}"
                                    className="overflow-auto max-h-[320px] lg:max-h-[100%] space-y-1 p-4 rounded-lg border border-solid border-black bg-gray/5 text-dark" >

                                    <input type="hidden" name="sort" value="{{ request('sort') }}" />

                                    {/* Filter items */}
                                    {/* @foreach (filters() as $filter)
                                        {!! $filter !!}
                                    @endforeach */}
                                    <Price/>
                                    <BrandsFilter/>

                                    <div>
                                        <button type="submit" className="w-full !h-16 mt-4 btn btn-blue">Apply</button>
                                    </div>

                                    {/* @if (request('filters')) */}
                                    <div>
                                        <a type="reset"
                                            className="w-full !h-16 mt-4 btn btn-outline">Reset filters</a>
                                    </div>
                                    {/* @endif */}
                                </form>
                            </aside>

                            <div className="basis-auto xl:basis-3/4">
                                {/* Sort by  */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">

                                            <a href="{{ filters_url($category, ['view-products' => 'grid']) }}"
                                                className="{{ session()->get('view-products') === 'grid' ? 'pointer-events-none text-blue-600' : '' }} inline-flex items-center justify-center w-10 h-10 rounded-md bg-card hover:text-blue-600">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 52 52">
                                                    <path fillRule="evenodd"
                                                        d="M2.6 28.6h18.2a2.6 2.6 0 0 1 2.6 2.6v18.2a2.6 2.6 0 0 1-2.6 2.6H2.6A2.6 2.6 0 0 1 0 49.4V31.2a2.6 2.6 0 0 1 2.6-2.6Zm15.6 18.2v-13h-13v13h13ZM31.2 0h18.2A2.6 2.6 0 0 1 52 2.6v18.2a2.6 2.6 0 0 1-2.6 2.6H31.2a2.6 2.6 0 0 1-2.6-2.6V2.6A2.6 2.6 0 0 1 31.2 0Zm15.6 18.2v-13h-13v13h13ZM31.2 28.6h18.2a2.6 2.6 0 0 1 2.6 2.6v18.2a2.6 2.6 0 0 1-2.6 2.6H31.2a2.6 2.6 0 0 1-2.6-2.6V31.2a2.6 2.6 0 0 1 2.6-2.6Zm15.6 18.2v-13h-13v13h13ZM2.6 0h18.2a2.6 2.6 0 0 1 2.6 2.6v18.2a2.6 2.6 0 0 1-2.6 2.6H2.6A2.6 2.6 0 0 1 0 20.8V2.6A2.6 2.6 0 0 1 2.6 0Zm15.6 18.2v-13h-13v13h13Z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </a>

                                            <a href="{{ filters_url($category, ['view-products' => 'list']) }}"
                                                className="{{ session()->get('view-products') === 'list' ? 'pointer-events-none text-blue-600' : '' }} inline-flex items-center justify-center w-10 h-10 rounded-md bg-card hover:text-blue-600">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 52 52">
                                                    <path fillRule="evenodd"
                                                        d="M7.224 4.875v4.694h37.555V4.875H7.224ZM4.877.181a2.347 2.347 0 0 0-2.348 2.347v9.389a2.347 2.347 0 0 0 2.348 2.347h42.25a2.347 2.347 0 0 0 2.347-2.347v-9.39A2.347 2.347 0 0 0 47.127.182H4.877Zm2.347 23.472v4.694h37.555v-4.694H7.224Zm-2.347-4.695a2.347 2.347 0 0 0-2.348 2.348v9.389a2.347 2.347 0 0 0 2.348 2.347h42.25a2.347 2.347 0 0 0 2.347-2.348v-9.388a2.347 2.347 0 0 0-2.347-2.348H4.877ZM7.224 42.43v4.695h37.555v-4.694H7.224Zm-2.347-4.694a2.347 2.347 0 0 0-2.348 2.347v9.39a2.347 2.347 0 0 0 2.348 2.346h42.25a2.347 2.347 0 0 0 2.347-2.347v-9.389a2.347 2.347 0 0 0-2.347-2.347H4.877Z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="text-dark text-xxs sm:text-xs">Found: {/* {{ $products->total() }} */}60 Products</div>
                                    </div>

                                    <div /* x-data="{ sort: '{{ filters_url($category, ['sort' => request('sort')]) }}' }"  */ className="flex flex-col sm:flex-row sm:items-center gap-3">
                                        <span className="text-dark text-xxs sm:text-xs w-full">Sort by</span>
                                        <select name="sort" /* x-model="sort" x-on:change="window.location = sort" */
                                            className="form-select  h-12 px-4 rounded-lg border border-black  bg-gray/5 text-dark text-xxs sm:text-xs shadow-transparent outline-0 transition">
                                            <option value="{{ filters_url($category, ['sort' => '']) }}" className="text-dark">
                                                Default
                                            </option>
                                            <option value="{{ filters_url($category, ['sort' => 'price']) }}" className="text-dark">
                                                Price up
                                            </option>
                                            <option value="{{ filters_url($category, ['sort' => '-price']) }}" className="text-dark">
                                                Price down
                                            </option>
                                            <option value="{{ filters_url($category, ['sort' => 'title']) }}" className="text-dark">
                                                Title
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Products list */}
                                {/* @if (session()->get('view-products') === 'list') */}
                                <div className="products grid grid-cols-1 gap-y-8">
                                    {/* @each('product.shared.product-list', $products, 'product') */}
                                </div>
                                {/* @else */}
                                <div
                                    className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
                                    {currentItems.map(item => (
                                        <ProductCard key={item.id} src={"https://lara2.fcqdaqp.online/storage/images/" + item.thumbnail} title={item.title} price={item.price} />
                                    ))}
                                </div>
                                {/* @endif */}

                                {/* Page pagination */}
                                <div className="mt-12">
                                    {/* {{ $products->withQueryString()->onEachSide(3)->links('pagination::tailwind') }} */}<CatalogNavigation 
                                         totalPages={totalPages} 
                                         currentPage={currentPage} 
                                         onPageChange={handlePageChange} 
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    );
}

export default Catalog;