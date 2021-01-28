import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter,
} from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Deserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRouter to="/">Order Now</SidebarRouter>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
