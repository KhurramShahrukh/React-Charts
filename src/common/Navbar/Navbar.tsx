// ibrary imports
import React from 'react';

// local imports
import { NavbarContainer, NavbarLink, NavbarLinkContainer, NavbarMenuContainer, VerticalLine } from './NavbarStyled';
import {
    test_logo,
    home,
    group,
    calendar,
    chat_bubble,
    credit_card,
    senior_woman_doctor,
    more,
    settings
} from '../../assets';

const Navbar: React.FC = () => {
    // states and varialbles
    const navbarLinks = [
        {
            logo: home,
            text: "Overview",
        },
        {
            logo: group,
            text: "Patients",
        },
        {
            logo: calendar,
            text: "Schedule",
        },
        {
            logo: chat_bubble,
            text: "Message",
        },
        {
            logo: credit_card,
            text: "Transactions",
        }
    ]

    return (
        <NavbarContainer>
            <img src={test_logo} alt={'test_logo'} />
            <NavbarLinkContainer>
                {navbarLinks.map((item, index) => (
                    <NavbarLink className={item.text === 'Patients' ? 'active-link' : ''} key={index}>
                        <img src={item.logo} alt={'logo'} />
                        <div>{item.text}</div>
                    </NavbarLink>
                ))}
            </NavbarLinkContainer>
            <NavbarMenuContainer>
                <img className='profile-picture' src={senior_woman_doctor} alt={'profile-picture'} />
                <div className='flex-column'>
                    <div className='text-bold'>Dr. Jose Simmons</div>
                    <div className='text-color'>General Practitioner</div>
                </div>
                <VerticalLine />
                <img className='settings' src={settings} alt={'settings'} />
                <img className='more' src={more} alt={'more'} />
            </NavbarMenuContainer>
        </NavbarContainer>
    )
}

export default Navbar;

