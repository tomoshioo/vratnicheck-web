import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

// Loga školních systémů – malé náhledy z /images/school-systems/ (edookit.png zatím chybí, zobrazí se iniciála)
const LOGO_BASE = '/images/school-systems';
const CERT_LOGO_BASE = '/images/certifications';
const TECH_LOGO_BASE = '/images/technologies';

const schoolSystems = [
  { name: 'Bakaláři', color: '#3ECFA0', url: 'https://bakalari.cz', logo: `${LOGO_BASE}/bakalari.png` },
  { name: 'Škola Online', color: '#008B9B', url: 'https://www.skolaonline.cz', logo: `${LOGO_BASE}/skolaonline.png` },
  { name: 'Edupage', color: '#00A651', url: 'https://www.edupage.org', logo: `${LOGO_BASE}/edupage.png` },
  { name: 'Strava.cz', color: '#571650', url: 'https://strava.cz', logo: `${LOGO_BASE}/strava.png` },
  { name: 'Edookit', color: '#3ECFA0', url: 'https://edookit.com', logo: `${LOGO_BASE}/edookit.png` }, // logo doplňte později
];

const certifications = [
  { name: 'ISO 9001', icon: Award, logo: `${CERT_LOGO_BASE}/iso9001.png` },
  { name: 'NBÚ', icon: Shield, logo: `${CERT_LOGO_BASE}/nbu.png` },
  { name: 'Český výrobek', icon: CheckCircle, logo: `${CERT_LOGO_BASE}/cesky-vyrobek.png` },
];

const technologies = [
  { name: 'MIFARE', logo: `${TECH_LOGO_BASE}/mifare.png` },
  { name: 'LEGIC', logo: `${TECH_LOGO_BASE}/legic.png` },
];

const Partners = () => {
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());
  const [failedCertLogos, setFailedCertLogos] = useState<Set<string>>(new Set());
  const [failedTechLogos, setFailedTechLogos] = useState<Set<string>>(new Set());

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
              <motion.a
                key={system.name}
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3 min-w-[140px] no-underline"
              >
                <div className="relative h-12 w-[120px] flex items-center justify-center shrink-0">
                  <img
                    src={system.logo}
                    alt=""
                    className={`h-10 w-auto max-h-10 max-w-[120px] object-contain object-center relative z-10 ${failedLogos.has(system.name) ? 'hidden' : ''}`}
                    loading="lazy"
                    onError={() => setFailedLogos((prev) => new Set(prev).add(system.name))}
                  />
                  {/* Fallback: pouze když se logo nenačte */}
                  {failedLogos.has(system.name) && (
                    <span
                      className="absolute w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0"
                      style={{ backgroundColor: system.color }}
                      aria-hidden
                    >
                      {system.name === 'Škola Online' ? 'Š' : system.name.charAt(0)}
                    </span>
                  )}
                </div>
                <span
                  className="font-semibold text-lg text-center"
                  style={{ color: system.color }}
                >
                  {system.name}
                </span>
              </motion.a>
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
            <div className="flex justify-center gap-8 flex-wrap">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-3 mx-auto">
                    <img
                      src={cert.logo}
                      alt=""
                      className={`h-16 w-auto max-h-16 max-w-[100px] object-contain object-center ${failedCertLogos.has(cert.name) ? 'hidden' : ''}`}
                      loading="lazy"
                      onError={() => setFailedCertLogos((prev) => new Set(prev).add(cert.name))}
                    />
                    {failedCertLogos.has(cert.name) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#3ECFA0]/10 rounded-2xl flex items-center justify-center">
                          <cert.icon className="w-8 h-8 text-[#3ECFA0]" />
                        </div>
                      </div>
                    )}
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
            <div className="flex justify-center gap-8 flex-wrap">
              {technologies.map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-3 mx-auto">
                    <img
                      src={tech.logo}
                      alt=""
                      className={`h-16 w-auto max-h-16 max-w-[100px] object-contain object-center ${failedTechLogos.has(tech.name) ? 'hidden' : ''}`}
                      loading="lazy"
                      onError={() => setFailedTechLogos((prev) => new Set(prev).add(tech.name))}
                    />
                    {failedTechLogos.has(tech.name) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#9B7EDE]/10 rounded-2xl flex items-center justify-center">
                          <span className="text-lg font-bold text-[#9B7EDE]">{tech.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
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
