import Link from 'next/link'
import { FaUserEdit, FaUserFriends } from 'react-icons/fa';

export default function SidebarIcon ({ icon, link, text = 'tooltip' }) {
    return (<Link href={link}>
        <div className="sidebar-icon">
            {icon}        
            <span className="sidebar-tooltip">
                {text}
            </span>
        </div>
    </Link>)
}
