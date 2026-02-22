import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/partners';
import SectionTitle from '@/components/shared/SectionTitle';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#A8E6CF]/20 via-white to-[#FF6B9D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Co říkají naši klienti"
          subtitle="Reference od ředitelů škol, kteří již využívají naše řešení"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-[#3ECFA0] rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 leading-relaxed mb-6 mt-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-[#1a1a4e]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.position}
                </div>
                <div className="text-sm text-[#3ECFA0]">
                  {testimonial.school}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
