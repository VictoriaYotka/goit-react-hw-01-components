export const Profile = ({ username, tag, location, avatar }) => {
    return (
            <div>
                <img
                src={avatar}
                alt="User avatar"
                //   class="avatar"
                />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

        
    )
}