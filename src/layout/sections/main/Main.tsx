import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                <div>
                    <S.SmallText>Hi there</S.SmallText>
                    <S.Name>I am <span>Ilya Sobolevski</span></S.Name>
                    <S.MainTitle>A Web Devoloper.</S.MainTitle>
                </div>
                <S.PhotoWrapper>
                    <S.Photo src={photo} alt=""/>
                </S.PhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

