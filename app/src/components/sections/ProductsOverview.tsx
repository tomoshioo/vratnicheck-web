// Products Overview Section
import { products } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle';

const ProductsOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Naše řešení pro vaši školu"
          subtitle="Kompletní ekosystém produktů pro bezpečnost a efektivitu školských zařízení"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
