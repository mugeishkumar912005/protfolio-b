import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about marketing and digital strategy.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-100"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Email</span>
              <span className="text-xs text-gray-600 text-center break-all">Connect via email</span>
            </a>

            <a
              href={`https://www.linkedin.com/in/b-nagaprasanna15/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-cyan-100"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">LinkedIn</span>
              <span className="text-xs text-gray-600 text-center">Professional network</span>
            </a>

            <a
              href={`https://github.com/nagaprasannabuggala-cpu`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-teal-100"
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">GitHub</span>
              <span className="text-xs text-gray-600 text-center">View projects</span>
            </a>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            © 2024 B. Naga Prasanna. Crafted with passion for marketing excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
