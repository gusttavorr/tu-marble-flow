import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Search, X, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { stones } from "@/data/stones";
type Product = {
  name: string;
  image: string;
};

type Category = {
  id: string;
  label: string;
  products: Product[];
};

const BASE_IMG = "http://www.itumarmores.com.br/area_restrita/img_produtos";

const categories: Category[] = [
  {
    id: "granitos-nacionais",
    label: "Granitos Nacionais",
    products: [
      { name: "Amarelo Fiorito", image: `${BASE_IMG}/1.jpg` },
      { name: "Amarelo Gegrege", image: `${BASE_IMG}/3.jpg` },
      { name: "Amarelo Maracujá", image: `${BASE_IMG}/4.jpg` },
      { name: "Amarelo Ornamental", image: `${BASE_IMG}/5.jpg` },
      { name: "Amarelo Santa Cecília", image: `${BASE_IMG}/6.jpg` },
      { name: "Bordeaux", image: `${BASE_IMG}/7.jpg` },
      { name: "Branco Dallas", image: `${BASE_IMG}/8.jpg` },
      { name: "Branco Itaúnas", image: `${BASE_IMG}/9.jpg` },
      { name: "Branco Minas", image: `${BASE_IMG}/10.jpg` },
      { name: "Branco Piracema", image: `${BASE_IMG}/12.jpg` },
      { name: "Branco Polar", image: `${BASE_IMG}/13.jpg` },
      { name: "Branco Polar Motion", image: `${BASE_IMG}/14.jpg` },
      { name: "Branco Portinari", image: `${BASE_IMG}/15.jpg` },
      { name: "Branco Savana", image: `${BASE_IMG}/16.jpg` },
      { name: "Capão Bonito", image: `${BASE_IMG}/18.jpg` },
      { name: "Cinza Andorinha", image: `${BASE_IMG}/20.jpg` },
      { name: "Cinza Mauá", image: `${BASE_IMG}/21.jpg` },
      { name: "Dourado Carioca", image: `${BASE_IMG}/22.jpg` },
      { name: "Jacarandá", image: `${BASE_IMG}/28.jpg` },
      { name: "Juparana Montiel", image: `${BASE_IMG}/29.jpg` },
      { name: "Lilas Gerais", image: `${BASE_IMG}/30.jpg` },
      { name: "Marrom São Paulo", image: `${BASE_IMG}/32.jpg` },
      { name: "Ocean Blue", image: `${BASE_IMG}/33.jpg` },
      { name: "Preto Absoluto", image: `${BASE_IMG}/36.jpg` },
      { name: "Red Dragon", image: `${BASE_IMG}/38.jpg` },
      { name: "Rosa Salmão", image: `${BASE_IMG}/40.jpg` },
      { name: "Top Golden", image: `${BASE_IMG}/46.jpg` },
      { name: "Verde Aquamarine", image: `${BASE_IMG}/41.jpg` },
      { name: "Verde Lavras", image: `${BASE_IMG}/42.jpg` },
      { name: "Verde Lenice", image: `${BASE_IMG}/45.jpg` },
      { name: "Verde Pavão", image: `${BASE_IMG}/43.jpg` },
      { name: "Verde São Francisco", image: `${BASE_IMG}/47.jpg` },
      { name: "Verde Ubatuba", image: `${BASE_IMG}/48.jpg` },
      { name: "Vermelho Bragança", image: `${BASE_IMG}/49.jpg` },
      { name: "Granito Amarelo", image: `${BASE_IMG}/44.jpg` },
    ],
  },
  {
    id: "granitos-importados",
    label: "Granitos Importados",
    products: [
      { name: "Branco Nepal", image: `${BASE_IMG}/11.jpg` },
      { name: "Butterfly", image: `${BASE_IMG}/17.jpg` },
      { name: "Caravaggio", image: `${BASE_IMG}/19.jpg` },
      { name: "Fantasy Golden", image: `${BASE_IMG}/23.jpg` },
      { name: "Gialho Vincenza", image: `${BASE_IMG}/24.jpg` },
      { name: "Giallo Firenze", image: `${BASE_IMG}/25.jpg` },
      { name: "Granite Sand Golden", image: `${BASE_IMG}/26.jpg` },
      { name: "Green Galaxy", image: `${BASE_IMG}/27.jpg` },
      { name: "Mantegna", image: `${BASE_IMG}/31.jpg` },
      { name: "Pedra Branco Polar", image: `${BASE_IMG}/34.jpg` },
      { name: "Prata Royal", image: `${BASE_IMG}/35.jpg` },
      { name: "Preto Indiano", image: `${BASE_IMG}/37.jpg` },
      { name: "Tiphany", image: `${BASE_IMG}/39.jpg` },
    ],
  },
  {
    id: "marmores-nacionais",
    label: "Mármores Nacionais",
    products: [
      { name: "Bege Bahia", image: `${BASE_IMG}/1.jpg` },
      { name: "Piguês", image: `${BASE_IMG}/35.jpg` },
    ],
  },
  {
    id: "marmores-importados",
    label: "Mármores Importados",
    products: [
      { name: "Branco Calacatta", image: `${BASE_IMG}/13.jpg` },
      { name: "Carrara", image: `${BASE_IMG}/12.jpg` },
      { name: "Crema Marfil", image: `${BASE_IMG}/5.jpg` },
      { name: "Nero Marquina", image: `${BASE_IMG}/36.jpg` },
      { name: "Travertino Romano", image: `${BASE_IMG}/22.jpg` },
      { name: "Travertino Navona", image: `${BASE_IMG}/8.jpg` },
    ],
  },
];

