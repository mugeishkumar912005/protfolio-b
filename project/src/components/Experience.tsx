import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>

              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute -left-0.5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-transparent"></div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl self-start">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <p className="text-lg text-emerald-600 font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 ml-0 sm:ml-16">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
