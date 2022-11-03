import styled from 'styled-components';

export const Input = styled.input`
  background: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.border.radius.sm};
  color: ${(props) => props.theme.color.text};
  line-height: 1.6;
  padding: 0.75rem 0.5rem;
  width: 100%;

  & ::placeholder {
    color: ${(props) => props.theme.color.label};
  }
`;
