import React from 'react';
import {S} from './Skills_Styles';

import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData=[
    {
        iconId:"codeSvg",
        title:"html5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId:"css",
        title:"css",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },    {
        iconId:"react",
        title:"react",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },    {
        iconId:"typescript",
        title:"typescript",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },    {
        iconId:"figma",
        title:"figma",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },    {
        iconId:"sc",
        title:"sc",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },

]

export const Skills = () => {
    return (
        <S.Skills >
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                {skillData.map((skill) => (
                    <Skill iconId={skill.iconId}
                           title={skill.title}
                           description={skill.description}
                           key={skill.iconId}/>
                ))}
            </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

