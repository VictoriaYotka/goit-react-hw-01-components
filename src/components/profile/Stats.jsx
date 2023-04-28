export const Stats = ({ stats }) => {
    const statsArr = Object.entries(stats);

    return (
            <ul>
               {statsArr.map(stat => (<li key={stat[0]}>
                <span>{stat[0]}: </span>
                <span>{stat[1]}</span>
                </li>))}                   
            </ul>
    )
}
