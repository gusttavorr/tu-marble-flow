import logoItu from "@/assets/logo-itu-original.png";
import { MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá! Gostaria de solicitar um orçamento.";

const Footer = () => (
  <footer className="dark-section pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-5 sm:px-6 md:px-10 lg:px-20">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img src={logoItu} alt="ITU MÁRMORES e Granitos" className="h-12 sm:h-16 w-auto brightness-200 mb-4 sm:mb-6" />
          <p className="text-white/30 text-xs sm:text-sm leading-relaxed">
            Há mais de 55 anos transformando ambientes com mármore e granito de alto padrão.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6">Navegação</h4>
          <div className="flex flex-col gap-2 sm:gap-3">
            {["Início", "Sobre", "Serviços", "Catálogo", "Portfólio", "Contato"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-white/30 text-xs sm:text-sm hover:text-primary transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6">Contato</h4>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-white/30 text-xs sm:text-sm">Rod. Presidente Dutra, KM203 · Arujá, SP</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone size={14} className="text-primary flex-shrink-0" />
              <span className="text-white/30 text-xs sm:text-sm">(11) 4655-2288</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail size={14} className="text-primary flex-shrink-0" />
              <span className="text-white/30 text-xs sm:text-sm break-all">atendimento@itumarmores.com.br</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6">Orçamento</h4>
          <p className="text-white/30 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            Solicite seu orçamento sem compromisso pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-semibold tracking-wide rounded-lg hover:shadow-glow transition-all duration-300"
          >
            WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-white/20 text-[10px] sm:text-xs text-center sm:text-left">© {new Date().getFullYear()} ITU MÁRMORES e Granitos. Todos os direitos reservados.</p>
        <p className="text-white/20 text-[10px] sm:text-xs">Tradição desde 1968 · Arujá, SP</p>
      </div>
    </div>
  </footer>
);

export default Footer;
