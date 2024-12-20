import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <header className="w-full bg-black flex
                         items-center justify-center p-5">
            <div className="flex items-center gap-5">
                <input className="w-[600px] p-2 bg-slate-600 rounded-lg focus:outline-none" type="text" placeholder="검색" />
                <FaSearch size={20} color="white" />
            </div>
        </header>
    )
}