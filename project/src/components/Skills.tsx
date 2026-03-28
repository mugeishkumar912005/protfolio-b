import { Megaphone, Wrench, BarChart3, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Marketing",
      icon: Megaphone,
      skills: portfolioData.skills.marketing,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      skills: portfolioData.skills.analytics,
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50"
    },
    {
      title: "Creative",
      icon: Palette,
      skills: portfolioData.skills.creative,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${category.gradient} p-3 rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
