import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyleTabdMenu>
            <ul>
                {props.menuItems.map((item: string, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
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

