import styled from 'styled-components';

export const Summary = styled.section`
  background: ${(props) => props.theme.color.profile};
  border-radius: ${(props) => props.theme.border.radius.lg};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;

  & header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
  }

  & h1 {
    color: ${(props) => props.theme.color.title};
    font-size: ${(props) => props.theme.text._24};
    font-weight: 700;
    line-height: 1.3;
    margin-top: 1.25rem;
  }

  & footer {
    color: ${(props) => props.theme.color.subtitle};
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;

    & > div {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      line-height: 1.6;

      & svg {
        fill: ${(props) => props.theme.color.label};
      }
    }
  }
`;

export const IssueContent = styled.div`
  font-size: ${(props) => props.theme.text._16};
  line-height: 1.6;
  padding: 2.5rem 2rem;
  text-align: justify;
`;
