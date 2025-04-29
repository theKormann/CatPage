'use client';

import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10 mt-10 bg-[#d9f3ff]">
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start md:flex-row justify-between gap-6">

        <div className="text-center md:text-left space-y-2">
          <Image
            src="/images/logotipo.png"
            alt="Logo CatPage"
            width={100}
            height={90}
            className="rounded-full mx-auto md:mx-0"
          />
          <h2 className="text-lg font-semibold">Hovet Lilicão</h2>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lilicão. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2">
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors duration-300">
              Início
            </Link>
            <Link href="/#infocat" className="hover:text-foreground transition-colors duration-300">
              Sobre
            </Link>
            <Link href="/#vaccine" className="hover:text-foreground transition-colors duration-300">
              Vacinas
            </Link>
            <Link href="/#reviews" className="hover:text-foreground transition-colors duration-300">
              Avaliações
            </Link>
            <Link href="/#map" className="hover:text-foreground transition-colors duration-300">
              Locais
            </Link>
            <Link href="https://wa.me/551128351614?text=Oi%2C+gostaria+de+agendar+uma+consulta+para+meu+pet!"
              className="hover:text-foreground transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer">
              Agendamentos
            </Link>
            <Link href="/#products" className="hover:text-foreground transition-colors duration-300">
              Produtos
            </Link>
            <a
              href="https://wa.me/551128351614"
              className="hover:text-foreground transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </nav>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/hovetlilicao/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>

            <a
              href="https://www.facebook.com/Hovetlilicao/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/company/avs-hovet-lilic%C3%A3o/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>

            <a
              href="mailto:petstorelilicao@gmail.com"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Contato por e-mail"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>

            <a
              href="https://wa.me/551128351614"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
