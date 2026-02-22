import { GraduationCap, UserCheck, Users } from 'lucide-react';

const TargetGroups = () => {
  const groups = [
    {
      icon: GraduationCap,
      title: 'Jsem žák',
      benefits: [
        'škola je bezpečná',
        'přístupy mám pod kontrolou',
        'správu mám bez starostí',
      ],
    },
    {
      icon: UserCheck,
      title: 'Jsem ředitel',
      benefits: [
        'mám přehled i v mobilu',
        'reporty vidím kdykoliv a hned',
        'skříňky a jídelna vyřešená',
      ],
    },
    {
      icon: Users,
      title: 'Jsem rodič',
      benefits: [
        'vím, kdy dítě přišlo do školy',
        'vím, kdy odešlo',
        'mám klidný den',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3ECFA0] rounded-full flex items-center justify-center">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-[#1a1a4e]">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#3ECFA0] rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetGroups;
