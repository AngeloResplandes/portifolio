import { TiMessages } from "react-icons/ti";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const Main = () => {
    return (
        <main className={`h-[90vh] sm:h-screen w-full flex flex-col 
        justify-center items-center relative px-4`}>
            <div className={`min-h-72 flex flex-col justify-evenly items-center 
                text-center text-lg sm:text-xl`}>
                <div>
                    <p className="mb-3">Olá! Sou o</p>
                    <h1 className="text-4xl sm:text-5xl font-medium mb-5">
                        <span className="animate-color-cycle">
                            Ângelo Resplandes
                        </span>
                    </h1>
                </div>
                <div className="mb-10 max-w-[20rem] sm:max-w-[550px]">
                    <p>
                        Um <span className="font-bold">
                            Desenvolvedor de Software
                        </span> apaixonado por tecnologia. Meu propósito é
                        criar <span className="font-bold">soluções</span> e
                        <span className="font-bold"> inovar</span> com novas ideias.
                    </p>
                </div>
                <a
                    href=""
                    target=""
                    rel="noopener noreferrer"
                    aria-label="Abrir Formulário"
                    className={`bg-white text-[#665D91] flex items-center 
                        w-auto h-8 p-6 rounded-lg transition duration-300 
                        ease-in-out hover:bg-[#665D91] hover:text-white
                        hover:shadow-xl`}>
                    <TiMessages className="h-5 w-5 mr-3" />
                    <span className="font-medium">Vamos conversar!</span>
                </a>
            </div>
            <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2">
                <MdKeyboardDoubleArrowDown className="h-10 w-10" aria-hidden />
            </div>
        </main>
    );
}