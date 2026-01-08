import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* === LEFT: TEXTO (VENDA) === */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-sm tracking-wide font-medium">
              DATA SCIENTIST & BI
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] leading-tight">
            Soluções com Dados
            <span className="block text-[#D4AF37]">
              que escalam negócios
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            Profissional de Dados com sólida experiência em BI, SQL e Machine Learning, atuando na tradução de dados em valor estratégico para o negócio.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#D4AF37] text-[#0E0E0E] rounded-xl font-semibold tracking-wide
                         hover:bg-[#FACC15] transition-all duration-300 shadow-lg shadow-[#D4AF37]/30"
            >
              Falar comigo
            </a>

            <a
              href="#projects"
              className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-xl
                         hover:bg-[#D4AF37]/10 hover:border-[#FACC15]
                         transition-all duration-300 font-semibold"
            >
              Ver projetos
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/matheussbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
              aria-label="GitHub"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheussbrandao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:matheussilbrand@gmail.com"
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
              aria-label="Email"
            >
              <Mail size={26} />
            </a>
          </div>
        </div>

  
        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.jpg"
            alt="Foto profissional"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full
                       border-4 border-[#D4AF37]
                       shadow-[0_0_0_8px_rgba(212,175,55,0.15),0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
