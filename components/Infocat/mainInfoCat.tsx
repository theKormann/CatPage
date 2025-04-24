'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LightEffectsRight from '@/components/LightEffects/lightEffectsRight';

const curiosidades = [
  {
    titulo: 'São Caçadores Natos',
    texto: 'Mesmo bem alimentados, os gatos mantêm seus instintos de caça e costumam brincar com suas “presas” antes de finalizá-las.',
  },
  {
    titulo: 'A Terapia é Ronronar',
    texto: 'O ronronar dos gatos pode reduzir o estresse, baixar a pressão arterial e até acelerar a cicatrização de ossos e tecidos.',
  },
  {
    titulo: 'Possuem Uma Visão Noturna Surpreendente',
    texto: 'Gatos podem enxergar em níveis de luz até 6 vezes menores do que os necessários para os humanos. Isso os torna excelentes caçadores noturnos.',
  },
];

export default function MainInfoCat() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="relative py-16 px-6 bg-transparent backdrop-blur-sm overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Você Sabia Que Por Trás Dos Miados:
      </h2>

      {/* Imagem à esquerda */}
      <div
        className="hidden lg:block absolute left-0 top-0 w-[450px] h-full z-0"
        data-aos="fade-right"
      >
        <Image
          src="/images/canva-cats-images-blackOranges.png"
          alt="Curiosidades sobre gatos esquerda"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div
        className="hidden lg:block absolute right-0 top-0 w-[450px] h-full z-0"
        data-aos="fade-left"
      >
        <Image
          src="/images/canva-cats-images-white&black.png"
          alt="Curiosidades sobre gatos direita"
          fill
          priority
          className="object-contain"
        />
      </div>

      <LightEffectsRight />

      <div className="relative z-10 flex flex-col items-center space-y-10">
        {curiosidades.map((curio, index) => (
          <div
            key={index}
            data-aos={`flip-${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos-delay={index * 200}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 w-full max-w-xl text-white shadow-xl hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4">{curio.titulo}</h3>
            <p className="text-base leading-relaxed text-gray-200">{curio.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
