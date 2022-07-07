import Head from "next/head";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
    const {access} = useSelector(state => state.user);

    const location = useRouter();

    return (
        <>
            <Head>
                <title>Document</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            </Head>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
}