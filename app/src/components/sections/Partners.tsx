import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

const schoolSystems = [
  { name: 'Bakaláři', color: '#3ECFA0' },
  { name: 'Škola Online', color: '#FF6B9D' },
  { name: 'Edupage', color: '#9B7EDE' },
  { name: 'Strava.cz', color: '#FFE66D' },
  { name: 'Edookit', color: '#3ECFA0' },
];

const certifications = [
  { name: 'ISO 9001', icon: Award },
  { name: 'NBÚ', icon: Shield },
  { name: 'Český výrobek', icon: CheckCircle },
];

const technologies = [
  { name: 'MIFARE' },
  { name: 'LEGIC' },
];

const Partners = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Důvěřují nám a spolupracujeme"
          subtitle="Integrace se školními systémy, certifikace kvality a špičkové technologie"
        />

        {/* School Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-[#1a1a4e] text-center mb-8">
            Propojení se školními systémy
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {schoolSystems.map((system, idx) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <span 
                  className="font-semibold text-lg"
                  style={{ color: system.color }}
                >
                  {system.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Technologies */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#1a1a4e] mb-6 text-center">
              Certifikace
            </h3>
            <div className="flex justify-center gap-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center">
                  <div className="w-16 h-16 bg-[#3ECFA0]/10 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <cert.icon className="w-8 h-8 text-[#3ECFA0]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#1a1a4e] mb-6 text-center">
              Technologie
            </h3>
            <div className="flex justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="w-16 h-16 bg-[#9B7EDE]/10 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <span className="text-lg font-bold text-[#9B7EDE]">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
