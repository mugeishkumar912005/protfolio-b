import { ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-emerald-600" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{project.subtitle}</p>

                <div className="space-y-2 mb-6">
                  {project.description.map((desc, idx) => (
                    <p key={idx} className="text-gray-700 text-sm leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
