import { useState } from "react";
import { Link } from 'react-router-dom';
import brands from "../brands";


function Header() {

    const [search, setSearch] = useState('');
    const handleInputChange = (event) => {
        setSearch(event.target.value)
    };

    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },
        {
            title: 'Catalog',
            key: '/catalog'
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const pathName = window.location.pathname

    return (
        <>
            <header className="header py-4 xl:py-4 bg-bgheader sticky top-0 z-50 shadow-md">
                <div className="container">
                    <div className="header-inner flex items-center justify-between lg:justify-start">
                        {/* header-logo */}
                        <div className="header-logo shrink-0">
                            <Link to={"/"}>
                                <img src="/img/logo.svg"
                                    className="w-[30px] xs:w-[55px] md:w-[100px] h-[30px] xs:h-[55px] md:h-[100px] absolute -mt-6"
                                    alt="CutCode" />
                            </Link>
                        </div>

                        <div className="header-menu grow hidden lg:flex items-center ml-8 gap-8">
                            <form action="{{ route('catalog') }}" className="hidden lg:flex ml-24 gap-4 w-2/5">
                                <input name="search" value={search} type="search"
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4  rounded border border-black focus:border-black focus:shadow-[0_0_0_1px_#000000] bg-white/5 text-black text-xs shadow-transparent outline-0 transition"
                                    placeholder="Поиск..." required />
                                <button type="submit" className="shrink-0 w-12 !h-12 !px-0 btn btn-blue">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                                        <path
                                            d="M50.339 47.364 37.963 34.492a20.927 20.927 0 0 0 4.925-13.497C42.888 9.419 33.47 0 21.893 0 10.317 0 .898 9.419.898 20.995S10.317 41.99 21.893 41.99a20.77 20.77 0 0 0 12.029-3.8l12.47 12.97c.521.542 1.222.84 1.973.84.711 0 1.386-.271 1.898-.764a2.742 2.742 0 0 0 .076-3.872ZM21.893 5.477c8.557 0 15.518 6.961 15.518 15.518s-6.96 15.518-15.518 15.518c-8.556 0-15.518-6.961-15.518-15.518S13.337 5.477 21.893 5.477Z" />
                                    </svg>
                                </button>
                            </form>
                            <div className='text-sm flex gap-6 items-center'>
                                {menuItems.map((item) => {
                                    return (
                                        <li key={item.key} className={`flex items-center text-darkblue hover:text-gray transition ${item.key === pathName && 'font-bold'}`}>
                                            <Link to={`${item.key}`}>{item.title}</Link>
                                        </li>
                                    )
                                })}

                                <div className="relative inline-block -ml-4 menu-container mr-20">
                                    <button onClick={toggleMenu} className="flex items-center text-darkblue hover:text-gray transition">
                                        <span className="hidden md:block ml-2">Categories</span>
                                        <svg className="shrink-0 w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 16">
                                            <path fillRule="evenodd" d="M27.536.72a2 2 0 0 1-.256 2.816l-12 10a2 2 0 0 1-2.56 0l-12-10A2 2 0 1 1 3.28.464L14 9.397 24.72.464a2 2 0 0 1 2.816.256Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {isOpen && (
                                        <div className="absolute z-50 top-2 -right-[100px] w-[280px] sm:w-[300px] mt-14 p-4 rounded-lg shadow-xl bg-bgheader divide-y divide-black">
                                            <div className="pb-3">
                                                <Link to="/catalog" className="text-black hover:text-darkblue bg-bgheader text-xs font-medium">
                                                    All Categories
                                                </Link>
                                            </div>
                                            <div className="pt-3">
                                                <ul className="space-y-2">
                                                    {brands.map((brand) => (
                                                        <div className="bg-bgheader" key={brand.id}>
                                                            <li>
                                                                <Link className="text-black hover:text-darkblue text-xs font-medium">
                                                                    {brand.title}
                                                                </Link>
                                                            </li>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="header-actions flex items-center gap-3 md:gap-5">
                                    <Link className="flex items-center gap-3 text-darkblue hover:text-gray" to={"/cart"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-7 md:h-7" fill="currentColor"
                                            viewBox="0 0 52 52">
                                            <path
                                                d="M26 0a10.4 10.4 0 0 0-10.4 10.4v1.733h-1.439a5.668 5.668 0 0 0-5.668 5.408L7.124 46.055A5.685 5.685 0 0 0 12.792 52h26.416a5.686 5.686 0 0 0 5.668-5.945l-1.37-28.514a5.668 5.668 0 0 0-5.667-5.408H36.4V10.4A10.4 10.4 0 0 0 26 0Zm-6.933 10.4a6.934 6.934 0 0 1 13.866 0v1.733H19.067V10.4Zm-2.843 8.996a1.734 1.734 0 1 1 3.468 0 1.734 1.734 0 0 1-3.468 0Zm16.085 0a1.733 1.733 0 1 1 3.467 0 1.733 1.733 0 0 1-3.467 0Z" />
                                        </svg>
                                        <div className="hidden sm:flex flex-col gap-2">
                                            <span className="text-gray-800 text-xxs !leading-none">
                                                2 pcs.
                                            </span>
                                            <span className="text-black text-xxs 2xl:text-xs font-bold !leading-none">
                                                $2400 {/* {{ cart()->total() }} */}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <a href="{{ route('login') }}" className="profile hidden xs:flex items-center">
                                    <svg className="profile-icon w-8 h-8 text-darkblue" xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true" role="img" width="1em"
                                        height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                        <defs />
                                        <path
                                            d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24zM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8zM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0z"
                                            fill="currentColor" />
                                    </svg>
                                    <span className="profile-text relative ml-2 text-black text-xxs md:text-xs font-bold">Login</span>
                                </a>
                            </div>
                        </div>


                        {/*<button id="burgerMenu" className="flex lg:hidden text-darkblue hover:text-blue-600 transition">
                            <span className="sr-only">Меню</span>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                         @guest
                        <a href="{{ route('login') }}" className="profile hidden xs:flex items-center">
                            <svg className="profile-icon w-8 h-8 text-darkblue" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" role="img" width="1em"
                                height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                <defs />
                                <path
                                    d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24zM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8zM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0z"
                                    fill="currentColor" />
                            </svg>
                            <span className="profile-text relative ml-2 text-black text-xxs md:text-xs font-bold">Login</span>
                        </a>
                         @endguest */}

                        {/*    </div> {/* /.header-actions*/}
                    </div> {/* /.header-inner  */}
                </div> {/* /.container */}
            </header >
        </>
    );
}

export default Header;