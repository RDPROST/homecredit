import navbarItems from "../../data/navbar";
import NavbarItem from "./NavbarItem";
import NavbarTitle from "./NavbarTitle";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__list">
                {navbarItems.map((item, index) => {
                    if (item.type === "title") {
                        return (
                            <NavbarTitle key={index} name={item.name}/>
                        )
                    } else {
                        return (
                            <NavbarItem key={index} {...item}/>
                        )
                    }
                })}
            </div>
        </nav>
    );
}