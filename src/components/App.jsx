import{ Profile } from './profile/Profile';
import{ Stats } from './profile/Stats';
import{ Statistics } from './statistics/Statistics';
import { Friendlist } from './friendlist/Friendlist';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'

export const App = () => {
  return (
    <>
    <div>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
      />

      <Stats stats={user.stats} />
    </div>

      <Statistics 
        title='Upload stats'
        stats={data}
      />

      <Friendlist 
        friends={friends}
      />
    </>
  );
};
