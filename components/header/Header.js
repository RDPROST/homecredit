import FlexOne from "../global/FlexOne";
import Logo from "../global/Logo";
import FlexTwo from "../global/FlexTwo";
import User from "./User";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <FlexOne>
                    <Logo/>
                </FlexOne>
                <FlexTwo/>
                <FlexOne>
                    <User/>
                </FlexOne>
            </div>
        </header>
    )
}