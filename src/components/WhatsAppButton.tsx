import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá! Gostaria de saber mais sobre os serviços da Itu Mármores.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-elevated transition-transform duration-200 hover:scale-110"
    style={{ backgroundColor: "#25D366" }}
  >
    <MessageCircle size={26} className="text-background" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
