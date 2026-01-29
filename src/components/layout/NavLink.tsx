import React from 'react';
import { NavItem } from '../../types';

interface NavLinkProps {
  item: NavItem;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isScrolled }) => {
  return (
    <a
      href={item.href}
      className={`font-medium text-base transition-colors hover:text-gold ${
        isScrolled ? 'text-navy' : 'text-white'
      }`}
    >
      {item.title}
    </a>
  );
};

export default NavLink;