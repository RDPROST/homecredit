export default function DefaultButton ({ text, onClick, className, ...props }) {
    className = "button " + className
    return (
        <button className={ className } onClick={onClick}>
            {text}
        </button>
    );
}