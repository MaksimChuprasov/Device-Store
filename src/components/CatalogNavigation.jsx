

function CatalogNavigation({ totalPages, currentPage, onPageChange }) {

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav role="navigation" aria-label="Pagination Navigation" className="flex items-center justify-between">
            <div className="flex justify-between flex-1 sm:hidden">
                {currentPage === 1 ? (
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-inherit border border-gray-300 cursor-default leading-5 rounded-md dark:text-gray-600 dark:bg-gray-800 dark:border-gray-600">
                        Previous
                    </span>
                ) : (
                    <button onClick={() => onPageChange(currentPage - 1)} className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-inherit border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-700 dark:active:bg-gray-700 dark:active:text-gray-300">
                        Previous
                    </button>
                )}

                {currentPage === totalPages ? (
                    <span className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-inherit border border-gray-300 cursor-default leading-5 rounded-md dark:text-gray-600 dark:bg-gray-800 dark:border-gray-600">
                        Next
                    </span>
                ) : (
                    <button onClick={() => onPageChange(currentPage + 1)} className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-inherit border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-700 dark:active:bg-gray-700 dark:active:text-gray-300">
                        Next
                    </button>
                )}
            </div>

            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                <div>
                    <span className="relative z-0 inline-flex shadow-sm rounded-md">
                        {currentPage === 1 ? (
                            <span className="no-select relative inline-flex items-center px-2 py-2 text-sm font-medium text-black bg-inherit border border-black cursor-default rounded-l-md leading-5 dark:bg-gray-800 dark:border-gray-600" aria-hidden="true">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        ) : (
                            <button onClick={() => onPageChange(currentPage - 1)} className="no-select relative inline-flex items-center px-2 py-2 text-sm font-medium text-black bg-inherit border border-black rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-600 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:active:bg-gray-700 dark:focus:border-blue-800" aria-label="Previous">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}

                        {pageNumbers.map((number) => (
                            number === currentPage ? (
                                <span key={number} aria-current="page" className="no-select relative inline-flex items-center px-4 py-2 -ml-px text-sm font-bold text-gray-500 bg-card border border-black cursor-default leading-5 dark:bg-gray-800 dark:border-gray-600">
                                    {number}
                                </span>
                            ) : (
                                <button key={number} onClick={() => onPageChange(number)} className="no-select relative inline-flex items-center px-4 py-2 -ml-px text-sm font-thin text-black bg-inherit border border-black leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:text-gray-300 dark:active:bg-gray-700 dark:focus:border-blue-800">
                                    {number}
                                </button>
                            )
                        ))}

                        {currentPage === totalPages ? (
                            <span className="no-select relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-inherit border border-black cursor-default rounded-r-md leading-5 dark:bg-gray-800 dark:border-gray-600" aria-hidden="true">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        ) : (
                            <button onClick={() => onPageChange(currentPage + 1)} className="no-select relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-black bg-inherit border border-black rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:active:bg-gray-700 dark:focus:border-blue-800" aria-label="Next">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default CatalogNavigation;