import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                <div>
                    <S.SmallText>Hi there</S.SmallText>
                    <S.Name>I am <span>Ilya Sobolevski</span></S.Name>
                    <S.MainTitle>
                        <p>A Web Devoloper.</p>
                        <Typewriter
                        options={{
                            strings:['A Web Devoloper', 'A Frontend Devoloper', 'A Web Designer'],
                            autoStart: true,
                            loop: true,
                            delay: 80
                        }}/>

                    </S.MainTitle>
                </div>
                <Tilt

                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                        >
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

