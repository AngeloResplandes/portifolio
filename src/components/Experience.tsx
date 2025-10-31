import { useState } from "react";
import type { ExperienceType } from "../types/experience";

const EXPERIENCES: ExperienceType[] = [
    {
        company: "Revolut",
        role: "Software Engineer",
        period: "ABR 2025 - SET 2025",
        url: "https://revolut.com",
        points: [
            "Refatorei jobs de reconciliação de transações, reduzindo em 96% a quantidade de conexões ao banco de dados.",
            "Migrei os arquivos estáticos para outro bucket, garantindo zero downtime e rollout controlado.",
        ],
    },
    {
        company: "iFood",
        role: "Software Engineer",
        period: "JAN 2024 - MAR 2025",
        points: [
            "Aprimorei serviços críticos com observabilidade e alertas proativos.",
            "Liderei iniciativas de performance reduzindo latência em APIs de alto tráfego.",
        ],
    },
    {
        company: "Grupo Boticário",
        role: "Software Developer",
        period: "AGO 2023 - DEZ 2023",
        points: [
            "Implementei novas features e padronizei pipelines de CI/CD.",
            "Atuei na melhoria de DX com documentação e automações.",
        ],
    },
    {
        company: "C6 Bank",
        role: "Software Engineer",
        period: "JAN 2023 - JUL 2023",
        points: [
            "Desenvolvi integrações seguras e resilientes para serviços internos.",
            "Trabalhei em rotas de dados com foco em confiabilidade.",
        ],
    },
];

export const Experience = () => {
    const [active, setActive] = useState<number>(0);

    const current = EXPERIENCES[active];

    return (
        <div className="h-screen w-full max-w-5xl flex flex-col justify-center">
            <h2 className="text-3xl font-medium mb-8">Minhas experiências:</h2>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
                <nav aria-label="Empresas"
                    className="md:border-l md:border-white/10">
                    <ul className="flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible">
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
                                    className={`px-4 py-3 w-full text-left transition-colors md:border-l-2
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

                <div>
                    <h3 className="text-2xl font-semibold mb-2">
                        {current.role} - <span className="text-[#AEA2FE]">{current.company}</span>
                    </h3>
                    <p className="text-white/60 mb-6">{current.period}</p>

                    <ul className="space-y-4">
                        {current.points.map((p, i) => (
                            <li key={i} className="leading-relaxed text-lg flex">
                                <span className="text-[#AEA2FE] mr-3">▸</span>
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}