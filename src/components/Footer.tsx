import logoItu from "@/assets/logo-itu-clean.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/50 py-12 px-5 md:px-8 lg:px-16">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logoItu} alt="Itu Mármores e Granitos" className="h-14 w-auto brightness-200" />
        <p className="text-xs">Tradição desde 1968 · Itu, SP</p>
      </div>
      <div className="flex gap-6 text-xs">
        <a href="#inicio" className="hover:text-primary-foreground transition-colors">Início</a>
        <a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
        <a href="#portfolio" className="hover:text-primary-foreground transition-colors">Portfólio</a>
        <a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a>
      </div>
      <p className="text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
