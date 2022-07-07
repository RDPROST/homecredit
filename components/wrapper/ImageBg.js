export default function ImageBg({ img, title }) {
    return (
        <div className="wrapper__bg-img"
             style={{background: `linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.3)), url('${img}') no-repeat` }}>
            <h1 className="wrapper__bg-img-title">{title}</h1>
        </div>
    )
}