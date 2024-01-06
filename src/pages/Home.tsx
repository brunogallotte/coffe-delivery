import { ToastContainer } from "react-toastify";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Menu } from "../components/Menu";

export function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Menu />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}