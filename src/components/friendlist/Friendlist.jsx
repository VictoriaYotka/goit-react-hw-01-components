import { Friend } from "./Friend";

export const Friendlist = ({friends}) => (
    <ul>
        {friends.map(friend => <Friend {...friend} key={friend.id} /> )}
        
    </ul>
);