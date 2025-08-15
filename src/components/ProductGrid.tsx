import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Oxford Clássico Marrom",
    price: 299.90,
    originalPrice: 399.90,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    category: "Social Masculino",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Sneaker Premium Branco",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    category: "Casual",
    isNew: true,
  },
  {
    id: 3,
    name: "Bota Chelsea Preta",
    price: 449.90,
    originalPrice: 599.90,
    image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=600&q=80",
    category: "Botas Masculino",
    isSale: true,
  },
  {
    id: 4,
    name: "Scarpin Nude Elegante",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    category: "Social Feminino",
  },
  {
    id: 5,
    name: "Tênis Running Preto",
    price: 259.90,
    originalPrice: 329.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    category: "Esportivo",
    isSale: true,
  },
  {
    id: 6,
    name: "Mocassim Couro Caramelo",
    price: 219.90,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
    category: "Casual Masculino",
    isNew: true,
  },
  {
    id: 7,
    name: "Sandália Salto Dourada",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
    category: "Feminino",
  },
  {
    id: 8,
    name: "Derby Marinho Premium",
    price: 389.90,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80",
    category: "Social Masculino",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção cuidadosa de sapatos premium, escolhidos especialmente 
            para quem valoriza qualidade e estilo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;