import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const PageHeader = styled.header`
  align-items: center;
  background: ${(props) => props.theme.color.profile};
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  margin: 0 auto;
  padding: 4.125rem 0 8.375rem;
  width: 100%;

  & img {
    height: 35px;
    width: 45px;
  }

  & span {
    text-transform: uppercase;
  }
`;

export const PageMain = styled.main`
  margin: 0 auto;
  width: calc(100vw - 32rem);
`;
