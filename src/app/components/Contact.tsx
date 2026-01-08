import { useState } from 'react';
import { Mail, MapPin, Send, Check, AlertTriangle } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrbqaojb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        form.reset();
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  }

  return (
    <section id="contact" className="py-24 px-4 bg-[#0E0E0E]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            Consultoria, projetos enterprise ou oportunidades estratégicas em dados e AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-[#D4AF37]" size={26} />
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Email</p>
                  <p className="text-[#A1A1AA]">matheussilbrand@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4AF37]/20">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#D4AF37]" size={26} />
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Localização</p>
                  <p className="text-[#A1A1AA]">São João de Meriti, Rio de Janeiro - Brasil · Remote Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1A1A1A] p-8 rounded-xl border border-[#D4AF37]/20 space-y-6"
            >
              <input type="hidden" name="_subject" value="Novo contato via Portfólio" />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  required
                  placeholder="Nome"
                  className="input"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="input"
                />
              </div>

              <input
                name="subject"
                required
                placeholder="Assunto"
                className="input"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Descreva seu projeto ou oportunidade"
                className="input resize-none"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3
                           bg-[#D4AF37] text-[#0E0E0E] hover:bg-[#FACC15]
                           transition-all shadow-lg shadow-[#D4AF37]/30"
              >
                {status === 'idle' && (
                  <>
                    <Send size={20} /> Enviar mensagem
                  </>
                )}
                {status === 'sending' && 'Enviando...'}
                {status === 'sent' && (
                  <>
                    <Check size={20} /> Mensagem enviada!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertTriangle size={20} /> Erro ao enviar
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
