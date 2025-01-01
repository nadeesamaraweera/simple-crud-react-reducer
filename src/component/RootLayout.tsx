import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export const RootLayout = () => {
    return (
        <>
            <Navigation/>
            <main className='p-4'>
                <Outlet></Outlet>
            </main>

        </>
    );
};