const WHATSAPP_URL = "https://wa.me/5511988124466?text=";

const Catalog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("todos");
  const [visibleCount, setVisibleCount] = useState(12);
  const [search, setSearch] = useState("");

  const allProducts = useMemo(
    () => categories.flatMap((c) => c.products.map((p) => ({ ...p, category: c.label }))),
    []
  );

  const filteredProducts = useMemo(() => {
    const source = activeCategory === "todos"
      ? allProducts
      : categories.find((c) => c.id === activeCategory)!.products;

    if (!search.trim()) return source;

    const query = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return source.filter((p) =>
      p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query)
    );
  }, [activeCategory, search, allProducts]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(12);
  };

  const handleProductClick = (productName: string) => {
    const stoneId = stones.find(
      (s) => s.name.toLowerCase() === productName.toLowerCase()
    )?.id;
    if (stoneId) {
      navigate(`/pedra/${stoneId}`);
    } else {
      handleWhatsApp(productName);
    }
  };
  
  const getStoneId = (productName: string) =>
    stones.find((s) => s.name.toLowerCase() === productName.toLowerCase())?.id;

  const handleWhatsApp = (productName: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o ${productName}. Podem me enviar informações e valores?`
    );
    window.open(`${WHATSAPP_URL}${text}`, "_blank");
  };

  return (
    <section id="catalogo" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="label-caps text-primary mb-4 block">Catálogo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight mb-4">
            Nossas Pedras
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça nossa seleção de granitos e mármores nacionais e importados. Clique em qualquer pedra para solicitar informações.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar produto (ex: Branco Polar, Preto Absoluto...)"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(12); }}
              className="w-full bg-background border border-border text-foreground placeholder:text-muted-foreground pl-11 pr-10 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => handleCategoryChange("todos")}
            className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 ${
              activeCategory === "todos"
                ? "bg-foreground text-primary-foreground"
                : "bg-background text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            Todos
            <span className="ml-2 text-xs opacity-60">({allProducts.length})</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-foreground text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">({cat.products.length})</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          key={activeCategory + search}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {visibleProducts.map((product, index) => {
            const hasDetailPage = !!getStoneId(product.name);
            return (
              <motion.button
                key={product.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.03, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleProductClick(product.name)}
                className="group text-left"
              >
                <div className="aspect-square overflow-hidden bg-muted mb-2 border border-border relative">
                  <img
                    src={product.image}
                    alt={`${product.name} - Itu Mármores`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {hasDetailPage && (
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                      <Eye size={24} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-tight block">
                  {product.name}
                </span>
                {hasDetailPage && (
                  <span className="text-[10px] text-primary">Ver projeto 3D →</span>
                )}
              </motion.button>
            );
          })}
          ))}
        </motion.div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto encontrado para "{search}"</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="bg-foreground text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Ver mais pedras ({filteredProducts.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
