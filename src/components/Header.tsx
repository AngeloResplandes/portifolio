import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const url = {
    github: "https://github.com/AngeloResplandes",
    instagram: "https://www.instagram.com/angelo_resplandes",
    linkedin: "https://www.linkedin.com/in/angelo-resplandes",
}

export const Header = () => {
    return (
        <nav className="bg-[#1E1733] fixed top-0 z-50 w-full flex justify-center gap-4">
            <a
                href={url.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub"
                className="inline-flex items-center gap-2 mx-2 my-4 hover:underline"
            >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
            </a>

            <a
                href={url.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram"
                className="inline-flex items-center gap-2 mx-2 my-4 hover:underline"
            >
                <FaInstagram className="h-5 w-5" />
                <span>Instagram</span>
            </a>

            <a
                href={url.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir LinkedIn"
                className="inline-flex items-center gap-2 mx-2 my-4 hover:underline"
            >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
            </a>
        </nav>
    );
}