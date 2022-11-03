import styled from 'styled-components';

export const Profile = styled.div`
  align-items: center;
  background: ${(props) => props.theme.color.profile};
  border-radius: ${(props) => props.theme.border.radius.lg};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;

  & img {
    height: 148px;
    width: 148px;
    border-radius: ${(props) => props.theme.border.radius.md};
  }

  & header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    & h1 {
      color: ${(props) => props.theme.color.title};
      font-size: ${(props) => props.theme.text._24};
      font-weight: 700;
      line-height: 1.3;
    }
  }

  & p {
    color: ${(props) => props.theme.color.text};
    font-size: ${(props) => props.theme.text._16};
    line-height: 1.6;
    margin-top: 0.5rem;
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

export const SearchBar = styled.div`
  margin-top: 4.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    & label {
      color: ${(props) => props.theme.color.subtitle};
      font-size: ${(props) => props.theme.text._18};
      font-weight: 700;
      line-height: 1.6;
    }

    & span {
      color: ${(props) => props.theme.color.span};
      font-size: ${(props) => props.theme.text._14};
      line-height: 1.6;
      text-align: right;
    }
  }
`;

export const PostList = styled.ul`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  margin: 3rem 0;

  & li {
    cursor: pointer;

    & a {
      text-decoration: none;
    }
  }
`;
