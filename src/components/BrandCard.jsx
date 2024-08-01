import { Link } from "react-router-dom";

function BrandCard({logo, title}) {

    return (
        <Link to={'/catalog'} className="p-6 rounded-sm bg-gray hover:bg-gray/60">
            <div className="h-12 md:h-16">
                <img src={logo} className="object-contain w-full h-full" alt="{{ $brand->title }}" />
            </div>
            <div className="mt-4 text-xs sm:text-sm lg:text-md font-semibold text-center">
                {title}
            </div>
        </Link>
    );
}

export default BrandCard;