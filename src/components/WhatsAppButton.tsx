import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 hover:shadow-glow animate-[pulse_2.5s_ease-in-out_infinite] active:scale-95"
    style={{ backgroundColor: "#25D366" }}
  >
    <MessageCircle size={24} className="sm:w-7 sm:h-7 text-white" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
