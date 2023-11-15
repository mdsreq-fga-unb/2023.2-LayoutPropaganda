import { ImageContainer, SloganContainer, SloganText, SloganTextSpan } from "./styles"

export const Slogan = () => {
    return(
        <SloganContainer>
            <SloganText>
                MOSTRANDO <SloganTextSpan>AO MUNDO</SloganTextSpan>
                <br />
                <SloganText>
                O QUE VOCÊ CONSTRUIU
                </SloganText>
            </SloganText>
            <ImageContainer></ImageContainer>
        </SloganContainer>
    )
}