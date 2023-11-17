"use client";

import logo from '../../../public/assets/Logo.svg'
import Image from 'next/image'

import { HeaderContainer, HeaderNav, NavLinkContainer, Logo } from './styles';
import Link from 'next/link';
type HeaderProps = {
    page: 'login' | 'home' | 'funcionario';
};

export const Header: React.FC<HeaderProps> = ({ page }) => {
    const renderLinks = () => {
        switch (page) {
            case 'login':
              return (
                <NavLinkContainer>
                  <Link href="/login">Login</Link>
                </NavLinkContainer>
              );
            case 'home':
              return (
                <NavLinkContainer>
                  <Link href="/produtos">Nossos Produtos</Link>
                  <Link href="/midias">Mídias</Link>
                  <Link href="/contato">Entrar em Contato</Link>
                </NavLinkContainer>
              );
            case 'funcionario':
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
                <Image src={logo} alt="Logo"  />
            </Logo>
            <HeaderNav>{renderLinks()}</HeaderNav>
          </HeaderContainer>
        );
      };
