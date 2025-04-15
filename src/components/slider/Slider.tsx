import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_styles'

type SlidePropsType={
    text:string,
    userName:string,
}

const SlideComp = (props:SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <SlideComp userName={'ivan ivanov'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <SlideComp userName={'dima petrow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <SlideComp userName={'volha glina'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);


// import React from 'react';
// import {S} from './Slider_styles'
// import {FlexWrapper} from "../FlexWrapper";
//
//
// export const Slider:React.FC = () => {
//     return (
//         <S.StyledSlider>
//             <FlexWrapper>
//             <S.Slide>
//                 <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                     labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
//                     elit.</S.Text>
//                 <S.Name>@ivan ivanow</S.Name>
//             </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.StyledSlider>
//     );
// };
//
