import { ArrowUpRight } from '../Icons';

import { StyledLink } from './styles';

interface GithubLinkProps {
  username: string;
}

export function GithubLink({ username }: GithubLinkProps) {
  return (
    <StyledLink href={`https://github.com/${username}`} target="_blank">
      <>
        Github
        <ArrowUpRight />
      </>
    </StyledLink>
  );
}
