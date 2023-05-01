export const Friend = ( friend ) => {
    const { 
        avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
        name = 'user',
        isOnline, 
    } = friend;
    
    return (
    <li>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </li>
)};