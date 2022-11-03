import { NavLinkProps } from 'react-router-dom';

import { ChevronLeft } from '../Icons';

import { StyledLink } from './styles';

interface BackPageLinkProps extends NavLinkProps {}

export function BackPageLink(props: BackPageLinkProps) {
  return (
    <StyledLink {...props}>
      <ChevronLeft />
      Voltar
    </StyledLink>
  );
}
