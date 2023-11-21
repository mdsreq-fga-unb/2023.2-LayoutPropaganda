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
import frontlight from '../../../public/assets/FrontLight.png'
import outdoor from '../../../public/assets/Outdoor.png'
import triedro from '../../../public/assets/Triedro.png'

export const OurProducts = () => {
    return(
        <OurProductsContainer id="Nossos Produtos">
            <OurProductsTitle>Nossos Produtos</OurProductsTitle>
            <OurProductsContent>
                <OuterMedia direction="t">
                    <Image src={outdoor} alt="Outdoor1" />
                    <OurProductsContentMedia>
                        Outdoor
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O outdoor é um tipo de publicidade exterior que
                            consiste em um painel básico localizado 
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

                <OurProductsContentDivisoryBar/>

                <OuterMedia direction="r">
                    <OurProductsContentMedia>
                        Frontlight
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O front-light é um tipo específico de painel que possui 
                            uma fonte de luz na frente da superfície publicitária, destacando 
                            a mensagem durante a noite.
                            <br></br>
                            Características:
                            <List>
                                <li>Iluminação: A principal característica é a iluminação frontal, o que permite que a mensagem seja visível mesmo em condições de pouca luz.</li>
                                <li>Estética: Proporciona uma aparência vibrante e chamativa, destacando a publicidade no escuro.</li>
                                <li>Utilização: Muito eficaz para locais com tráfego noturno.</li>
                            </List>
                        </OurProductsContentParagraph>
                    </OurProductsContentMedia>
                    <Image src={frontlight} alt="Frontlight1"/>
                </OuterMedia>

                <OurProductsContentDivisoryBar/>

                <OuterMedia direction="b">
                    <Image src={triedro} alt="Triedro1"/>
                    <OurProductsContentMedia>
                        Triedro
                        <OurProductsContentParagraph>
                            <br></br>
                            Definição: O triedo é um formato inovador que combina três faces 
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