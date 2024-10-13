import { Menu } from "lucide-react";
import './index.scss';
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";

export default function Header({ toggleSidebar }) { 
    return ( 
        <div className="header">
            <div className="header__inner">
                <Link to="/"><img src="./logo.svg" alt="logo" width={92}  height={34} /></Link>
                <button
                    onClick={toggleSidebar} 
                    className="p-2 bg-white border border-gray-200 rounded-md shadow-sm"
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </div>
     );
}


Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};