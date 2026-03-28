import { GraduationCap, Target, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {portfolioData.about.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Education</h3>
                  <p className="text-gray-700">PGDM in Agribusiness Management and Marketing</p>
                  <p className="text-sm text-gray-600 mt-1">International Institute of Business Studies</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl border border-cyan-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Specialization</h3>
                  <p className="text-gray-700">Market Research, Digital Marketing & Data-Driven Strategy</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-teal-500 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Focus Areas</h3>
                  <p className="text-gray-700">FMCG & Agri-tech domains with emphasis on ROI optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
