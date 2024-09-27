import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext';
import UserContext from '../../contexts/UserContext';

const Navbar = () => {
    const { loggedin } = useContext(LoginContext);
    const { user } = useContext(UserContext);

    // Determine if user is a freelancer or client
    const isFreelancer = loggedin && user === 'freelancer';
    const isClient = loggedin && user === 'client';

    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-green-500 z-50">
            <NavLink to="/" className="text-white text-2xl font-bold">Freelancer Fusion</NavLink>
            <div>
                {/* Common Nav Links */}
                <NavLink to="/about" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                    About Us
                </NavLink>
                <NavLink to="/contact" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                    Contact Us
                </NavLink>
                <NavLink to="/freelancers" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                    Freelancers
                </NavLink>

                {/* Logged in and user is freelancer */}
                {isFreelancer ? (
                    <>
                        <NavLink to="/become-a-seller" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                            Become a seller
                        </NavLink>
                        <NavLink to="/logout" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                            Log out
                        </NavLink>
                    </>
                ) : null}

                {/* Logged in and user is client */}
                {isClient ? (
                    <NavLink to="/logout" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                        Log out
                    </NavLink>
                ) : null}

                {/* Not logged in */}
                {!loggedin && (
                    <>
                        <NavLink to="/loginchoice" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                            Login
                        </NavLink>
                        <NavLink to="/choice" className="text-white px-4 py-2 hover:bg-gray-700 rounded" activeclassname="bg-gray-700">
                            Signup
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
