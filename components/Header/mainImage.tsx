'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function MainImage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <section
  data-aos="fade-left"
  className="px-4 lg:mr-[70px] text-center lg:text-left lg:ml-[170px] max-w-[700px] w-full"
>
  <div className="flex items-center justify-center lg:justify-start mg-0">
    <div className="relative w-full aspect-[700/680]">
      <Image
        src="/images/elementCat (2).png"
        alt="Logo CatPage"
        fill
        priority
        className="object-contain"
      />
    </div>
  </div>
</section>
    );
}
