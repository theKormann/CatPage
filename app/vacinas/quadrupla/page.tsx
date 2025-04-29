'use client';

import QuadruplaTimeLine from '@/components/vaccine/timeLine/quadrupla';
import HeaderTopBar from '@/components/Header/headerTopBar';
import LightEffectsLeft from '@/components/LightEffects/lightEffectsLeft';
import LightEffectsRight from '@/components/LightEffects/lightEffectsRight';
import Footer from '@/components/Footer/mainFooter';

export default function QuadruplaPage() {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
                <LightEffectsLeft />
            </div>

            <div className="fixed top-0 right-0 w-full h-full z-[-1] pointer-events-none">
                <LightEffectsRight />
            </div>

            {/* Header */}
            <main className="z-[9999]">
                <HeaderTopBar />
            </main>
            {/* Header */}

            <div className="min-h-screen p-6 bg-main text-white mt-20 flex flex-col items-center justify-center">
                <QuadruplaTimeLine />  
            </div>

            <Footer />
        </div>
    );
}