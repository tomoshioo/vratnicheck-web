import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#1a1a4e]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
