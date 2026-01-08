import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Projects() {
  const sliderRef = useRef<Slider>(null);

  /**
   * ======================================================
   * LISTA DE PROJETOS E ARTIGOS
   * ------------------------------------------------------
   * 👉 Para adicionar novos projetos:
   * 1. Copie um bloco abaixo
   * 2. Ajuste type, title, description, tags, link e metrics
   * 3. Mantenha a ordem: projetos técnicos primeiro, artigos depois
   * ======================================================
   */
  const projects = [
    {
      type: 'project',
      title: "Movie ROI — Indies & Animation",
      description:
        "Análise exploratória e financeira do retorno sobre investimento (ROI) de filmes independentes e animações, utilizando dados globais para identificar padrões de lucratividade, risco e desempenho por gênero.",
      tags: ["Python", "Pandas", "Data Analysis", "ROI", "Storytelling"],
      link: "https://github.com/matheussbrand/Dataglowup---Projeto-2-Movie-ROI-Indies-Animation",
      metrics: "Análise global | Insights acionáveis"
    },

    {
      type: 'project',
      title: "Drug Policy, Prices & Legalization",
      description:
        "Estudo orientado a dados sobre políticas de drogas, preços e impactos da legalização em diferentes países, cruzando variáveis econômicas, sociais e regulatórias para apoiar decisões baseadas em evidências.",
      tags: ["Data Science", "Economia", "Políticas Públicas", "Python", "SQL"],
      link: "https://github.com/matheussbrand/Dataglowup---Projeto-1-Drug-Policy-Prices-Legalization-",
      metrics: "Dados internacionais | Análise comparativa"
    },

    {
      type: 'article',
      title: "Projeto Drug Policy, Prices & Legalization: Como transformei dados globais em um projeto de impacto real",
      description:
        "Artigo técnico-narrativo mostrando como converti bases de dados internacionais em um projeto de ciência de dados completo, do problema à visualização final — com foco em clareza, impacto e tomada de decisão.",
      tags: ["Data Storytelling", "Portfólio", "Ciência de Dados", "Carreira"],
      link: "https://matheussbrandao.substack.com/p/como-eu-transformei-dados-globais?r=2x5g2pa",
      metrics: "Leitura estratégica | Artigo autoral"
    },

    /**
     * ======================================================
     * 🔮 FUTUROS PROJETOS (EXEMPLOS)
     * ------------------------------------------------------
     * - Dashboard de tendências científicas (SciELO)
     * - Análise de dados públicos (IBGE / DataSUS)
     * - Projeto de BI com Power BI + SQL
     * - Estudos de mercado e pricing
     * ======================================================
     */
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="projects" className="py-24 px-4 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Projetos & Artigos
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            Projetos de Ciência de Dados e BI focados em impacto real,
            análise estratégica e suporte à tomada de decisão.
          </p>
        </div>

        <div className="relative">
          {/* Navegação */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0E0E0E]"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0E0E0E]"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {projects.map((item, index) => (
              <div key={index} className="px-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 p-6 h-full group"
                >
                  <div className="flex justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'project'
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'bg-[#FACC15]/20 text-[#FACC15]'
                    }`}>
                      {item.type === 'project' ? 'PROJETO' : 'ARTIGO'}
                    </span>
                    <ExternalLink size={18} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-[#0E0E0E] text-[#A1A1AA] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#D4AF37] text-sm font-semibold border-t border-[#D4AF37]/20 pt-3">
                    {item.metrics}
                  </p>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
