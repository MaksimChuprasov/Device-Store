function Price() {
    return (
        <div className="pb-4">
            <h5 className="mb-4 text-sm 2xl:text-md font-bold">Price</h5>

            <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-gray text-xxs font-medium">From, $</span>
                <span className="text-gray text-xxs font-medium">To, $</span>
            </div>

            <div className="flex items-center gap-3">
                <input
                    id="{{ $filter->id('from') }}"
                    name="{{ $filter->name('from') }}"

                    type="number"
                    className="w-full h-12 px-4 rounded-lg border border-black bg-gray/5 text-dark text-xs shadow-transparent outline-0 transition"
                    value="0" placeholder="От"
                />
                <span className="text-gray text-sm font-medium">–</span>
                <input
                    id="{{ $filter->id('to') }}"
                    name="{{ $filter->name('to') }}"
                    type="number"
                    className="w-full h-12 px-4 rounded-lg border border-black bg-gray/5 text-dark text-xs shadow-transparent outline-0 transition"
                    value="100000" placeholder="До"
                />
            </div>
        </div>
    );
}

export default Price;