import { useTypingEffect } from '../hooks/useTypingEffect';
import { ArrowDown, Sparkles } from 'lucide-react';

import prof from './WhatsApp_Image_2026-03-28_at_9.44.57_AM-removebg-preview (1).png'

export const Hero = () => {
  const { displayedText: name } = useTypingEffect("B. Naga Prasanna", 80, 500);
  const { displayedText: tagline, isComplete } = useTypingEffect(
    " Data driven Marketing Strategist | Digital Marketing Specialist",
    50,
    2500
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
          
            <img src={ prof } alt="" className='h-60'/>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 min-h-[4rem] sm:min-h-[5rem]">
            {name}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="min-h-[3rem] sm:min-h-[4rem]">
            <p className="text-xl sm:text-3xl font-medium bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              {tagline}
              {!isComplete && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {isComplete && (
            <div className="animate-fadeIn pt-4">
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transforming market insights into impactful strategies that drive growth and engagement.
              </p>

              <div className="mt-10 flex gap-4 justify-center flex-wrap">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-emerald-500 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-emerald-600" />
        </div>
      </div>
    </section>
  );
};
