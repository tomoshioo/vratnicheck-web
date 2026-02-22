import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Activity, Award } from 'lucide-react';

const stats = [
  { 
    number: 100, 
    suffix: '+', 
    label: 'Škol v ČR',
    icon: Building2
  },
  { 
    number: 50, 
    suffix: '000+', 
    label: 'Žáků denně',
    icon: Users
  },
  { 
    number: 99.9, 
    suffix: '%', 
    label: 'Dostupnost systému',
    icon: Activity
  },
  { 
    number: 30, 
    suffix: '+', 
    label: 'Let zkušeností',
    icon: Award
  }
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formattedValue = value % 1 !== 0 
    ? displayValue.toFixed(1) 
    : Math.floor(displayValue);

  return (
    <span ref={ref}>
      {formattedValue}{suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="py-24 bg-gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3ECFA0] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B9D] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Důvěřují nám školy po celé ČR
          </h2>
          <p className="text-gray-300 text-lg">
            Naše čísla hovoří za vše
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                <stat.icon className="w-8 h-8 text-[#3ECFA0]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
