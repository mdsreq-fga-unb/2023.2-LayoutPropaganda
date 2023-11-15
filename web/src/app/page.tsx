"use client"

import { OurProducts } from "@/components/OurProducts";
import { Slogan } from "@/components/Slogan";
import styled from "styled-components";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export default function Home() {
  return (
    <PageContainer>
      <Slogan />
      <OurProducts />
    </PageContainer>
  )
}
