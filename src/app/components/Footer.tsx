import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] border-t border-[#D4AF37]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-[#0E0E0E] font-bold text-xl">DS</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5]">Data Scientist</h3>
            </div>
            <p className="text-[#A1A1AA] leading-relaxed">
              Soluções com Dados que escalam negócios
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4 text-lg">Conecte-se</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/matheussbrand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#1A1A1A] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/matheussbrandao/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#1A1A1A] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {/*<a 
                // href="https://twitter.com/seuusuario" 
                // target="_blank" 
                // rel="noopener noreferrer" 
                // className="w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#1A1A1A] transition-all duration-300"
                // aria-label="Twitter"
              // >
                // <Twitter size={24} />
              // </a>*/}
              <a 
                href="mailto:matheussilbrand.com" 
                className="w-12 h-12 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#1A1A1A] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-[#A1A1AA] text-sm">
              Disponível para projetos e oportunidades full-time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A1A1AA] text-sm">
              &copy; {currentYear} Matheus Brandão - Data Scientist Portfolio. Todos os direitos reservados.
            </p>
            <p className="text-[#A1A1AA] text-sm">
              Desenvolvido com React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
