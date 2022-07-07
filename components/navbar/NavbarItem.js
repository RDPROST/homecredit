import Link from "next/link";

export default function NavbarItem({href, img, name}) {
    return(
        <Link href={href}>
            <a className="navbar__item">
                <img src={img} alt="" className="navbar__icon"/>
                <span className="navbar__text">{name}</span>
            </a>
        </Link>
    )
}