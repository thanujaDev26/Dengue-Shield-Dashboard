export default function Office() {
    return(
        <div className="Office">
            <div>
                <form>
                    <div className="flex justify-center bg-gray-100 py-4">
                        <div className="flex w-1/2 justify-center items-center space-x-4">
                            <div className="w-4/5 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">MOH-Office: </div>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="block grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 w-4/5"
                                    placeholder="Type Here"
                                />
                            </div>
                            <div className="w-1/5 px-2">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>               
                </form>
            </div>
        </div>
    )
}