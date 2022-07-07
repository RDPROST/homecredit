export default function ActivityItem({ name, date, person }) {
    return (
        <div className="activity__item">
            <p className="activity__item-title">{name}</p>
            <div className="activity_item-group">
                <p className="activity__date">{date}</p>
                <div className="activity__person">{person}</div>
            </div>
        </div>
    );
}