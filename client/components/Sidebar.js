import { BsPlus, BsGearFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { FaUserEdit, FaUserFriends } from 'react-icons/fa';
import SidebarIcon from './SidebarIcon';

export default function Sidebar() {
  return(
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg">
      
      <SidebarIcon icon={<FaUserFriends size="20" />} link="/emp" />
      <SidebarIcon icon={<BsPlus size="28" />} link="/add" />
      {/* <SidebarIcon icon={<FaUserEdit size="20" />} link="/edit" /> */}
      <SidebarIcon icon={<MdDelete size="20" />} link="/delete" />
      {/* <SidebarIcon icon={<BsGearFill size="22" />} /> */}
    </div>
  );
}
