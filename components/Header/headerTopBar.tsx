'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Rolando para baixo
        setShowHeader(false);
      } else {
        // Rolando para cima
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-transform duration-500 border-b shadow-md bg-black/30 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-between ${showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <a href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo CatPage"
            width={200}
            height={180}
            className="rounded-full"
          />
        </div>
      </a>

      <nav className="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2 text-white font-bold">
        <a href="#" className="text-sm hover:text-primary transition-colors">Início</a>
        <a href="#products" className="text-sm hover:text-primary transition-colors">Produtos</a>
        <a href="#" className="text-sm hover:text-primary transition-colors">Redes Sociais</a>
      </nav>


        <div className="hidden md:block absolute right-6">
      <a href="https://wa.me/551128351614?text=Oi%2C+gostaria+de+agendar+uma+consulta+para+meu+pet!" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">Agende sua consulta!</Button>
      </a>
        </div>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white dark:bg-zinc-800 text-black dark:text-white">
            <DropdownMenuItem>
              <a href="#">Início</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Produtos</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Contato</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Agendar Consulta</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
