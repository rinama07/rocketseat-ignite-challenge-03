import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { ArrowUpRight } from '../Icons';
import { StyledLink } from './styles';

interface LinkProsps extends LinkProps {
  children: ReactNode;
}

export function Link({ children, ...props }: LinkProsps) {
  return (
    <StyledLink {...props}>
      {children}
      <ArrowUpRight />
    </StyledLink>
  );
}
