import { Container, Content, PostDate, Title } from './styles';

interface PostCardProps {
  title?: string;
  postedAt?: Date;
  description?: string;
}

export function PostCard({
  title = 'JavaScript data types and data structures',
  postedAt = new Date(),
  description = `Programming languages all have built-in data structures, but these often
  differ from one language to another. This article attempts to list the
  built-in data structures available in JavaScript and what properties
  they have. These can be used to build other data structures. Wherever
  possible, comparisons with other languages are drawn.`,
}: PostCardProps) {
  return (
    <Container>
      <header>
        <Title>{title}</Title>

        <PostDate>{postedAt.toLocaleDateString()}</PostDate>
      </header>

      <Content>{description}</Content>
    </Container>
  );
}
