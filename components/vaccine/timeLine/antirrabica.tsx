'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const timelineData = [
  {
    id: 'dose',
    title: 'Primeira dose (140 dias)',
    description: 'A vacinação contra a raiva é indicada a partir dos 4 meses de idade.',
  },
  {
    id: 'reforco',
    title: 'Reforço anual',
    description: 'A vacina deve ser reaplicada anualmente para manter a proteção eficaz.',
  },
  {
    id: 'familia',
    title: 'Proteção da família',
    description: 'Além de proteger o gato, a vacinação previne a transmissão da raiva para humanos.',
  },
];

export default function AntirrabicaTimeLine() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Cronograma para Vacinação Antirrábica
      </h2>

      <div className="relative border-l-2 border-[#b3df4e]">
        {timelineData.map((item, index) => (
          <div key={item.id} className="mb-10 ml-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center relative group"
            >
              <div className="w-4 h-4 bg-[#b3df4e] rounded-full absolute -left-2 top-2 transition-transform group-hover:scale-125" />

              <Card className="ml-6 w-full max-w-md shadow-md group-hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="mt-12"
      >
        <Button
          size="lg"
          className="bg-[#b3df4e] text-black font-bold px-6 py-3 hover:bg-lime-400 transition-colors duration-300"
        >
          Agendar a minha vacinação
        </Button>
      </motion.div>
    </div>
  );
}
