import{ Profile } from './profile/Profile';
// import{ Stats } from './profile/Stats';
import{ Statistics } from './statistics/Statistics';
import { Friendlist } from './friendlist/Friendlist';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'

export const App = () => {
  return (
    <>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />

      <Statistics 
        title='Upload stats'
        stats={data}
      />

      <Friendlist 
        friends={friends}
      />

        <TransactionHistory
          items={transactions}
        />
    </>
  );
};
