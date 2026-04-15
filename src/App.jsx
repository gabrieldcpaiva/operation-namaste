import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, ArrowRight, MessageCircle, CigaretteOff, Zap, BookOpen, Diamond, Bitcoin, CreditCard } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

// --- 1. AGE CHECK OVERLAY ---
const AgeCheckOverlay = ({ onConfirm }) => {
  const containerRef = useRef(null);
  
  const handleComplete = () => {
    gsap.to(containerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: onConfirm
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.age-gate-content', {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.to('.age-gate-logo', {
        filter: 'drop-shadow(0px 0px 25px rgba(204, 88, 51, 0.5))',
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-background p-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center age-gate-content">
        
        <div className="flex flex-col items-center mb-10 gap-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-accent opacity-90 age-gate-logo" />
            <span className="font-sans font-bold text-4xl tracking-tighter text-white">
              NAMASTÊ<span className="text-accent">.</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
            <span className="text-yellow-500 text-sm drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">★</span>
            <span className="text-[10px] sm:text-xs font-bold text-white/80 tracking-[0.2em] uppercase">4.9 NO GOOGLE</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-4 tracking-tight text-white [text-wrap:balance]">Você é maior de 18 anos?</h1>
        <p className="font-serif italic text-xl md:text-2xl text-white/70 mb-12 [text-wrap:balance]">O acesso ao nosso acervo demanda maturidade.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={handleComplete}
            className="relative overflow-hidden group px-10 py-5 rounded-full bg-gradient-to-r from-accent to-[#d36037] text-white font-bold tracking-widest uppercase text-sm shadow-[0_10px_30px_-10px_rgba(204,88,51,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(204,88,51,0.8)] hover:-translate-y-1 transition-all duration-500 ease-out border border-white/10 min-w-[200px]"
          >
            SIM
          </button>
          <a href="https://google.com" className="px-10 py-5 rounded-full border border-sage/20 text-sage/80 font-medium tracking-widest uppercase text-sm min-w-[200px] flex items-center justify-center hover:bg-white/5 transition-all duration-300">
            NÃO
          </a>
        </div>
      </div>
    </div>
  );
};

// --- 2. FLOATING NAVBAR ---
const Navbar = ({ onProductsClick }) => {
  const navRef = useRef(null);

  return (
    <nav ref={navRef} className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center justify-between px-4 sm:px-6 py-2 sm:py-3 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl w-[95%] max-w-5xl transition-all duration-300 text-white shadow-2xl">
      <div className="flex items-center justify-center w-20 h-10 overflow-hidden relative rounded-full">
        <img src="/images/Transparent_Logo.png" alt="Namastê" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] max-w-none object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
      </div>
      <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="group px-6 py-3 rounded-full bg-gradient-to-r from-accent to-[#d36037] text-white font-bold text-xs tracking-widest hidden sm:flex items-center gap-2 shadow-[0_5px_20px_-5px_rgba(204,88,51,0.5)] hover:shadow-[0_8px_25px_-5px_rgba(204,88,51,0.8)] hover:-translate-y-0.5 transition-all duration-300 border border-white/10 uppercase">
        <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
        Fale conosco
      </a>
    </nav>
  );
};

