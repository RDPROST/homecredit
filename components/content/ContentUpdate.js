import {useEffect, useState} from 'react';

export default function ContentUpdate({ id, name, description, image, time, files, links }) {
    const [selectedImage, setSelectedImage] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedImage) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedImage)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImage])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImage(undefined)
            return
        }

        setSelectedImage(e.target.files[0])
    }
    return (
        <div className="content__info">
            <div className="info__title">Создание обучающей активности</div>
            <div className="info__wrapper">
                <label htmlFor="info__header" className="info__label">Добавить заголовок</label>
                <input type="text" id="info__header" placeholder="Не заполнено" className="info__input" value={name}/>

                <label htmlFor="info__desc" className="info__label">Добавить описание</label>
                <textarea id="info__desc" placeholder="Не заполнено" className="info__textarea" value={description}></textarea>

                <input type="file" id="info__img" className="info__file" onChange={onSelectFile}/>
                <label htmlFor="info__img" className="info__file-label">
                    <span className="info__file-text">Выбрать изображение</span>
                    <img src="assets/images/icons/upload.svg" alt="" className="info__file-img"/>
                </label>
                {selectedImage &&  <img src={preview} alt="" className="info__img"/> ||  <img src={image} alt="" className="info__img"/>}

                <label htmlFor="info__time" className="info__label">Длительность активности, мин</label>
                <input type="text" id="info__time" placeholder="30" className="info__input" value={time}/>

                <label className="info__label">Дотренинговые материалы</label>
                <input type="file" id="info__pre-training" className="info__file"/>
                <label htmlFor="info__pre-training" className="info__file-label">
                    <span className="info__file-text">Добавить файл</span>
                    <img src="assets/images/icons/upload.svg" alt="" className="info__file-img"/>
                </label>
                <div className="info__files">
                    {files.map(file => {
                        return (<a href={file.url} key={file.id} className="description__file">
                            <img src="assets/images/icons/pdf-file.svg" alt=""/>
                        </a>)
                    })}
                </div>

                <label htmlFor="info__links" className="info__label">Добавить ссылки</label>
                <input type="text" id="info__links" placeholder="Введите название" className="info__input"/>
                <div className="info__group">
                    <input type="text" placeholder="Введите url" className="info__input"/>
                    <button className="info__btn">Добавить</button>
                </div>

                <div className="info__links-block">
                    {links.map(link => {
                        return (
                            <div className="info__links-item" key={link.id}>
                                <a href={link.url} className="info__links-text">{link.name}</a>
                                <button className="info__links-btn">Удалить</button>
                            </div>
                        )
                    })}
                </div>

                <label className="info__label">Материалы для тренера</label>
                <input type="file" id="info__train" className="info__file"/>
                <label htmlFor="info__train" className="info__file-label">
                    <span className="info__file-text">Добавить файл</span>
                    <img src="assets/images/icons/upload.svg" alt="" className="info__file-img"/>
                </label>
                <div className="info__files">
                    {files.map(file => {
                        return (<a href={file.url} key={file.id} className="description__file">
                            <img src="assets/images/icons/pdf-file.svg" alt=""/>
                        </a>)
                    })}
                </div>
                <div className="info__btns">
                    <button className="button info__button info__button-gray">Удалить</button>
                    <button className="button info__button">Сохранить</button>
                </div>
            </div>
        </div>
    )
}