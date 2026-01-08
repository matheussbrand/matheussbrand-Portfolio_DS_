import { Award, Building2, Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Sobre
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* TEXTO PRINCIPAL */}
          <div className="space-y-6">
            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Sou profissional de <strong className="text-[#F5F5F5]">Ciência de Dados e Business Intelligence</strong>, 
              com experiência prática em análise de dados, automação de processos e desenvolvimento de dashboards 
              interativos para suporte à tomada de decisão.
            </p>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Atuo transformando dados brutos em <strong className="text-[#F5F5F5]">insights acionáveis</strong>, 
              utilizando SQL, Python e Power BI, com foco em eficiência operacional, monitoramento de KPIs 
              e apoio estratégico a áreas de negócio em ambientes dinâmicos.
            </p>

            <div className="pt-4">
              <h3 className="text-[#D4AF37] font-semibold mb-4 text-xl">
                Áreas de Atuação
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Análise de Dados',
                  'Business Intelligence',
                  'Dashboards & KPIs',
                  'Automação com Python',
                  'SQL & Modelagem de Dados',
                  'Visualização de Dados'
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-[#F5F5F5]">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="space-y-6">
            {/* EXPERIÊNCIA */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="text-[#D4AF37]" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#F5F5F5] mb-2 text-lg">
                    Experiência Profissional
                  </h3>
                  <p className="text-[#A1A1AA]">
                    Data Processing Analyst · Data Analyst · BI
                  </p>
                  <p className="text-[#A1A1AA] text-sm mt-1">
                    Freelancer & Empresas de Inteligência de Mercado
                  </p>
                  <p className="text-[#A1A1AA] text-sm mt-2">
                    Automação de análises, processamento de grandes volumes de dados 
                    e criação de dashboards estratégicos com redução de tempo operacional.
                  </p>
                </div>
              </div>
            </div>

            {/* FORMAÇÃO */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                    <Code2 className="text-[#D4AF37]" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#F5F5F5] mb-2 text-lg">
                    Formação Acadêmica
                  </h3>
                  <p className="text-[#A1A1AA] text-sm">
                    Tecnólogo em Ciência de Dados
                  </p>
                  <p className="text-[#A1A1AA] text-sm">
                    Pós-graduação em Engenharia de Software
                  </p>
                  <p className="text-[#A1A1AA] text-sm">
                    MBA em Business Intelligence
                  </p>
                  <p className="text-[#A1A1AA] text-sm mt-1">
                    Licenciatura em Matemática (em andamento)
                  </p>
                </div>
              </div>
            </div>

            {/* DIFERENCIAIS */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                    <Award className="text-[#D4AF37]" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#F5F5F5] mb-2 text-lg">
                    Diferenciais Profissionais
                  </h3>
                  <p className="text-[#A1A1AA] text-sm">
                    Forte capacidade analítica e comunicação clara com áreas de negócio
                  </p>
                  <p className="text-[#A1A1AA] text-sm">
                    Experiência prática com KPIs, métricas e tomada de decisão orientada a dados
                  </p>
                  <p className="text-[#A1A1AA] text-sm">
                    Perfil proativo, adaptável e orientado a resultados
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
