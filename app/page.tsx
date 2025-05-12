'use client';

import MainTitle from "@/components/Header/mainTitle";
import Header from "@/components/Header/headerTopBar";
import MainImage from "@/components/Header/mainImage";
import MainInfoCat from "@/components/Infocat/mainInfoCat";
import ConsultaSection from "@/components/ConsultaCat/consultaSection";
import MainBookingContent from "@/components/CatBooking/mainBookingContent";
import ProductContent from "@/components/Products/productContent";
import MainVacina from "@/components/vaccine/mainVacina";
import MainReviews from "@/components/reviewsCat/mainReviews";
import Footer from "@/components/Footer/mainFooter";

import LightEffectsLeft from "@/components/LightEffects/lightEffectsLeft";
import LightEffectsRight from "@/components/LightEffects/lightEffectsRight";
import MainSpot from "@/components/spot/mainSpot";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
        <LightEffectsLeft />
      </div>

      <div className="fixed top-0 right-0 w-full h-full z-[-1] pointer-events-none">
        <LightEffectsRight />
      </div>

      {/* Header */}
      <main className="z-[9999]">
        <Header />
      </main>
      <main className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-16 pt-[100px]">
        <MainTitle />
        <MainImage />
      </main>
      {/* Header */}

      {/* infocat */}
      <MainInfoCat/>
      {/* infocat */}

      {/* Consulta */}
      <ConsultaSection/>
      {/* Consulta */}
      
      {/* Booking */}
      <MainBookingContent/>
      {/* Booking */}

      {/* Produtos */}

      {/* Vacinas */}
      <MainVacina/>
      {/* Vacinas */}

      {/* Avaliações */}
      <MainReviews/>
      {/* Avaliações */}

      {/* Localização */}
      <MainSpot/>
      {/* Localização */}

      {/* Produtos */}
      <ProductContent/>
      {/* Produtos */}

      {/* Footer */}
      <Footer/>
      {/* Footer */}
    </>
  );
}
