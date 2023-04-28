import{ Profile } from './profile/Profile';
import{ Stats } from './profile/Stats';
import user from '../user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <Stats stats={user.stats} />
    </>
  );
};
