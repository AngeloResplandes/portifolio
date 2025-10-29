import { TiMessages } from "react-icons/ti";

export const Main = () => {
    return (
        <div className="h-[90vh] sm:h-screen w-full flex justify-center items-center">
            <div className="h-72 flex flex-col justify-evenly items-center text-center text-xl">
                <div>
                    <p className="mb-3">Olá! Sou o</p>
                    <h1 className="text-5xl font-medium mb-5">
                        <span className="animate-color-cycle">
                            Ângelo Resplandes
                        </span>
                    </h1>
                </div>
                <div className="mb-10 max-w-[550px]">
                    <p>Um Desenvolvedor de Software apaixonado por tecnologia. Meu propósito é criar soluções e inovar com novas ideias.</p>
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
        </div>
    );
}