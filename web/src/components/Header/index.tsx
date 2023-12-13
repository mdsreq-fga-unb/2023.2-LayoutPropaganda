"use client";

import Image from "next/image";
import logo from "../../../public/assets/Logo.svg";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderContainer, HeaderNav, Logo, NavLinkContainer } from "./styles";

export function Header() {
  const scrollTo = (sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const page = usePathname();

  console.log(page);

  const renderLinks = () => {
    if (page.startsWith("/employer")) {
      return (
        <NavLinkContainer>
          <Link href="/employer/list">Funcionário</Link>
          <Link href="/employer/medias">Mídias</Link>
          <Link href="/employer/clientes">Clientes</Link>
        </NavLinkContainer>
      );
    }

    switch (page) {
      case "/login":
        return (
          <NavLinkContainer>
            <Link href="/login">Login</Link>
          </NavLinkContainer>
        );
      case "/":
        return (
          <NavLinkContainer>
            <Link href="#" onClick={() => scrollTo("Nossos Produtos")}>
              Nossos Produtos
            </Link>
            <Link href="#" onClick={() => scrollTo("Mídias")}>
              Mídias
            </Link>
            <Link href="#" onClick={() => scrollTo("Entrar em Contato")}>
              Entrar em Contato
            </Link>
          </NavLinkContainer>
        );

      default:
        return (
          <NavLinkContainer>
            <Link href="/medias">Nossos produtos</Link>
          </NavLinkContainer>
        );
    }
  };

  return (
    <HeaderContainer>
      <Logo href="/">
        <Image src={logo} alt="Logo" />
      </Logo>
      <HeaderNav>{renderLinks()}</HeaderNav>
    </HeaderContainer>
  );
}
