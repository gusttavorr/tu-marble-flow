import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988124466?text=Olá, vim pelo site e gostaria de solicitar um orçamento";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 hover:shadow-glow animate-[pulse_2.5s_ease-in-out_infinite]"
    style={{ backgroundColor: "#25D366" }}
  >
    <MessageCircle size={28} className="text-white" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
