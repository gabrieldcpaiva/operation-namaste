import React from 'react';
import { MessageCircle, ShoppingBag, Globe, Navigation } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Links = () => {
  const links = [
    {
      title: "Loja Virtual",
      subtitle: "Acesse nosso catálogo completo",
      url: "https://www.meucomercio.com.br/Namaste",
      icon: <ShoppingBag className="w-5 h-5" />,
      primary: true
    },
    {
      title: "WhatsApp",
      subtitle: "Fale diretamente com a gente",
      url: "https://chat.whatsapp.com/IBK7rCv9ApDCJIMtdTteOx",
      icon: <MessageCircle className="w-5 h-5" />,
      primary: false
    },
    {
      title: "Site Oficial",
      subtitle: "Conheça nosso espaço e cultura",
      url: "/",
      icon: <Globe className="w-5 h-5" />,
      primary: false
    },
    {
      title: "Como Chegar",
      subtitle: "Av. Olegário Maciel, 491 - Caratinga",
      url: "https://g.page/namastetabacaria",
      icon: <Navigation className="w-5 h-5" />,
      primary: false
    }
  ];

  return (
    <div className="min-h-screen w-full bg-dark text-background font-sans relative flex flex-col items-center py-12 px-4 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/images/002_Storefront.png" alt="Fundo" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark to-dark" />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Profile */}
        <div className="w-28 h-28 bg-white/5 border border-white/10 p-4 rounded-full shadow-2xl backdrop-blur-md mb-6 flex items-center justify-center overflow-hidden">
          <img 
            src="/images/001_Logo.png" 
            onError={(e) => { e.target.onerror = null; e.target.src = '/images/Fallback_logo.png'; }}
            alt="Namastê Tabacaria" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Namastê Tabacaria</h1>
        <p className="text-white/60 text-sm font-medium mb-8 text-center px-4">
          Cultura alternativa, redução de danos e o melhor espaço de Caratinga.
        </p>

        {/* Links Container */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              className={`group flex items-center p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                link.primary 
                  ? 'bg-accent border-accent/50 text-white shadow-[0_4px_20px_-5px_rgba(204,88,51,0.5)]' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${link.primary ? 'bg-white/20' : 'bg-white/5'}`}>
                {link.icon}
              </div>
              <div className="ml-4 flex-1">
                <h2 className="font-bold tracking-wide text-sm">{link.title}</h2>
                <p className={`text-xs mt-0.5 ${link.primary ? 'text-white/80' : 'text-white/50'}`}>
                  {link.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center opacity-50">
          <a href="https://www.instagram.com/namaste_a_tabacaria" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors mb-4">
            <Instagram className="w-6 h-6" />
          </a>
          <p className="text-[10px] tracking-widest uppercase font-bold">Operação Namastê</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
