import styled from 'styled-components';

export const StyledLink = styled.a`
  align-items: center;
  border-bottom: 1px solid transparent;
  color: ${(props) => props.theme.color.blue};
  display: flex;
  font-size: ${(props) => props.theme.text._12};
  font-weight: 700;
  gap: 0.5rem;
  line-height: 1.6;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.color.blue};
  }

  & svg {
    fill: ${(props) => props.theme.color.blue};
  }
`;
