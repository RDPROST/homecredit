import DefaultButton from "../button/DefaultButton";

export default function ContentDescription({name, image, files, links, description, time}){
    return (
        <>
            <h3 className="description__title">{name}</h3>
            <img
                src={image}
                alt="" className="description__img"/>
            <p className="description__text">{description}</p>
            <h3 className="description__title">Длительность активности, мин</h3>
            <h3 className="description__title">Дотренинговые материалы</h3>
            <div className="description__files">
                {files.map(file => {
                    return (<a href={file.url} key={file.id} className="description__file">
                        <img src="assets/images/icons/pdf-file.svg" alt=""/>
                    </a>)
                })}
            </div>
            <div className="description__links">
                {links.map(link => {
                    return (<a href={link.url} key={link.id} className="description__link">
                        {link.name}
                    </a>)
                })}
            </div>
            <DefaultButton className={"description__button"} text={"Подробнее"} />
        </>
    )
}