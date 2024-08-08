import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

function ProductPage() {

    const location = useLocation();
    const { title, src, formattedPrice, text, properties } = location.state || {};

    const entries = properties ? Object.entries(properties) : [];

    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (event) => {
        setQuantity(event.target.value)
    };

    const handlePlus = () => {
        setQuantity(prevQuantity => prevQuantity + 1); 
    };

    const handleMinus = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <Layout>
            <main className="py-16 lg:py-20">
                <div className="container">

                    {/* Breadcrumbs  */}
                    <ul className="breadcrumbs flex flex-wrap gap-y-1 gap-x-4 mb-6">
                        <li><Link to={"/"} className="text-gray hover:text-darkblue text-xs">Home</Link></li>
                        <li><Link to={"/catalog"} className="text-gray hover:text-darkblue text-xs">Catalog</Link></li>
                        <li><span className="text-gray text-xs">{/* {{ $product-> title}} */}{title}</span></li>
                    </ul>

                    {/* Main product */}
                    <section className="flex flex-col lg:flex-row gap-10 xl:gap-14 2xl:gap-20 mt-12">

                        <div className="basis-full lg:basis-2/5 xl:basis-2/4">
                            <div className="overflow-hidden h-auto max-h-[580px] lg:h-[480px] xl:h-[580px] rounded-xl">
                                <img src={src} className="object-cover w-full h-full"
                                    alt="SteelSeries Aerox 3 Snow" />
                            </div>
                        </div>

                        <div className="basis-full lg:basis-3/5 xl:basis-2/4">
                            <div className="grow flex flex-col lg:py-8">
                                <h1 className="text-lg md:text-xl xl:text-[32px] font-black text-darkblue">{/* {{ $product-> title}} */}{title}</h1>
                                <ul className="flex items-center gap-2 mt-4">
                                    <li className="text-[#FFC107]">
                                        <svg className="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M51.864 19.948a2.758 2.758 0 0 0-2.379-1.9l-15.008-1.363-5.935-13.89a2.765 2.765 0 0 0-5.083.002l-5.935 13.888-15.011 1.363a2.763 2.763 0 0 0-2.377 1.9 2.76 2.76 0 0 0 .808 2.936l11.345 9.95L8.944 47.57a2.763 2.763 0 0 0 1.074 2.853 2.753 2.753 0 0 0 3.036.133L26 42.818l12.942 7.738a2.765 2.765 0 0 0 4.113-2.986l-3.346-14.736 11.345-9.948a2.765 2.765 0 0 0 .81-2.938Z" />
                                        </svg>
                                    </li>
                                    <li className="text-[#FFC107]">
                                        <svg className="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M51.864 19.948a2.758 2.758 0 0 0-2.379-1.9l-15.008-1.363-5.935-13.89a2.765 2.765 0 0 0-5.083.002l-5.935 13.888-15.011 1.363a2.763 2.763 0 0 0-2.377 1.9 2.76 2.76 0 0 0 .808 2.936l11.345 9.95L8.944 47.57a2.763 2.763 0 0 0 1.074 2.853 2.753 2.753 0 0 0 3.036.133L26 42.818l12.942 7.738a2.765 2.765 0 0 0 4.113-2.986l-3.346-14.736 11.345-9.948a2.765 2.765 0 0 0 .81-2.938Z" />
                                        </svg>
                                    </li>
                                    <li className="text-[#FFC107]">
                                        <svg className="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M51.864 19.948a2.758 2.758 0 0 0-2.379-1.9l-15.008-1.363-5.935-13.89a2.765 2.765 0 0 0-5.083.002l-5.935 13.888-15.011 1.363a2.763 2.763 0 0 0-2.377 1.9 2.76 2.76 0 0 0 .808 2.936l11.345 9.95L8.944 47.57a2.763 2.763 0 0 0 1.074 2.853 2.753 2.753 0 0 0 3.036.133L26 42.818l12.942 7.738a2.765 2.765 0 0 0 4.113-2.986l-3.346-14.736 11.345-9.948a2.765 2.765 0 0 0 .81-2.938Z" />
                                        </svg>
                                    </li>
                                    <li className="text-[#FFC107]">
                                        <svg className="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M51.864 19.948a2.758 2.758 0 0 0-2.379-1.9l-15.008-1.363-5.935-13.89a2.765 2.765 0 0 0-5.083.002l-5.935 13.888-15.011 1.363a2.763 2.763 0 0 0-2.377 1.9 2.76 2.76 0 0 0 .808 2.936l11.345 9.95L8.944 47.57a2.763 2.763 0 0 0 1.074 2.853 2.753 2.753 0 0 0 3.036.133L26 42.818l12.942 7.738a2.765 2.765 0 0 0 4.113-2.986l-3.346-14.736 11.345-9.948a2.765 2.765 0 0 0 .81-2.938Z" />
                                        </svg>
                                    </li>
                                    <li className="text-body">
                                        <svg className="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M51.864 19.948a2.758 2.758 0 0 0-2.379-1.9l-15.008-1.363-5.935-13.89a2.765 2.765 0 0 0-5.083.002l-5.935 13.888-15.011 1.363a2.763 2.763 0 0 0-2.377 1.9 2.76 2.76 0 0 0 .808 2.936l11.345 9.95L8.944 47.57a2.763 2.763 0 0 0 1.074 2.853 2.753 2.753 0 0 0 3.036.133L26 42.818l12.942 7.738a2.765 2.765 0 0 0 4.113-2.986l-3.346-14.736 11.345-9.948a2.765 2.765 0 0 0 .81-2.938Z" />
                                        </svg>
                                    </li>
                                </ul>
                                <div className="flex items-baseline gap-4 mt-4">
                                    <div className="text-dark text-lg md:text-xl font-black">{/* {{ $product-> priceFormatted()}} */}${formattedPrice}</div>
                                </div>
                                <ul className="sm:max-w-[360px] space-y-2 mt-8">
                                    {/* @foreach ($product->properties as $property) */}
                                    {entries.map(([key, value]) => (
                                        <li key={key} className="flex justify-between text-gray">
                                            <strong className="text-dark">{key}:</strong> {value}
                                        </li>
                                    ))}

                                    {/* @endforeach  */}
                                </ul>

                                {/* Add to cart  */}
                                <form action="{{ route('cart.add', $product) }}" method="POST" className="space-y-8 mt-8">
                                    {/* @csrf */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                                        {/* @foreach ($options as $option => $values) */}
                                        <div className="flex flex-col gap-2">
                                            <label /* for="option-{{ $loop->index }}" */
                                                className="cursor-pointer text-dark text-xxs font-medium">
                                                {/* {{ $option }} */}
                                            </label>
                                            <select name="options[]" id="option-{{ $loop->index }}"
                                                className="form-select w-full h-12 px-4 rounded-lg border border-solid border-black bg-gray/5 text-dark text-xs shadow-transparent outline-0 transition">

                                                {/* @foreach ($values as $value) */}
                                                <option value="{{ $value->id }}" className="text-dark">
                                                    {/* {{ $value-> title}} */}value
                                                </option>
                                                
                                                {/*  @endforeach */}

                                            </select>
                                        </div>
                                        {/* @endforeach */}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-stretch h-[54px] lg:h-[72px] gap-1">
                                            <button type="button" id="minus" onClick={handleMinus}
                                                className="w-12 h-full rounded-lg border border-solid border-black bg-gray/5 text-dark text-xs shadow-transparent outline-0 transition">-</button>
                                            <input name="quantity" type="number" id="quantity"
                                                className="h-full px-2 md:px-4 text-center rounded-lg border border-solid border-black bg-gray/5 text-dark placeholder:text-dark text-xs  shadow-transparent outline-0 transition"
                                                min="1" max="999" value={quantity} onChange={handleInputChange} placeholder="К-во" />
                                            <button type="button" id="plus" onClick={handlePlus}
                                                className="w-12 h-full rounded-lg border border-solid border-black bg-gray/5 text-dark text-xs shadow-transparent outline-0 transition">+</button>
                                        </div>
                                        <button type="submit" className="!px-6 xs:!px-8 btn btn-gray">Add to cart</button>
                                        <a href="#" className="w-[68px] !px-0 btn btn-blue" title="В избранное">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                viewBox="0 0 52 52">
                                                <path
                                                    d="M26 48.486c-.263 0-.526-.067-.762-.203-.255-.148-6.336-3.679-12.504-8.998-3.656-3.153-6.574-6.28-8.673-9.295C1.344 26.09-.022 22.338 0 18.84c.025-4.072 1.483-7.901 4.106-10.782 2.667-2.93 6.226-4.544 10.021-4.544 4.865 0 9.312 2.725 11.872 7.042 2.56-4.317 7.007-7.042 11.872-7.042 3.586 0 7.007 1.456 9.634 4.1 2.883 2.9 4.52 7 4.494 11.245-.022 3.493-1.414 7.24-4.137 11.134-2.105 3.013-5.02 6.14-8.66 9.291-6.146 5.32-12.183 8.85-12.437 8.997a1.524 1.524 0 0 1-.766.206ZM14.128 6.56c-2.927 0-5.686 1.26-7.768 3.548-2.115 2.324-3.292 5.431-3.313 8.75-.042 6.606 6.308 13.483 11.642 18.09 4.712 4.068 9.49 7.123 11.308 8.236 1.808-1.115 6.554-4.168 11.246-8.235 5.319-4.61 11.668-11.493 11.71-18.11.022-3.44-1.294-6.749-3.608-9.079-2.05-2.063-4.705-3.2-7.473-3.2-4.658 0-8.847 3.276-10.422 8.152a1.523 1.523 0 0 1-2.9 0C22.976 9.836 18.787 6.56 14.129 6.56Z" />
                                            </svg>
                                        </a>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </section>

                    {/* Description */}
                    <section className="mt-12 xl:mt-8 pt-6 lg:pt-12 border-t border-white/10">
                        <h2 className="mb-8 text-lg lg:text-[32px] font-black text-dark">Description</h2>
                        <article className="text-xs md:text-sm text-dark">
                            {/* {!!$product -> text!!} */}
                            {/* {{-- {{ $product-> text}} --}} */}{text}
                        </article>
                    </section>

                    {/*  Watched products  */}
                    <section className="mt-10">
                        <h2 className="mb-12 text-lg lg:text-[32px] font-black text-dark">Viewed products</h2>
                        {/* Products list */}
                        <div
                            className="products grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {/* @each('product.shared.product', $watchedProducts, 'product') */}
                        </div>
                    </section>

                </div>
            </main>
        </Layout>
    );
}

export default ProductPage;