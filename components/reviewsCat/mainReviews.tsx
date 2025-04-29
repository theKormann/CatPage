'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const reviews = [
  {
    name: 'Simone Silva',
    text: 'Clínica excelente, profissionais eficientes. As duas vezes que eu precisei, eles salvaram meu gatinho. Agradeço em especial à Dra. Tatiane.',
    rating: 5,
  },
  {
    name: 'Franciely Macedo Silva',
    text: 'A minha experiência no Lilicão foi maravilhosa. Fui muito bem atendida por um anjo que salvou o meu gatinho envenenado. Não tenho palavras para agradecer à Dra. Tatiane.',
    rating: 5,
  },
  {
    name: 'Tatiane Sophia',
    text: 'Obrigado pelo ótimo atendimento com meu gatinho 🥰',
    rating: 5,
  },
];

export default function MainReviews() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section 
    id='reviews'
    className="relative w-screen min-h-screen bg-[#fff] py-20 px-4 text-center overflow-hidden">
      {/* Estrela esquerda */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 lg:block hidden"
        data-aos="fade-right"
      >
        <Image
          src="/Images/stars/elemnt-star-fade-right.svg"
          alt="Elemento decorativo estrela esquerda"
          width={300}
          height={300}
          className="opacity-70"
        />
      </div>

      {/* Estrela direita */}
      <div
        className="absolute right-0 top-[500px] transform -translate-y-1/2 lg:block hidden"
        data-aos="fade-left"
      >
        <Image
          src="/Images/stars/elemnt-star-fade-left.svg"
          alt="Elemento decorativo estrela direita"
          width={300}
          height={300}
          className="opacity-70"
        />
      </div>

      <div className="max-w-5xl mx-auto mb-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#375D8A]">
          Avaliações dos Tutores
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Veja o que nossos clientes estão dizendo sobre nós!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[350px] justify-between text-left"
          >
            <div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill={i < review.rating ? '#facc15' : 'none'}
                  />
                ))}
              </div>
              <p className="text-justify text-gray-700 mb-4 text-[1.3rem] ">"{review.text}"</p>
            </div>
            <span className="font-semibold text-gray-900">— {review.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 relative z-10">
        <Link href="#map">
          <button className="bg-[#b0c737] text-black text-lg md:text-xl font-semibold px-8 py-4 rounded-2xl hover:bg-lime-300 transition-all shadow-md">
            Conheça o melhor lugar para o seu gatinho
          </button>
        </Link>
      </div>
    </section>
  );
}
