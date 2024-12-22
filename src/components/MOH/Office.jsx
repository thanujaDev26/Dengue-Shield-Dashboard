
export default function Office() {
    return(
        <div className="Office">
            <div id="search_MOH">
                <form>
                    <div className="w-full flex">
                        <div className="w-1/8 hidden md:block">
                            <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center">
                                Go Back
                            </button>
                        </div>
                        <div className="flex justify-end bg-white py-4 w-full sm:w-5/6">                        
                            <div className="flex w-full sm:w-1/2 justify-center items-center space-x-2">
                                <div className="w-4/6 sm:w-4/5 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">MOH-Office: </div>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="block grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 w-4/5"
                                        placeholder="Type Here"
                                    />
                                </div>
                                <div className="w-2/6 sm:w-1/5 px-2">
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center"
                                    >
                                        {/* Search Icon for Mobile View */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 block sm:hidden"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-4.35-4.35M9 4a5 5 0 011 9.9V15a5 5 0 110-10z"
                                            />
                                        </svg>

                                        {/* Text for larger screens */}
                                        <span className="hidden sm:inline">Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>  
                    </div>             
                </form>
            </div>
            <div id="Table_MOH" className="w-9/10 shadow-md" style={{border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1rem'}}>
                <table className="w-full px-2" style={{textAlign: 'center', borderCollapse: 'collapse'}}>
                    <thead>
                        <tr style={{backgroundColor: 'transparent', borderBottom: '2px solid #E2E8F0'}}>
                            <th className="py-3 text-xl font-semibold text-gray-900">MOH DETAILS</th>
                            <th className="py-3 text-xl font-semibold text-gray-900">PHI DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom: '1px solid #E2E8F0'}}>
                            <td className="moh-cell px-4 py-6" rowspan="4" style={{borderRight: '2px solid #E2E8F0', borderBottom: '1px solid #E2E8F0'}}>
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-lg font-bold text-gray-900">MOH Office: Matara</p>
                                        <p className="mt-1 text-sm text-gray-600">Address: Matara</p>
                                        <p className="mt-1 text-sm text-gray-600">Contact No: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-6">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">PHI Office: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Address: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Contact No: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #E2E8F0'}}>
                            <td className="px-4 py-6">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">PHI Office: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Address: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Contact No: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #E2E8F0'}}>
                            <td className="px-4 py-6">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">PHI Office: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Address: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Contact No: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-6">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">PHI Office: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Address: Matara</p>
                                        <p className="mt-1 text-xs text-gray-500">Contact No: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}