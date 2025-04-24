import { Separator } from "@/components/ui/separator";

import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Image from 'next/image';

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
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="/sobre" className="hover:text-foreground transition-colors duration-300">
              Sobre
            </a>
            <a href="https://wa.me/551128351614" className="hover:text-foreground transition-colors duration-300">
              Contato
            </a>
          </nav>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/hovetlilicao/"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>

            <a
              href="https://www.facebook.com/Hovetlilicao/"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/avs-hovet-lilic%C3%A3o/"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://petstorelilicao@gmail.com"
              className="rounded-full p-2 bg-muted hover:bg-primary/20 transition-all duration-300"
              aria-label="Contato por e-mail"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://wa.me/551128351614"
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