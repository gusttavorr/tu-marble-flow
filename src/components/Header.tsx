import { useState, useEffect } from "react";
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
  const desktopClass = "text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
  const mobileClass = "text-base text-foreground/70 hover:text-foreground py-3 border-b border-border/50 transition-colors";

  if (link.isRoute) {
    return (
      <Link to={link.href} onClick={onClick} className={onClick ? mobileClass : desktopClass}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={onClick ? mobileClass : desktopClass}>
      {link.label}
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-foreground/90 backdrop-blur-xl shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-20 md:h-24 px-6 md:px-10 lg:px-20">
        <a href="#inicio" className="relative z-10">
          <img src={logoItu} alt="Itu Mármores e Granitos - Desde 1968" className="h-14 md:h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 text-[13px] font-semibold tracking-wide hover:shadow-glow transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-white"
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
            className="xl:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} onClick={() => setIsOpen(false)} />
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold text-center mt-4 tracking-wide"
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
