'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainBookingContent() {
  return (
    <section id="booking" className="flex flex-col md:flex-row w-full h-auto md:h-screen">
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-6 md:px-16 py-12 md:py-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Marque uma consulta para seu gato
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          Agende facilmente uma consulta com um veterinário especializado. Rápido, seguro e sem complicações.
        </p>
        <a href="https://wa.me/551128351614?text=Oi%2C+gostaria+de+agendar+uma+consulta+para+meu+pet!" target="_blank" rel="noopener noreferrer">
        <Button className="bg-black text-white uppercase rounded-none w-fit">
          Agendar Consulta
        </Button>
        </a>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <Image
          src="/images/canva-element-cat-booking.jpeg"
          alt="Consulta para gatos"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
