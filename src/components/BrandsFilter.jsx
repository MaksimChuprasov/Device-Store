import { useState } from "react";
import brands from "../brands";

function BrandsFilter() {

    const [checkedState, setCheckedState] = useState(
        new Array(brands.length).fill(false)
    );

    const handleToggle = (index) => {
        const updatedCheckedState = checkedState.map((item, idx) =>
            idx === index ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const handleResetFilter = () => {
        setCheckedState(new Array(checkedState.length).fill(false));
    };

    return (
        <div>
            <h5 className=" mb-4 text-sm 2xl:text-md font-bold">Brands</h5>
            {brands.map((brand, index) => (
                <div
                    key={brand.id}
                    className={`form-checkbox ${checkedState[index] ? 'checked' : ''}`}
                    onClick={() => handleToggle(index)}
                >
                    <input
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={() => handleToggle(index)}
                    />
                    <label className="form-checkbox-label">
                        {brand.title}
                    </label>
                </div>
            ))}
            <div>
                <button type="submit" disabled className="w-full !h-16 mt-4 btn btn-blue">Apply</button>
            </div>
            <div>
                <button type="reset" onClick={handleResetFilter}
                    className="w-full !h-16 mt-4 btn btn-outline">Reset filters</button>
            </div>
        </div>
    );
}

export default BrandsFilter;