import { LinkHTMLAttributes } from 'react';
import { ArrowUpRight } from '../Icons';

import { StyledLink } from './styles';

interface ExternalLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {}

export function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <StyledLink href={href} target="_blank">
      {children}
      <ArrowUpRight />
    </StyledLink>
  );
}
