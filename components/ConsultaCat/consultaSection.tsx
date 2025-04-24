'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightEffectsRight from '../LightEffects/lightEffectsRight';

gsap.registerPlugin(ScrollTrigger);

export default function ConsultaSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const preview = previewRef.current;

    if (!container || !section || !preview) return;

    const totalWidth = container.scrollWidth + preview.offsetWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(container, {
      x: () => `-${totalWidth - viewportWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth - viewportWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.to(preview, {
      x: () => `-${preview.offsetWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth - viewportWidth}`,
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh] overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/20 z-10" />

      <div
        className="sticky top-0 relative flex items-center h-screen w-max px-10 gap-10 z-20"
      >
        <div
          ref={previewRef}
          className="flex-shrink-0 w-[100vw] flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 lg:max-w-[800px] mx-auto">
            Afinal, qual a melhor forma de cuidar do seu gato?
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Cuidar do seu pet começa por aqui. Você está no lugar correto para o melhor resultado do seu amigo felino.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary/80 transition duration-300">
            descubra o caminho à direita!
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex gap-8 w-max"
        >
          {Array.from({ length: 3 }).map((_, index) => {
            let content = '';

            switch (index) {
              case 0:
                content = 'Consulta de Rotina';
                break;
              case 1:
                content = 'Vacinação';
                break;
              case 2:
                content = 'Exames de Sangue';
                break;
            }

            return (
              <div
                key={index}
                className={`
        border border-white/20 rounded-2xl p-8 w-full max-w-xl h-[500px] w-[10000px]
        text-white shadow-xl hover:shadow-2xl transition-shadow
        flex items-center justify-center text-2xl font-semibold
      `}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <LightEffectsRight />
    </section>
  );
}
