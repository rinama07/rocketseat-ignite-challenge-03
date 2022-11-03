import { Link } from 'react-router-dom';

import { FilterInput } from '../../components/FilterInput';
import { GithubLink } from '../../components/GithubLink';
import { Building, GithubBrands, UserGroup } from '../../components/Icons';
import { PostCard } from '../../components/PostCard';

import { PostList, Profile, SearchBar } from './styles';

// TODO: Remove this mocked data
const user = {
  imageSrc: 'https://github.com/rinama07.png',
  name: 'Marina Pirutti',
  username: 'rinama07',
  bio: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.',
  organization: 'MPQ',
  followers: 0,
};

export function HomePage() {
  return (
    <>
      <Profile>
        <img src={user.imageSrc} alt={user.name} />

        <section>
          <header>
            <h1>{user.name}</h1>

            <GithubLink username={user.username} />
          </header>

          <p>{user.bio}</p>

          <footer>
            <div>
              <GithubBrands width={18} height={18} />
              {user.username}
            </div>

            <div>
              <Building width={18} height={18} />
              {user.organization}
            </div>

            <div>
              <UserGroup width={18} height={18} />
              {user.followers} seguidores
            </div>
          </footer>
        </section>
      </Profile>

      <SearchBar>
        <div>
          <label htmlFor="post-filter">Publicações</label>

          <span>6 publicações</span>
        </div>

        <FilterInput id="post-filter" placeholder="Buscar conteúdo" />
      </SearchBar>

      <PostList>
        {/* TODO: Remove this mocked list */}
        {[1, 2, 3].map((issue) => (
          <li key={issue}>
            <Link to={`/issue?id=${issue}`}>
              <PostCard />
            </Link>
          </li>
        ))}
      </PostList>
    </>
  );
}
