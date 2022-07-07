import FlexOne from "../global/FlexOne";
import Navbar from "../navbar/Navbar";

export default function Main({ children }) {
    return (
        <main className="main">
            <div className="container">
                <FlexOne>
                    <Navbar/>
                </FlexOne>
                {children}
            </div>
        </main>
    )
}