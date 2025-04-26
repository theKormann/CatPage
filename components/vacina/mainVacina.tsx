'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';

export default function MainVacina() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const cards = [
        {
            title: 'Vacina Tríplice',
            image: '/Images/vacina-triplice.png',
            link: '/vacinas/triplice',
        },
        {
            title: 'Vacina Quádrupla',
            image: '/Images/vacina-quadrupla.png', 
            link: '/vacinas/quadrupla',
        },
        {
            title: 'Vacina Quíntupla',
            image: '/Images/vacina-quintupla.png',
            link: '/vacinas/quintupla',
        },
        {
            title: 'Vacina Anti-rábica',
            image: '/Images/vacina-anti-rabica.png',
            link: '/vacinas/antirrabica',
        },
    ];

    return (
        <section
            className="relative w-full min-h-screen bg-fixed bg:[#0000003b] bg-cover bg-center text-white flex flex-col justify-center items-center px-4 overflow-hidden"
        >
            <div className="absolute inset-0 bg:[#0000003b] z-0" />

            <div className="relative z-10 w-full max-w-5xl text-center mb-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight drop-shadow-xl leading-tight">
                    Vacinar o Seu Gatinho é Uma Prova de
                </h2>
                <h2
                    className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight drop-shadow-xl leading-tight"
                    style={{ color: '#b3df4e' }}
                >
                    Amor!
                </h2>
                <p className="text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-200">
                    separamos as vacinas mais importantes para o seu gato, com informações detalhadas sobre cada uma delas.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl px-6 py-10">
                {cards.map((card, index) => (
                    <div
                    key={index}
                    data-aos="zoom-in"
                    className="relative group h-50 w-full rounded-2xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={500}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col text-center px-4">
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <Link href={card.link}>
                            <button className="bg-[#b3df4e] text-black font-semibold px-4 py-2 rounded hover:bg-white transition">
                                Saiba mais
                            </button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
