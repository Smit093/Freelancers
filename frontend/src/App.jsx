import * as React from 'react';
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'
import Aboutus from './components/Pages/Aboutus'
import Contactus from './components/Forms/Contactus'
import Choice from './components/Forms/Choice'
import FreelancerForm from './components/Forms/FreelancerForm';
import ClientForm from './components/Forms/ClientForm';
import LoginChoice from './components/Forms/LoginChoice';
import ClientLoginForm from './components/Forms/ClientLoginForm';
import FreelancerLoginForm from './components/Forms/FreelancerLoginForm';
import Logout from './components/Forms/Logout';
import Seller from './components/Forms/Seller';
import Freelancers from './components/Pages/Freelancers';
import FreelancersDetails from './components/Pages/FreelancerDetails';
import Payment from './components/Pages/Payment';
import Categorised from './components/Pages/Categorised';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: "/about",
        element: <Aboutus />
      }, {
        path: "/contact",
        element: <Contactus />
      }, {
        path: "/choice",
        element: <Choice />
      }, {
        path: "/freelancerform",
        element: <FreelancerForm />
      }, {
        path: "/clientform",
        element: <ClientForm />
      }, {
        path: "/loginchoice",
        element: <LoginChoice />
      }, {
        path: "/client-login-form",
        element: <ClientLoginForm />
      }, {
        path: "/freelancer-login-form",
        element: <FreelancerLoginForm />
      }, {
        path: "/logout",
        element: <Logout />
      }, {
        path: "/become-a-seller",
        element: <Seller />
      }, {
        path: "/freelancers",
        element: <Freelancers />
      }, {
        path: "/freelancers/:email",
        element: <FreelancersDetails />
      }, {
        path: "/payment/:price",
        element: <Payment />
      }, {
        path: "/:category",
        element: <Categorised />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
