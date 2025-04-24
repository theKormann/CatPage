'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductContent() {
  const products = [
    { name: 'Pet Delícia - Hipercalórico', image: '/images/products/petdelicia.png' },
    { name: 'Bongos - Suplemento alimentar', image: '/images/products/bongos.png' },
    { name: 'Pó Higiênico Easy Pet', image: '/images/products/easypetpo.png' },
    { name: 'Fini Cat', image: '/images/products/finicat.png' },
    { name: 'Condroplex suplemento alimentar', image: '/images/products/condroplex.png' },
    { name: 'Defend Pro Gatos - Biovet', image: '/images/products/defendpro.png' },
    { name: 'Comedouro para gatos', image: '/images/products/comedouro.png' },
  ];

  const loopedProducts = [...products, ...products];

  return (
    <section className="w-screen h-screen bg-[#b2e6ff] overflow-hidden flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-4xl mx-auto z-10 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Conheça nossos produtos exclusivos
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Selecionamos com carinho os melhores itens para o bem-estar, diversão e saúde do seu pet!
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {loopedProducts.map((product, index) => (
            <motion.div
              key={index}
              className="w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 shrink-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: index * 0.2,
              }}
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button className="mt-12 bg-primary text-white px-8 py-3 rounded-lg shadow hover:bg-primary/80 transition duration-300 z-10">
        Acesse nossa loja
      </button>
    </section>
  );
}
