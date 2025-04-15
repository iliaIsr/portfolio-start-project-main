import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {tabsItemsType, tabsStatusType} from "../Works";

type TabMenuPropsType={
    tabsItems: tabsItemsType;
    changeFilterStatus:( value: tabsStatusType)=>void;
    currentFilterStatus:string
}


export const TabMenu = (props:TabMenuPropsType) => {
    return (
        <StyleTabdMenu>
            <ul>
                {props.tabsItems.map((item, index)=>{
                    return <ListItem key={index} >
                        <Link active={props.currentFilterStatus===item.status} as={"button"} onClick={()=>props.changeFilterStatus(item.status)}>
                            {item.title}</Link>
                    </ListItem>
                    })}
            </ul>
        </StyleTabdMenu>
    );
};

const StyleTabdMenu=styled.nav`
    
ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border:solid 2px red;
    margin: 0 auto 40px;
}
    
`
const ListItem=styled.li`
   
`

