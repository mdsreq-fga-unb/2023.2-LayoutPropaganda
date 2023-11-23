"use client";

import Image from "next/image";
import logo from "../../../public/assets/Logo.svg";

import Link from "next/link";
import { HeaderContainer, HeaderNav, Logo, NavLinkContainer } from "./styles";
import { usePathname } from "next/navigation";

export function Header() {
  const scrollTo = (sectionName: string) => {
    const element = document.getElementById(sectionName);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const page = usePathname();

  console.log(page);

  const renderLinks = () => {
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
      case "/funcionario":
        return (
          <NavLinkContainer>
            <Link href="/funcionario">Funcionário</Link>
            <Link href="/midias">Mídias</Link>
            <Link href="/clientes">Clientes</Link>
          </NavLinkContainer>
        );
      default:
        return null;
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
