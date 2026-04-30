import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from 'lucide-react';

const Offer = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.offer-el', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-background font-sans selection:bg-accent selection:text-white">
      {/* Header Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-accent rotate-180" />
          <span className="text-white/80 font-bold uppercase tracking-widest text-xs">Voltar</span>
        </a>
        <img 
          src="/images/001_Logo.png" 
          onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
          alt="Namastê" 
          className="h-8 object-contain"
        />
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-dark pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <div className="offer-el inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full border border-accent/20 mb-8 font-bold uppercase tracking-widest text-xs">
            <Target className="w-3.5 h-3.5" />
            Mentoria B2B
          </div>
          <h1 className="offer-el text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Abra sua tabacaria sem perder tempo ou dinheiro.
          </h1>
          <p className="offer-el text-lg md:text-xl text-white/70 font-medium mb-12 leading-relaxed">
            Nós erramos muito nos últimos 5 anos para que você não precise errar agora. Aprenda o caminho direto para montar, gerir e lucrar com o seu próprio espaço.
          </p>
          <a href="#checkout" className="offer-el inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_-5px_rgba(204,88,51,0.5)] hover:scale-105 transition-all">
            Quero agendar minha sessão <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 px-4 border-t border-white/5 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">A maioria fecha no primeiro ano.</h2>
              <div className="space-y-4 text-white/70 font-medium leading-relaxed">
                <p>O mercado parece fácil de fora. Você aluga uma porta, compra umas sedas, coloca um letreiro de neon e espera os clientes entrarem.</p>
                <p>Na prática, o estoque fica parado. O fornecedor atrasa. O caixa não fecha. O aluguel não espera.</p>
                <p>Eu sei porque eu passei por isso. Tive que aprender a lidar com fornecedores, entender de redução de danos, escolher o ponto certo e transformar clientes casuais em clientes fiéis. Custou caro. Você pode cortar esse caminho.</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="font-bold text-white text-xl mb-6">O que você ganha na mentoria:</h3>
              <ul className="space-y-4">
                {[
                  'Análise de ponto e estrutura',
                  'Lista de fornecedores confiáveis',
                  'Curadoria de estoque inicial',
                  'Posicionamento e marketing',
                  'Gestão de caixa para o setor'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section id="checkout" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Um atalho de 5 anos.</h2>
          <p className="text-white/60 mb-12">Sessão individual online de 2 horas comigo, Sérgio.</p>
          
          <div className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[2.5rem] max-w-xl mx-auto">
            <div className="bg-dark rounded-[2.5rem] p-10 md:p-14 text-center">
              <div className="text-5xl font-bold text-white mb-2">R$ 497</div>
              <p className="text-white/50 text-sm font-medium mb-8">Pagamento único. Acesso direto ao meu WhatsApp pessoal depois da sessão.</p>
              <a 
                href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-white text-black px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors mb-4"
              >
                Garantir minha vaga
              </a>
              <p className="text-white/40 text-xs flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Namastê Tabacaria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Offer;
