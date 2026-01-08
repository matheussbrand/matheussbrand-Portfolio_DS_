import { Layers, Database, Cloud, Network } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: <Layers size={32} />,
      title: "Engenharia de Software & Arquitetura",
      skills: [
        "Arquitetura de Aplicações Data-Driven",
        "Design de APIs REST",
        "Boas Práticas de Engenharia de Software",
        "Automação de Processos",
        "Versionamento com Git/GitHub"
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Dados & Business Intelligence",
      skills: [
        "SQL (MySQL & PostgreSQL)",
        "Modelagem de Dados",
        "ETL / Análise Exploratória",
        "KPIs & Métricas de Negócio",
        "Visualização de Dados"
      ]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud, Containers & Deploy",
      skills: [
        "Docker & Docker Compose",
        "Deploy de Apps com Streamlit",
        "Ambientes Linux",
        "Automação de Pipelines",
        "Integração Contínua (CI)"
      ]
    },
    {
      icon: <Network size={32} />,
      title: "Analytics & Machine Learning",
      skills: [
        "Análise Estatística",
        "Modelagem Preditiva",
        "Feature Engineering",
        "Machine Learning Aplicado",
        "Tomada de Decisão Orientada a Dados"
      ]
    }
  ];

  const technologies = [
    { name: "Python (Data & Automação)", level: 75 },
    { name: "SQL & Modelagem de Dados", level: 73 },
    { name: "Business Intelligence (Power BI)", level: 72 },
    { name: "Streamlit (Data Apps)", level: 40 },
    { name: "Docker & Ambientes Containerizados", level: 58 },
    { name: "Engenharia de Software Aplicada", level: 51 }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-[#0E0E0E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Stack Técnica & Especialidades
          </h2>
          <p className="text-[#A1A1AA] max-w-3xl mx-auto mb-6">
            Atuação focada em soluções orientadas a dados, unindo engenharia de software,
            análise avançada, visualização e deploy de aplicações analíticas em produção.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
            >
              <div className="text-[#D4AF37] mb-4 group-hover:text-[#FACC15] transition-colors">
                {category.icon}
              </div>
              <h3 className="font-semibold text-[#F5F5F5] mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-[#A1A1AA] text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#D4AF37]/20">
          <h3 className="font-semibold text-[#F5F5F5] mb-8 text-2xl text-center">
            Proficiência Técnica
          </h3>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="text-[#F5F5F5] font-medium">{tech.name}</span>
                  <span className="text-[#D4AF37] font-semibold">
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-[#0E0E0E] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#D4AF37] to-[#FACC15] h-3 rounded-full transition-all duration-1000 shadow-lg shadow-[#D4AF37]/30"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
