import { useState } from "react";
import type { ExperienceType } from "../types/experience";

const EXPERIENCES: ExperienceType[] = [
    {
        company: "Exception Júnior",
        role: "Desenvolvedor Full Stack",
        period: "AGO 2025 - o momento",
        resume: [
            `Atualmente lidero a área de projetos, sendo responsável pela 
            gestão, acompanhamento e entrega de soluções web desenvolvidas 
            pela equipe. Coordeno times multidisciplinares, garantindo a 
            aplicação de metodologias ágeis e o alinhamento com as 
            necessidades dos clientes.`,
            `Entre minhas atividades estão: planejamento estratégico de 
            projetos, definição de prazos, acompanhamento de indicadores de 
            desempenho, capacitação de membros da equipe e mediação da 
            comunicação com stakeholders.`,
            `Essa experiência tem ampliado minha visão sobre liderança, 
            gestão de pessoas e processos, fortalecendo minha atuação tanto 
            no aspecto técnico quanto no organizacional.`
        ]
    },
];

export const Experience = () => {
    const [active, setActive] = useState<number>(0);

    const current = EXPERIENCES[active];

    return (
        <section className={`min-h-screen w-full max-w-3xl md:max-w-[900px] 
            flex flex-col justify-center px-4 mx-auto`}>
            <div className="flex">
                <h2 className="text-3xl font-medium mb-8">
                    Minhas experiências
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
                <nav aria-label="Empresas"
                    className="md:border-l md:border-white/10">
                    <ul className="flex flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible">
                        {EXPERIENCES.map((exp, idx) => (
                            <li key={exp.company} className="min-w-fit">
                                <button
                                    type="button"
                                    onClick={() => setActive(idx)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'ArrowDown') {
                                            e.preventDefault();
                                            setActive((v: number) => Math.min(v + 1, EXPERIENCES.length - 1));
                                        } else if (e.key === 'ArrowUp') {
                                            e.preventDefault();
                                            setActive((v: number) => Math.max(v - 1, 0));
                                        } else if (e.key === 'Home') {
                                            setActive(0);
                                        } else if (e.key === 'End') {
                                            setActive(EXPERIENCES.length - 1);
                                        }
                                    }}
                                    aria-selected={active === idx}
                                    className={`cursor-pointer px-4 py-3 w-full 
                                        text-left transition-colors md:border-l-2
                                        ${active === idx
                                            ? 'bg-white/5 md:border-[#AEA2FE] text-white'
                                            : 'md:border-transparent text-white/70 hover:text-white hover:bg-white/5'}`}
                                >
                                    {exp.company}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sm:max-w-[600px]">
                    <h3 className="text-2xl font-semibold mb-2">
                        {current.role} - <span className="text-[#AEA2FE]">{current.company}</span>
                    </h3>
                    <p className="text-white/60 mb-6">{current.period}</p>

                    {current.resume.map((text, i) => (
                        <li key={i} className="leading-relaxed text-lg flex">
                            <span className="text-[#AEA2FE] mr-3">▸</span>
                            <span>{text}</span>
                        </li>
                    ))}
                </div>
            </div>
        </section>
    );
}