import { BackPageLink } from '../../components/BackPageLink';
import { GithubLink } from '../../components/GithubLink';
import { Calendar, Comment, GithubBrands } from '../../components/Icons';

import { IssueContent, Summary } from './styles';

// TODO: Remove this mocked data
const issue = {
  author: 'rinama07',
  comments: [],
  title: 'JavaScript data types and data structures',
  postedAt: new Date(),
  content: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn.`,
};

export function IssuePage() {
  return (
    <>
      <Summary>
        <header>
          <BackPageLink to="/" />

          <GithubLink username={issue.author} />
        </header>

        <h1>{issue.title}</h1>

        <footer>
          <div>
            <GithubBrands width={18} height={18} />
            {issue.author}
          </div>

          <div>
            <Calendar width={18} height={18} />
            {issue.postedAt.toDateString()}
          </div>

          <div>
            <Comment width={18} height={18} />
            {issue.comments} comentários
          </div>
        </footer>
      </Summary>

      <IssueContent>{issue.content}</IssueContent>
    </>
  );
}
