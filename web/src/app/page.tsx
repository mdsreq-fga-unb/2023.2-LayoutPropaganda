"use client"

import { Media } from "@/components/MediaHome";
import { OurServices } from "@/components/OurServices";
import { Slogan } from "@/components/Slogan";
import { Contacts } from "@/components/contacts";
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
      <OurServices />
      <Media />
      <Contacts />
    </PageContainer>
  )
}
