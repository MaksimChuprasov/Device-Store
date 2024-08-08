import brands from "../brands";

function BrandsFilter() {


    return (
        <div>
            <h5 className=" mb-4 text-sm 2xl:text-md font-bold">{/* {{ $filter-> title()}} */}Brands</h5>

            {/* @foreach ($filter->values() as $id => $title) */}
                {brands.map(brand => (
                    <div key={brand.id} className="form-checkbox">
                        <input
                            name="{{ $filter->name($id) }}"
                            type="checkbox"
                            value="{{ $id }}" /* @checked($filter->requestValue($id)) */
                            id="filters-brands-{{ $id }}"
                    />
                        <label /* for="filters-brands-{{ $id }}" */ className="form-checkbox-label">
                            {/* {{ $title }} */}{brand.title}
                        </label>
                    </div>
                ))}
                {/* @endforeach */}
        </div>
    );
}

export default BrandsFilter;