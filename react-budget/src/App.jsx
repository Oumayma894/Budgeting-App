import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Library react-toastify
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Pages
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import { logoutAction } from './actions/logout';
import ExpensesPage, { expensesAction, expensesLoader } from './pages/ExpensesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction
      },{
        path: "logout",
        action: logoutAction
      }
    ],
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App;