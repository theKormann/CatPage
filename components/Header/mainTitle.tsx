'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCat } from 'react-icons/fa'; 

export default function MainTitle() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <section
            data-aos="fade-right"
            className="max-w-[600px] w-full px-4  text-center lg:ml-[100]"
        >
            <h1 className="text-[4rem] sm:text-6xl lg:text-[5rem] font-bold text-white leading-tight">
                Descubra o Mundo dos
            </h1>
            <h1 className="text-[4rem] sm:text-6xl lg:text-[6rem] font-bold text-[#205781] flex justify-center items-center gap-3 mt-2">
                Gatos <FaCat className="text-[#205781] w-10 h-10" />
            </h1>
            <p className="text-base sm:text-lg text-[#D9F3FF] mt-4 max-w-md mx-auto">
                Tudo que um tutor de gato precisa saber para cuidar do seu felino com amor e carinho.
            </p>
           
        </section>
    );
}
