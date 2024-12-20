import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full absolute bottom-0 bg-black flex flex-col items-center justify-center gap-3 text-white p-5">
            <ul className="flex justify-center items-center gap-5">
                <li>
                    <FaInstagram size={40} />
                </li>
                <li>
                    <FaGithub size={40} />
                </li>
            </ul>
            <div>
                <span>
                    Copyright &copy; Ruraeru 2024
                </span>
            </div>
        </footer>
    )
}