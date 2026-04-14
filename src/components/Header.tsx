import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else if (location.pathname !== "/") {
      navigate("/" + link.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-foreground/90 backdrop-blur-xl shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 sm:h-20 md:h-24 px-5 sm:px-6 md:px-10 lg:px-20">
        <a href="#inicio" className="relative z-10">
          <img src={logoItu} alt="Itu Mármores e Granitos - Desde 1968" className="h-10 sm:h-12 md:h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
          {navLinks.map((link) => {
            const className = "text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
            return link.isRoute ? (
              <Link key={link.href} to={link.href} className={className}>{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} className={className}>{link.label}</a>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 bg-primary text-primary-foreground px-6 py-2.5 text-[13px] font-semibold tracking-wide rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2.5 text-white rounded-lg active:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-16 sm:top-20 bg-background/98 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-1 max-w-lg mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg text-foreground/80 hover:text-foreground py-4 border-b border-border/40 transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link)}
                      className="block text-lg text-foreground/80 hover:text-foreground py-4 border-b border-border/40 transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary mt-6 text-center rounded-xl"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
