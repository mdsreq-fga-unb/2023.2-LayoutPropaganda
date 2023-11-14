"use client";

import logo from '../../../public/assets/Logo.svg'
import Image from 'next/image'

import { HeaderContainer, Logo } from './styles'

export const Header = () => {
 return (
    <HeaderContainer>
        <Logo>
            <Image src={logo} alt="Logo" />
        </Logo>
    </HeaderContainer>
 )
}