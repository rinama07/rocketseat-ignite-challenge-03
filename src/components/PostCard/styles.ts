import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.color.post};
  border-radius: ${(props) => props.theme.border.radius.lg};
  display: flex;
  flex-direction: column;
  height: 260px;
  max-width: 416px;
  padding: 2rem;

  & header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const PostDate = styled.div`
  color: ${(props) => props.theme.color.span};
  line-height: 1.6;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.color.title};
  line-height: 1.6;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.color.text};
  flex: 1;
  line-height: 1.6;
  margin-top: 1.25rem;
  overflow-y: auto;
`;
