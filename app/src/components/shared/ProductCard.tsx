import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DoorOpen, Lock, Smartphone, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';

const iconMap: Record<string, React.ElementType> = {
  DoorOpen,
  Lock,
  Smartphone,
  ShoppingBag
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = iconMap[product.icon] || DoorOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <Link to={`/produkty/${product.id}`}>
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
          {/* Icon */}
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${product.color}20` }}
          >
            <Icon 
              className="w-8 h-8" 
              style={{ color: product.color }}
            />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-[#1a1a4e] mb-2">
            {product.name}
          </h3>
          <p className="text-sm font-medium mb-4" style={{ color: product.color }}>
            {product.shortName}
          </p>
          <p className="text-gray-600 mb-6 line-clamp-3">
            {product.description}
          </p>

          {/* Features Preview */}
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <span 
                  className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                  style={{ backgroundColor: product.color }}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center font-medium" style={{ color: product.color }}>
            <span>Zjistit více</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
