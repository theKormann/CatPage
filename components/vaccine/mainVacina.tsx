'use client';

import { SetStateAction, useEffect, useState } from 'react';
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

        return () => {
            AOS.refreshHard();
        };
    }, []);


    const [openModal, setOpenModal] = useState(false);
    interface Card {
        title: string;
        image: string;
        link: string;
        description: string;
    }

    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const cards = [
        {
            title: 'Vacina Tríplice',
            image: '/Images/vacina-triplice.png',
            link: '/vacinas/triplice',
            description: 'A vacina tríplice felina é essencial para proteger os gatos contra a panleucopenia, a rinotraqueíte e a calicivirose, três doenças infecciosas que afetam principalmente o sistema respiratório e digestivo. Sua aplicação é importante para garantir a saúde e a segurança dos gatos desde filhotes até a vida adulta.',
        },
        {
            title: 'Vacina Quádrupla',
            image: '/Images/vacina-quadrupla.png',
            link: '/vacinas/quadrupla',
            description: 'A vacina quádrupla felina oferece proteção contra a panleucopenia, a rinotraqueíte, a calicivirose e também a clamidiose, uma infecção bacteriana que afeta os olhos e o sistema respiratório. É indicada para reforçar a imunidade dos gatos, proporcionando uma proteção ainda mais completa desde os primeiros meses de vida.',
        },
        {
            title: 'Vacina Quíntupla',
            image: '/Images/vacina-quintupla.png',
            link: '/vacinas/quintupla',
            description: 'A vacina quíntupla felina protege contra a panleucopenia, rinotraqueíte, calicivirose, clamidiose e também contra a leucemia felina, uma doença viral grave que compromete o sistema imunológico. Ela é recomendada para garantir uma proteção ainda mais ampla e fortalecer a saúde dos gatos.',
        },
        {
            title: 'Vacina Anti-rábica',
            image: '/Images/vacina-anti-rabica.png',
            link: '/vacinas/antirrabica',
            description: 'A vacina antirrábica é essencial para proteger os gatos contra a raiva, uma doença fatal que pode ser transmitida para humanos. Além de obrigatória por lei, sua aplicação anual é fundamental para a segurança do pet e de toda a família.',
        },
    ];

    const handleOpenModal = (card: Card) => {
        setSelectedCard(card);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedCard(null);
    };

    return (
        <section id="vaccine" className="relative w-full min-h-screen bg-fixed bg:[#0000003b] bg-cover bg-center text-white flex flex-col justify-center items-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg:[#0000003b] z-0" />

            <div className="relative z-10 w-full max-w-5xl text-center mb-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight drop-shadow-xl leading-tight">
                    Vacinar o Seu Gatinho é Uma Prova de
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight drop-shadow-xl leading-tight" style={{ color: '#b3df4e' }}>
                    Amor!
                </h2>
                <p className="text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-200">
                    Separamos as vacinas mais importantes para o seu gato, com informações detalhadas sobre cada uma delas.
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
                            <button
                                onClick={() => handleOpenModal(card)}
                                className="bg-[#b3df4e] text-black font-semibold px-4 py-2 rounded hover:bg-white transition"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {openModal && selectedCard && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full relative text-black">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-black text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
                        <p className="text-base mb-6">{selectedCard.description}</p>
                        <Link href={selectedCard.link}>
                            <button className="bg-[#b3df4e] text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition w-full">
                                Exibir Cronograma de vacinação
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
