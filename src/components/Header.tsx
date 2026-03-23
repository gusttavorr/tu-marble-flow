import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoItu from "@/assets/logo-itu-original.png";

const navLinks: { label: string; href: string; isRoute?: boolean }[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Quem Somos", href: "/sobre-nos", isRoute: true },
  { label: "Showroom", href: "/showroom", isRoute: true },
  { label: "Serviços", href: "#servicos" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá! Gostaria de solicitar um orçamento.";

const NavItem = ({ link, onClick }: { link: typeof navLinks[0]; onClick?: () => void }) => {
  const className = "text-sm text-primary-foreground hover:text-primary transition-colors duration-200";
  const mobileClassName = "text-sm text-muted-foreground hover:text-foreground py-2";

  if (link.isRoute) {
    return (
      <Link to={link.href} onClick={onClick} className={onClick ? mobileClassName : className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={onClick ? mobileClassName : className}>
      {link.label}
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-narrow flex items-center justify-between h-20 md:h-24 px-5 md:px-8 lg:px-16">
        <a href="#inicio">
          <img src={logoItu} alt="Itu Mármores e Granitos - Desde 1968" className="h-16 md:h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-primary px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} onClick={() => setIsOpen(false)} />
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-primary px-5 py-3 text-sm font-medium text-center mt-2"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
