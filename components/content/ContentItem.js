export default function ContentItem({ name, date, person, setActivity, id, active }) {
    return (
        <div className={'list-block__item' + active} onClick={()=>{setActivity(id)}}>
            <div className="list-block__wrapper">
                <p className="list-block__name">{name}</p>
            </div>
            <div className="list-block__wrapper">
                <p className="list-block__person">{person}</p>
            </div>
        </div>
    );
}