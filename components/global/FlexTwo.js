export default function FlexTwo({className, children}) {
    const defaultClasses = ["wrapper", "flex-2"];
    const allClasses = [...defaultClasses, className].join(" ");
    return (
        <div className={allClasses}>
            {children}
        </div>
    );
}