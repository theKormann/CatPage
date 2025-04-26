'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MapSpotSection() {
  return (
    <section id="map" className="flex flex-col lg:flex-row w-full min-h-[540px]">
      <div className="flex flex-col items-center justify-center lg:items-start text-white bg-[#375D8A] w-full lg:w-2/5 px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-6">
          Sempre perto de você!
        </h1>
        <Image
          src="/images/spot.png"
          alt="Logo Lilicão"
          width={200}
          height={200}
          className="mb-6"
        />
        <p className="text-lg text-center lg:text-left max-w-md mb-6">
          Confira nossos setores no Google Maps e venha nos visitar!
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-[#204693] hover:bg-gray-100">
          <a href="https://www.google.com/maps/place/Hospital+Veterin%C3%A1rio+-+Hovet+Lilic%C3%A3o+%F0%9F%90%BE/" target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps
          </a>
        </Button>
      </div>

      <div className="w-full lg:w-3/5 h-[400px] lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58561.52017890021!2d-46.53516893327834!3d-23.457037095382805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8b2648994d51%3A0xd586aa03434c7775!2sHospital%20Veterin%C3%A1rio%20-%20Hovet%20Lilic%C3%A3o%20%F0%9F%90%BE!5e0!3m2!1spt-BR!2sbr!4v1736809954756!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
