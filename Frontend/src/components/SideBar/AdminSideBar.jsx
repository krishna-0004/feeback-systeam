import { Link } from 'react-router-dom';
import { LayoutDashboard, LogOut } from 'lucide-react';
import UserProfile from '../../assets/user-profile.png';

function AdminSideBar() {
    const navigationItems = [
        { icon: <LayoutDashboard size={25} className="nav-icon" />, label: 'Dashboard', link: '/admin-dashboard', hideOnSmall: true },
        { icon: <LogOut size={25} className="nav-icon" />, label: 'Logout', link: '/' },
    ];

    return (
        <aside className="sidebar bg-[#dc2626] flex md:flex-col justify-between max-md:px-4 md:justify-start items-center md:h-[97vh] rounded-lg md:py-4 py-1 text-white">
            <div className="profile flex flex-col justify-center items-center">
                <img src={UserProfile} alt="Admin Avatar" className="avatar max-md:size-14" />
                {/* <h3 className="font-bold text-center md:py-2 max-md:pt-1 text-lg">session.name</h3> */}
            </div>
            <nav className="nav-menu">
                <ul className="flex flex-col justify-center items-center gap-4 py-6">
                    {navigationItems.map((item, index) => (
                        <li key={index} className={`${item.hideOnSmall ? 'hidden md:flex' : ''}`}>
                            <Link to={item.link} className="nav-link flex flex-col justify-center items-center">
                                {item.icon} {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default AdminSideBar;