// --- 3. HERO SECTION ---
const Hero = ({ onProductsClick }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-part', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-primary">
      {/* Real Tabacaria Image - Enhanced_Image7.png */}
      <img src="/images/Enhanced_Image7.png" alt="Interior Tabacaria" className="absolute inset-0 w-full h-full object-cover opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-primary/80 to-transparent" />
      
      {/* Mobile-Only Branding explicitly filling the margin hole at the top */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 md:hidden z-20 flex justify-center items-center w-32 h-16 overflow-hidden">
        <img src="/images/Transparent_Logo.png" alt="Namastê" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] max-w-none object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]" />
      </div>

      <div ref={textRef} className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl pt-24">
        <div className="hero-part mb-8 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_30px_rgba(204,88,51,0.15)]">
            <span className="text-yellow-500 text-sm md:text-base drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]">★</span>
            <span className="text-xs font-bold text-white/90 tracking-[0.25em] uppercase">Avaliada em 4.9 Estrelas</span>
        </div>
        <p className="hero-part font-data text-sage mb-4 text-xs md:text-sm tracking-[0.2em] uppercase">Cultura Alternativa • Caratinga, MG</p>
        <h1 className="hero-part text-5xl md:text-7xl lg:text-9xl font-sans font-bold text-background tracking-tighter leading-[0.95] md:leading-[0.9] [text-wrap:balance]">
          Cultura alternativa é a
        </h1>
        <h2 className="hero-part text-6xl md:text-8xl lg:text-[10rem] text-drama text-accent leading-[0.9] mt-2 mb-10 [text-wrap:balance]">
          nossa essência.
        </h2>
        <div className="hero-part flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="relative group flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-[#d36037] text-white px-10 py-5 rounded-full font-bold text-sm w-full sm:w-auto uppercase tracking-widest shadow-[0_10px_30px_-10px_rgba(204,88,51,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(204,88,51,0.8)] hover:-translate-y-1 transition-all duration-500 ease-out border border-white/10">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" /> Fale com a Namastê
          </a>
          <button onClick={onProductsClick} className="relative flex items-center justify-center gap-3 bg-transparent text-white px-10 py-5 rounded-full font-bold text-sm w-full sm:w-auto uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-all duration-300">
            Catálogo Premium
          </button>
        </div>
        <p className="hero-part mt-6 text-background/80 font-medium max-w-xs text-sm border-l border-accent/40 pl-4 py-1">Redução de danos, loja premium e mentoria B2B especializada.</p>
      </div>
    </section>
  );
};

// --- 4. ANIMATED FEATURE CARDS (Pilares) ---
const FeatureCards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pilares" className="py-24 bg-background relative z-20 rounded-t-[3rem] -mt-8">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="mb-16 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">Nossos Quatro<br/><span className="text-drama text-accent">Pilares Fundamentais.</span></h2>
          <p className="text-dark/60 font-medium max-w-md mx-auto">O modelo que nos garantiu autoridade e uma avaliação de classe mundial.</p>
        </div>
        
        {/* Stacked Animated Cards Container */}
        <div ref={cardsRef} className="relative z-10 flex flex-col gap-0 pt-8 pb-32">
          
          {/* Card 1 */}
          <div className="feature-card sticky top-[10vh] z-10 w-full mb-12 lg:mb-24">
            <div className="bg-white p-8 lg:p-14 rounded-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5 hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <CigaretteOff className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="flex-1">
                  <p className="font-data text-accent text-xs lg:text-sm tracking-widest mb-2 uppercase">Pilar 01</p>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-primary tracking-tight">Redução de Danos</h3>
                  <p className="text-dark/60 font-medium leading-relaxed text-lg lg:text-xl">Curadoria premium de materiais. Acreditamos no uso consciente, garantindo a melhor experiência com mínimos riscos.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="feature-card sticky top-[15vh] z-20 w-full mb-12 lg:mb-24">
            <div className="bg-dark text-background p-8 lg:p-14 rounded-[2.5rem] shadow-[0_-15px_50px_-15px_rgba(0,0,0,0.4)] border border-white/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
               <img src="/images/Enhanced_Image6.png" className="absolute top-0 right-0 w-full lg:w-auto h-full object-cover opacity-10 mix-blend-screen pointer-events-none" alt="" />
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <Leaf className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="flex-1">
                   <p className="font-data text-sage text-xs lg:text-sm tracking-widest mb-2 uppercase flex items-center gap-2">Pilar 02 <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" /> LIVE</p>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight">Grow Shop & Lifestyle</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-lg lg:text-xl">
                    Cultura, networking e insumos para cultivo indoor. Expandimos para acomodar lounges. Uma comunidade Namastê.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="feature-card sticky top-[20vh] z-30 w-full mb-12 lg:mb-24">
            <div className="bg-primary text-background p-8 lg:p-14 rounded-[2.5rem] shadow-[0_-15px_50px_-15px_rgba(0,0,0,0.3)] border border-transparent hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <BookOpen className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="flex-1">
                  <p className="font-data text-accent text-xs lg:text-sm tracking-widest mb-2 uppercase">Pilar 03</p>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight">Mentoria Lojista B2B</h3>
                  <p className="text-white/70 font-medium leading-relaxed text-lg lg:text-xl">
                    Da abertura ao controle de caixa e experiência do cliente. Desbrave o mercado ao invés de bater cabeça sozinho.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="feature-card sticky top-[25vh] z-40 w-full">
            <div className="bg-accent text-white p-8 lg:p-14 rounded-[2.5rem] shadow-[0_-20px_60px_-15px_rgba(204,88,51,0.6)] border border-transparent hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
              <div className="absolute -right-10 -bottom-10 lg:-right-20 lg:-bottom-20 opacity-20 pointer-events-none">
                <Diamond className="w-64 h-64 lg:w-96 lg:h-96" />
              </div>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Diamond className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="flex-1">
                  <p className="font-data text-white/60 text-xs lg:text-sm tracking-widest mb-2 uppercase">Pilar 04</p>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Qualidade Premium</h3>
                  <p className="text-white/90 font-medium leading-relaxed text-lg lg:text-xl">
                    Procedência garantida e rigorosamente superior. Importações selecionadas para um público altamente exigente.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 5. PHILOSOPHY ---
