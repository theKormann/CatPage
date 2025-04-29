'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const timelineData = [
  {
    title: 'Primeira dose (140 dias)',
    description: 'A vacinação contra a raiva é indicada a partir dos 4 meses de idade.',
  },
  {
    title: 'Reforço anual',
    description: 'A vacina deve ser reaplicada anualmente para manter a proteção eficaz.',
  },
  {
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
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center relative group">
              <div className="w-4 h-4 bg-[#b3df4e] rounded-full absolute -left-2 top-2 transition-transform group-hover:scale-125" />

              <Card className="ml-6 w-full max-w-md shadow-md group-hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
