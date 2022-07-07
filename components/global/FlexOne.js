export default function FlexOne({className, children}) {
    const defaultClasses = ["wrapper", "flex-1"];
    const allClasses = [...defaultClasses, className].join(" ");
    return (
        <div className={allClasses}>
            {children}
        </div>
    );
}