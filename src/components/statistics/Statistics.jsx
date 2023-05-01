export const Statistics = ({ title, stats }) => {
    return (
        <section>
        {title.length > 0 && (<h2>{title}</h2>)}
        
        <ul>
            {stats.map(stat => <li key={stat.id}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
            </li>)}
        </ul>
        </section>
    )
}