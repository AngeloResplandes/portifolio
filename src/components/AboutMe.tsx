export const AboutMe = () => {
    const aboutMe = {
        name: "Angelo Resplandes",
        url: "/angelo.jpeg"
    }

    return (
        <section className={`min-h-screen w-full flex flex-col sm:flex-row 
        justify-center items-center gap-8 sm:gap-12 px-4 mb-10 sm:m-0`}>
            <div className="max-w-[20rem] sm:max-w-[450px] sm:mr-20">
                <h1 className="text-3xl font-medium mb-5">Sobre mim</h1>
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
            <div className="flex justify-center">
                <img src={aboutMe.url} alt={aboutMe.name}
                    className="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded-lg" />
            </div>
        </section>
    );
}