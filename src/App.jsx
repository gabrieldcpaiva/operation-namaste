import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, MapPin, Clock, ArrowRight, CheckCircle2, ShieldCheck, Star, Navigation, ShoppingBag } from 'lucide-react';
import Links from './Links';

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
      duration: 1,
      ease: "power3.inOut",
      onComplete: onConfirm
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.age-gate-content', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-background p-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center age-gate-content bg-dark/40 p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl w-full">
        <ShieldCheck className="w-12 h-12 text-accent mb-6" />
        <h1 className="text-3xl font-sans font-bold mb-3 tracking-tight text-white">Você tem +18 anos?</h1>
        <p className="font-sans text-white/70 mb-8 text-sm leading-relaxed">
          O conteúdo deste site é restrito para maiores de idade. Por favor, confirme para acessar.
        </p>
        <div className="flex flex-col w-full gap-3">
          <button 
            onClick={handleComplete}
            className="w-full py-4 rounded-xl bg-accent text-white font-bold tracking-wide uppercase text-sm shadow-[0_4px_14px_0_rgba(204,88,51,0.39)] hover:shadow-[0_6px_20px_rgba(204,88,51,0.23)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Sim, sou maior
          </button>
          <a href="https://google.com" className="w-full py-4 rounded-xl bg-white/5 text-white/60 font-medium tracking-wide uppercase text-sm border border-white/10 hover:bg-white/10 transition-colors">
            Não
          </a>
        </div>
      </div>
    </div>
  );
};

// --- 2. MOBILE-FIRST HEADER ---
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5 px-4 md:px-8 py-4 flex items-center justify-between transition-all duration-300">
      <div className="flex items-center">
        {/* Usando o logotipo original, agora maior e com mais presença */}
        <img 
          src="/images/001_Logo.png" 
          onError={(e) => { e.target.onerror = null; e.target.src = '/images/Fallback_logo.png'; }}
          alt="Namastê Tabacaria" 
          className="h-14 md:h-16 object-contain"
        />
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/80">
        <a href="#historia" className="hover:text-accent transition-colors">História</a>
        <a href="#espaco" className="hover:text-accent transition-colors">O Espaço</a>
        <a href="#produtos" className="hover:text-accent transition-colors">Produtos</a>
      </nav>

      <a 
        href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" 
        target="_blank" 
        rel="noreferrer" 
        className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_4px_14px_0_rgba(204,88,51,0.39)] hover:bg-[#b04a29] hover:-translate-y-0.5 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Me Chama no Zap</span>
      </a>
    </header>
  );
};

