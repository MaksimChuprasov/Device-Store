import brands from "../brands";

function BrandsFilter() {


    return (
        <div>
            <h5 className=" mb-4 text-sm 2xl:text-md font-bold">Brands</h5>
            {brands.map(brand => (
                <div key={brand.id} className="form-checkbox">
                    <input
                        name="{{ $filter->name($id) }}"
                        type="checkbox"
                        value="{{ $id }}"
                        id="filters-brands-{{ $id }}"
                    />
                    <label className="form-checkbox-label">
                        {brand.title}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default BrandsFilter;