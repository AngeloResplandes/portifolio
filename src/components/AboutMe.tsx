export const AboutMe = () => {
    const aboutMe = {
        name: "Angelo Resplandes",
        url: "/angelo.jpeg"
    }

    return (
        <div className="h-screen w-full flex flex-col sm:flex-row justify-center items-center">
            <div className="max-w-80 sm:max-w-[450px] mr-20">
                <h1 className="text-3xl font-medium mb-5">Sobre mim:</h1>
                <p className="text-lg mb-5">
                    🎓 Sou estudante de <span className="font-bold text-[#AEA2FE]">
                        Sistemas de Informação
                    </span> na UNIFESSPA, onde iniciei minha jornada em
                    tecnologia em 2023 como estagiário em telecomunicações.
                </p>
                <p className="text-lg mb-5">
                    🖥️ Atualmente, atuo como bolsista no PET-Saúde Digital e
                    desenvolvedor voluntário na Exception Jr, participando de
                    projetos e melhorias de sistemas.
                </p>
                <p className="text-lg">
                    🎯 Procuro evoluir constantemente na área e futuramente
                    seguir carreira como
                    <span className="font-bold text-[#AEA2FE]"> Engenheiro de Software</span>.
                </p>
            </div>
            <div>
                <img src={aboutMe.url} alt={aboutMe.name}
                    className="w-2xs object-cover rounded-lg" />
            </div>
        </div>
    );
}