// --- 3. HERO SECTION ---
const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-el', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.5
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col justify-center min-h-[90vh] bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img src="/images/002_Storefront.png" alt="Namastê Frente" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl pt-10">
        {/* Google Rating - SUBSTITUÍDO POR TEXTO + ÍCONE */}
        <div className="hero-el inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-6 shadow-xl">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">4.9 NO GOOGLE</span>
        </div>
        
        <h1 className="hero-el text-5xl sm:text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter leading-[1.05] mb-6 [text-wrap:balance]">
          Sua loja <span className="text-accent italic font-serif">alternativa</span> em Caratinga.
        </h1>
        
        <p className="hero-el text-lg sm:text-xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
          Tabacaria, Grow Shop, Lounge, Barber & Tattoo. Um espaço de encontro, networking e redução de danos. Há 5 anos construindo história com você.
        </p>

        <div className="hero-el flex flex-col sm:flex-row gap-4">
          <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_4px_20px_-5px_rgba(204,88,51,0.6)] hover:bg-[#b04a29] transition-all">
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
          </a>
          <a href="#produtos" className="flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm border border-white/20 hover:bg-white/20 transition-all">
            <ShoppingBag className="w-5 h-5" /> Ver Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

// --- 4. THE STORY (DIA, DIA, DIA) ---
const Story = () => {
  return (
    <section id="historia" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative border border-primary/10">
              <img src="/images/002_Essential.png" alt="Essência Namastê" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif italic text-2xl">"O seu amigo vira seu cliente."</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-40"></div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-accent tracking-[0.2em] uppercase mb-4">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold text-primary tracking-tight mb-8 leading-tight">
              "Dia, dia, dia. <br/>Essa que é a viagem."
            </h3>
            
            <div className="space-y-6 text-dark/80 font-medium text-lg leading-relaxed">
              <p>
                A Namastê nasceu há 5 anos, idealizada pelo Sérgio. "Eu sentia necessidade aqui de acessórios para o nosso recheio. Falei com a minha mãe que ia abrir uma tabacaria. Ela falou: 'Meu filho, vai vender cigarro?'. Mas eu meti a cara e fui."
              </p>
              <p>
                Nesse caminho, fomos aprendendo junto com o cliente. O que começou como uma simples tabacaria virou referência em <strong className="text-primary">Redução de Danos</strong>. Nós te ensinamos qual o papel melhor, o gás certo, o produto ideal.
              </p>
              <p className="font-serif italic text-xl text-primary/80 border-l-4 border-accent pl-4 py-2">
                "Não vendemos só produto, criamos amizade. E nesse networking que acontece aqui na loja, negócios rolam, ideias surgem."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. THE SPACE (O ESPAÇO) ---
const TheSpace = () => {
  // IMAGENS CORRIGIDAS BASEADO NO CONTEÚDO
  const spaces = [
    { title: "Tabacaria Premium", desc: "Redução de danos e curadoria dos melhores produtos.", img: "05_Store.png" }, // Loja interna
    { title: "Grow Shop", desc: "Tudo pro seu cultivo interno, do substrato à iluminação.", img: "02_Product.png" }, // Produtos de grow
    { title: "Lounge & Cozinha", desc: "Tira-gosto, bebida, sofá e muito rock'n'roll.", img: "04_Food.png" }, // Pizza/Comida
    { title: "Tattoo & Barber", desc: "Cuidando do visual enquanto você relaxa e curte a vibe.", img: "03_Product.png" } // Produtos de tattoo/barbearia
  ];

  return (
    <section id="espaco" className="py-24 bg-primary text-background px-4 border-y border-white/10 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Muito mais que loja.</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Nosso espaço foi ampliado para ser o seu refúgio, do cultivo ao corte de cabelo.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((s, i) => (
            <div key={i} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img src={`/images/${s.img}`} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. PRODUCTS (NOVA SESSÃO BASEADA NO 002_ABOUT) ---
const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-background px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-dark rounded-[3rem] p-10 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Fundo decorativo para os produtos */}
          <div className="absolute inset-0 w-full h-full">
             <img src="/images/02_Product.png" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" alt="texture" />
          </div>

          <div className="md:w-1/2 relative z-10">
            <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">Catálogo Completo</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">Explore nossos produtos.</h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-medium">
              Da seda orgânica mais fina aos equipamentos avançados de cultivo. Acesse nossa loja virtual para conferir todo o catálogo e fazer o seu pedido diretamente com entrega local.
            </p>
            <a 
              href="https://www.meucomercio.com.br/Namaste" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_4px_20px_-5px_rgba(204,88,51,0.6)]"
            >
              <ShoppingBag className="w-5 h-5" /> Acessar Loja Virtual
            </a>
          </div>

          <div className="md:w-1/2 relative z-10 flex justify-center">
            {/* Um mockup / imagem atrativa dos produtos */}
             <div className="grid grid-cols-2 gap-4">
               <img src="/images/03_Product.png" alt="Produtos Namastê" className="rounded-2xl h-48 w-full object-cover shadow-lg" />
               <img src="/images/05_Store.png" alt="Interior Loja" className="rounded-2xl h-48 w-full object-cover shadow-lg translate-y-6" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. CALL TO ACTION / FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-dark text-background pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Texture */}
      <img src="/images/002_Storefront.png" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-luminosity" alt="texture" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <img src="/images/001_Logo.png" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} alt="Namastê" className="h-16 mb-6 object-contain" />
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Namastê Tabacaria</h3>
            <p className="text-white/50 text-sm">Cultura, redução de danos e lifestyle.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-4">Informações</h4>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-medium">Av. Olegário Maciel, 491<br/>Rua Cel. Antônio da Silva, 192<br/>Caratinga, MG</p>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-medium">Seg a Sáb: 09h às 22h</p>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Navigation className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-medium">Delivery: (33) 99952-6002</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/namaste_a_tabacaria" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-accent border border-white/10 rounded-full flex items-center justify-center transition-all text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-accent border border-white/10 rounded-full flex items-center justify-center transition-all text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">© {new Date().getFullYear()} Namastê. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            {/* Substituído imagem do rating quebrada por texto minimalista aqui também */}
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-wider">4.9 Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---
import Offer from './Offer';

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const isLinksPage = window.location.pathname === '/links' || window.location.pathname === '/bio';
  const isOfferPage = window.location.pathname === '/oferta' || window.location.pathname === '/offer';

  if (isLinksPage) {
    return <Links />;
  }

  if (isOfferPage) {
    return <Offer />;
  }

  return (
    <div className="min-h-screen w-full bg-background font-sans">
      {!ageConfirmed && <AgeCheckOverlay onConfirm={() => setAgeConfirmed(true)} />}
      
      {ageConfirmed && (
        <div className="animate-in fade-in duration-1000">
          <Header />
          <main>
            <Hero />
            <Story />
            <TheSpace />
            <Products />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

