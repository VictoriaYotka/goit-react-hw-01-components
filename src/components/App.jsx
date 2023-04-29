import{ Profile } from './profile/Profile';
import{ Stats } from './profile/Stats';
import{ Statistics } from './statistics/Statistics';
import user from '../user.json';
import data from '../data.json';

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

      <Statistics 
        title='Upload stats'
        stats={data}
      />
    </>
  );
};