const Manifesto = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofia" className="relative py-28 md:py-48 bg-dark text-background overflow-hidden border-t-[6px] border-accent">
      <img src="https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=2000&auto=format&fit=crop&sat=-100" className="absolute inset-0 w-full h-full object-cover opacity-[0.04] mix-blend-screen" alt="BG" />
      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center flex flex-col items-center justify-center" ref={textRef}>
        <p className="manifesto-line text-xl md:text-3xl text-background/50 font-medium mb-8 md:mb-12 italic font-serif [text-wrap:balance] max-w-2xl mx-auto">
          A maioria das lojas foca puramente no básico transacional.
        </p>
        <p className="manifesto-line text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter leading-[1.1] md:leading-[1.05] [text-wrap:balance] max-w-4xl mx-auto">
          Nós construímos <span className="text-drama text-accent border-b-4 border-accent pb-1 md:pb-2">cultura, imersão</span> e sofisticação estratégica.
        </p>
      </div>
    </section>
  );
};

// --- 6. MENTORIA & CONTACT ACTION ---
const Mentoria = () => {
  return (
    <section id="mentoria" className="py-32 bg-primary text-background relative">
    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent pointer-events-none"/>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/Enhanced_Image1.png" alt="Loja Namastê" className="rounded-2xl w-full h-64 object-cover rotate-[-2deg] shadow-xl hover:rotate-0 hover:scale-105 transition-all duration-500" />
              <img src="/images/Enhanced_Image2.png" alt="Produtos Premium" className="rounded-2xl w-full h-64 object-cover translate-y-8 rotate-[2deg] shadow-xl hover:rotate-0 hover:scale-105 transition-all duration-500" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white leading-tight">Sua loja física <br/><span className="text-accent text-drama">de perto.</span></h2>
            <p className="text-xl text-white/70 font-medium mb-12 leading-relaxed">
              Expandimos para dominar a experiência presencial. Se você quer entender as entranhas da operação fiscal, visual e comercial que levam a 4.9 estrelas consolidadas, nossa mentoria te guia diretamente ao prêmio.
            </p>
            <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="relative group inline-flex items-center gap-4 bg-gradient-to-r from-accent to-[#d36037] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_30px_-10px_rgba(204,88,51,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(204,88,51,0.8)] hover:-translate-y-1 transition-all duration-500 ease-out border border-white/5">
              Acessar a Mentoria <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-dark text-background pt-24 pb-12 relative z-30">
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-16">
          
          <div className="max-w-md">
            <div className="flex flex-col gap-4 mb-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-3xl font-bold tracking-tighter text-white">
                <Leaf className="w-8 h-8 text-accent" /> 
                NAMASTÊ<span className="text-accent">.</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 w-fit mx-auto md:mx-0 px-4 py-1.5 rounded-full border border-white/5 mt-2 shadow-sm">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">4.9 NO GOOGLE</span>
              </div>
            </div>
            <p className="text-background/60 font-medium mb-8 text-lg">Sua loja alternativa em Caratinga.<br/>Cultura, redução de danos e estética premium.</p>
            
            <div className="space-y-3 text-background/80 text-sm font-data border-l-2 border-accent pl-4 mb-8">
              <p>📍 Av. Olegário Maciel, 491 / Rua Cel. Antônio da Silva, 192</p>
              <p>⏰ Seg-Sáb: 09h-22h</p>
              <p>🛵 Delivery: (33) 99952-6002</p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-white/10 transition-colors btn-tactile">
                <MessageCircle className="w-5 h-5 text-accent" />
              </a>
              <a href="https://www.instagram.com/namaste_a_tabacaria?igsh=NXo5ZGh4OGhuaHJn" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-white/10 transition-colors btn-tactile">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex gap-16 lg:pt-12">
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-widest uppercase">Navegação</h4>
              <ul className="space-y-4 text-background/60 text-sm font-medium uppercase tracking-wide">
                <li><a href="#filosofia" className="hover:text-accent transition-colors">Filosofia</a></li>
                <li><a href="#pilares" className="hover:text-accent transition-colors">Pilares</a></li>
                <li><a href="#mentoria" className="hover:text-accent transition-colors">Mentoria / B2B</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-data text-background/40">
          <p>© 2026 Namastê - A Tabacaria. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 border border-white/5 px-4 py-2 rounded-lg">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-accent"/> PIX</span>
            <span className="flex items-center gap-1"><CreditCard className="w-3 h-3"/> Credit Card</span>
            <span className="flex items-center gap-1 font-sans font-bold italic">PayPal</span>
            <span className="flex items-center gap-1 font-sans font-bold">Stripe</span>
            <span className="flex items-center gap-1"><Bitcoin className="w-3 h-3 font-bold"/> Crypto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- DUMMY PRODUCTS PAGE ---
const ProductsPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background text-dark pt-32 pb-24 px-4 md:px-6 relative z-10 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <button onClick={onBack} className="mb-12 font-data text-sm flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-widest outline-none">
          ← Voltar ao Setup
        </button>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">Nossos <span className="text-drama text-accent border-b-2 border-accent">Produtos.</span></h1>
        <p className="text-lg md:text-xl text-dark/60 font-medium mb-16 max-w-2xl">O catálogo digital completo está em construção. Explore as prévias luxuosas abaixo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[1,2,3,4,5,6].map(i => {
             const imgMap = {1: '1', 2: '2', 3: '5', 4: '6', 5: '7', 6: '1'};
             return (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-72 bg-dark/5 w-full relative overflow-hidden">
                 <img src={`/images/Enhanced_Image${imgMap[i]}.png`} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Produto" />
              </div>
              <div className="p-8">
                <div className="w-24 h-2 bg-dark/10 rounded-full mb-4"></div>
                <div className="w-3/4 h-5 bg-dark/20 rounded-full mb-8"></div>
                <button className="w-full h-12 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-sm font-bold text-primary tracking-widest uppercase transition-colors btn-tactile">
                    Acessar Estoque
                </button>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen w-full relative selection:bg-accent selection:text-white bg-background overflow-x-hidden">
      {!ageConfirmed && <AgeCheckOverlay onConfirm={() => setAgeConfirmed(true)} />}
      
      {ageConfirmed && (
        <div className="animate-in fade-in duration-1000">
          <Navbar onProductsClick={() => { setView('products'); window.scrollTo(0,0); }} />
          
          {view === 'home' ? (
            <>
              <Hero onProductsClick={() => { setView('products'); window.scrollTo(0,0); }} />
              <FeatureCards />
              <Manifesto />
              <Mentoria />
            </>
          ) : (
            <ProductsPage onBack={() => { setView('home'); window.scrollTo(0,0); }} />
          )}
          
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
