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

    const scrollMultiplier = 1.5;
    const scrollDistance = (totalWidth - viewportWidth) * scrollMultiplier;

    gsap.to(container, {
      x: () => `-${totalWidth - viewportWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
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
        end: () => `+=${scrollDistance}`,
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

      <div className="sticky top-0 relative flex items-center h-screen w-max px-10 gap-10 z-20">
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

        <div ref={containerRef} className="flex gap-8 w-max">
          {[
            {
              title: 'Conheça o nosso espaço!',
              description:
                'Trazer o seu gato para o nosso espaço é o primeiro passo para garantir a saúde e felicidade dele, pode ser uma boa também explorar os nossos produtos!',
              buttonText: 'Conheça nosso espaço',
            },
            {
              title: 'Consultas e exames',
              description:
                'A consulta acompanhada de exames é essencial para um diagnóstico preciso e um tratamento eficaz.',
              buttonText: 'Agende sua consulta',
            },
            {
              title: 'Retorno e acompanhamento',
              description:
                'O retorno e acompanhamento são fundamentais para garantir que o tratamento está funcionando e que o seu gato está se recuperando bem.',
              buttonText: 'Acompanhe seu pet',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                border border-white/20 rounded-2xl p-8 w-full max-w-xl h-[500px] w-[10000px]
                text-white shadow-xl hover:shadow-2xl transition-shadow
                flex flex-col justify-center text-2xl font-semibold
              `}
            >
              <div className="text-center mb-4">{item.title}</div>
              <p className="text-sm text-justify leading-relaxed">{item.description}</p>
              <button className="mt-4 bg-[#274e61] text-white px-5 py-2 rounded-lg shadow hover:bg-black transition duration-300">
                {item.buttonText}
              </button>
            </div>
          ))}

          <div className="flex-shrink-0 w-full max-w-xl h-[500px] flex items-center justify-center">
            <img
              src="/images/canva-cat-maine-coon.png"
              alt="Imagem final"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      <LightEffectsRight />
    </section>
  );
}
