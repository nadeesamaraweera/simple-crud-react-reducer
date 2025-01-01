import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import { Add } from "./pages/Add.tsx";
import { Update } from "./pages/Update.tsx";
import { Delete } from "./pages/Delete.tsx";
import { RootLayout } from "./component/RootLayout.tsx";
import { CustomerProvider } from "./store/CustomerProvider.tsx";
import { ItemProvider } from "./store/ItemProvider.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: '/add', element: <Add /> },
                { path: '/delete', element: <Delete /> },
                { path: '/update', element: <Update /> }
            ]
        },
    ]);

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes} />
                </ItemProvider>
            </CustomerProvider>
        </>
    );
}

export default App;
