"use client"

import {
    List,
    OurProductsContainer,
    OurProductsContent,
    OurProductsContentDivisoryBar,
    OurProductsContentMedia,
    OurProductsContentParagraph,
    OurProductsTitle,
    OuterMedia
} from "./styles"

import Image from 'next/image'
import frontlight from '../../../public/assets/Frontlight 1.png'
import outdoor from '../../../public/assets/Outdoor 1.png'
import triedro from '../../../public/assets/Triedro 1.png'

export const OurProducts = () => {
    return(
        <OurProductsContainer>
            <OurProductsTitle>Nossos Produtos</OurProductsTitle>
            <OurProductsContent>
                <OuterMedia direction="t">
                    <Image src={outdoor} alt="Outdoor1" />
                    <OurProductsContentMedia>
                        Outdoor
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O outdoor é um tipo de publicidade exterior que 
                            geralmente consiste em um grande painel publicitário localizado 
                            em áreas estratégicas, como estradas movimentadas, cruzamentos 
                            ou áreas urbanas.
                            <br></br>
                            Características:
                            <br></br>
                            <List>
                                <li>Tamanho: São grandes e visíveis à distância.</li>
                                <li>Ilustrações: Podem apresentar imagens, texto e gráficos.</li>
                                <li>Iluminação: Podem ser iluminados ou não, dependendo da localização e do público-alvo.</li>
                            </List>
                        </OurProductsContentParagraph>
                    </OurProductsContentMedia>
                </OuterMedia>

                <OurProductsContentDivisoryBar></OurProductsContentDivisoryBar>

                <OuterMedia direction="r">
                    <OurProductsContentMedia>
                        Frontlight
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O backlight é um tipo específico de outdoor que possui 
                            uma fonte de luz por trás da superfície publicitária, destacando 
                            a mensagem durante a noite.
                            <br></br>
                            Características:
                            <List>
                                <li>Iluminação: A principal característica é a iluminação traseira, o que permite que a mensagem seja visível mesmo em condições de pouca luz.</li>
                                <li>Estética: Proporciona uma aparência vibrante e chamativa, destacando a publicidade no escuro.</li>
                                <li>Utilização: Muito eficaz para locais com tráfego noturno.</li>
                            </List>
                        </OurProductsContentParagraph>
                    </OurProductsContentMedia>
                    <Image src={frontlight} alt="Frontlight1" />
                </OuterMedia>

                <OurProductsContentDivisoryBar></OurProductsContentDivisoryBar>

                <OuterMedia direction="b">
                    <Image src={triedro} alt="Triedro1" />
                    <OurProductsContentMedia>
                        Triedro
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O trídeo é um formato inovador que combina três faces 
                            de um painel triangular para exibir mensagens em diferentes direções.
                            <br></br>
                            Características:
                            <List>
                                <li>Forma: Geralmente tem a forma de um triângulo, exibindo mensagens em três lados diferentes.</li>
                                <li>Visibilidade: Oferece visibilidade a partir de múltiplos ângulos e direções, sendo especialmente eficaz em locais de tráfego intenso e interseções.</li>
                                <li>Flexibilidade: Permite a veiculação de mensagens diferentes em cada face, proporcionando mais oportunidades de marketing.</li>
                            </List>
                        </OurProductsContentParagraph>
                    </OurProductsContentMedia>
                </OuterMedia>
            </OurProductsContent>
        </OurProductsContainer>
    )
}