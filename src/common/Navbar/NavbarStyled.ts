import styled from 'styled-components';
import { ACTIVE_STATE_COLOR } from '../Constants';

export const NavbarContainer = styled.div`
height: 4.5rem;
background: #FFFFFF;
opacity: 1;
border-radius: 4.375rem;
display: flex;
justify-content: space-between;
align-items: center;
padding:0 2rem;
`

export const NavbarLinkContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const NavbarLink = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0.75rem 1rem;
border-radius: 2.625rem;
font-weight: bold;
&.active-link {
    background: ${ACTIVE_STATE_COLOR};
}
img {
    margin-right: 0.5rem;
}
`

export const NavbarMenuContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
.profile-picture {
    width: 2.75rem;
    height: 2.75rem;
}
.flex-column {
    margin-left: 0.5rem;
    flex-direction: column;
    .text-bold{
        font-weight: bold;
    }
    .text-color{
        color: #707070;
    }
}
.settings {
    width: 1.1875rem;
    height: 1.25rem;
    margin-left: 0.75rem;      
}
.more {
    width: .25rem;
    height: 1.125rem;
    margin-left: 0.75rem;      
}
`

export const VerticalLine = styled.div`
width: .0625rem;
height: 2.5rem; 
background-color: #EDEDED;   
margin-left: 0.75rem;      
`

