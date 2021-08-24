import React, {useState} from 'react';
import {Button} from "../Button";
import {AboutData, menuData} from "../../data/MenuData";
import AboutDropdown from "../Dropdowns/AboutDropdown";
import {Nav, NavLink, NavMenu, SubmenuNav, NavMenuOverallBar, SubMenuLinks} from "../Style-Links";
import {Navbar} from './navbar'
import styled from "styled-components";
import PawlpiUpnaGuipi from "./PawlpiUpnaGuipi";

const About = ({toggle},{PawlpiUpnaGuipiData}) => {
    const [dropdown, setDropdown] = useState(false);
    const closeMenu = () => setDropdown(false)
    const onMouseEnter = () => {
        if(window.innerWidth < 960){setDropdown(true)}
        else(setDropdown(true))
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){setDropdown(false)}
        else(setDropdown(false))
    }

    return (
        <>
            <NavMenuOverallBar>
                {/** The main nav menu */}
                <Navbar/>
                {/** The about submenu */}
                <SubmenuNav>
                    <NavMenu>
                        {AboutData.map((item, index) => (
                            <SubMenuLinks to={item.link} key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMenu}>
                                {item.title}
                            </SubMenuLinks>
                        ))}
                        {dropdown && <AboutDropdown />}
                    </NavMenu>
                </SubmenuNav>
            </NavMenuOverallBar>
        </>

    )
}
export default About