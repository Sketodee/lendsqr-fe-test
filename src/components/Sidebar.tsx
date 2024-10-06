import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidBriefcase } from "react-icons/bi";
import { HiHome, HiUsers } from "react-icons/hi2";
import { PiHandshakeFill, PiUsersThreeFill, PiClipboardText } from 'react-icons/pi';
import { MdSavings, MdOutlineSendToMobile } from "react-icons/md";
import { GiReceiveMoney, GiWaterRecycling, GiSettingsKnobs } from "react-icons/gi";
import { FaCoins, FaUserCheck,  FaUserXmark, FaUserGear, FaScroll } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { AiTwotoneBank } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { RiDiscountPercentFill, RiArrowDownSLine } from "react-icons/ri";

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-toggle" onClick={toggle}>
          {isOpen ? '×' : '☰'}
        </button>
        <img className='logo' src="/logo.png" alt="" />
        <nav>
          <ul>
            <li><Link to="/dashboard" className='link'> <BiSolidBriefcase /> {isOpen && 'Switch Organization' } {isOpen && <RiArrowDownSLine/>} </Link></li>
            <li><Link to="/dashboard" className='link'><HiHome/> {isOpen && 'Dashboard'}</Link></li>
            {/* <li><Link to="/profile" className='link'>Profile</Link></li> */}
          </ul>

          <p>CUSTOMERS</p>
          <ul>
          <li><Link to="/dashboard" className='link'> <HiUsers /> {isOpen && 'Users'} </Link></li>
          <li><Link to="/dashboard" className='link'> <PiUsersThreeFill /> {isOpen && 'Guarantors'} </Link></li>
          <li><Link to="/dashboard" className='link'> <TbMoneybag/> {isOpen && 'Loans'} </Link></li>
          <li><Link to="/dashboard" className='link'> <PiHandshakeFill /> {isOpen && 'Decision Models'} </Link></li>
          <li><Link to="/dashboard" className='link'> <MdSavings/> {isOpen && 'Savings'} </Link></li>
          <li><Link to="/dashboard" className='link'> <GiReceiveMoney/> {isOpen && 'Loan Request'} </Link></li>
          <li><Link to="/dashboard" className='link'> <FaUserCheck/> {isOpen && 'Whitelist'} </Link></li>
          <li><Link to="/dashboard" className='link'> <FaUserXmark/> {isOpen && 'Karma'} </Link></li>
          </ul>

          <p>BUSINESSES</p>
          <ul>
          <li><Link to="/dashboard" className='link'> <BiSolidBriefcase /> {isOpen && 'Organization'} </Link></li>
          <li><Link to="/dashboard" className='link'> <GiReceiveMoney/> {isOpen && 'Loan Products'} </Link></li>
          <li><Link to="/dashboard" className='link'> <AiTwotoneBank /> {isOpen && 'Saving Products'} </Link></li>
          <li><Link to="/dashboard" className='link'> <FaCoins /> {isOpen && 'Fees and Charges'} </Link></li>
          <li><Link to="/dashboard" className='link'> <MdOutlineSendToMobile /> {isOpen && 'Transactions'} </Link></li>
          <li><Link to="/dashboard" className='link'> <GiWaterRecycling /> {isOpen && 'Services'} </Link></li>
          <li><Link to="/dashboard" className='link'> <FaUserGear /> {isOpen && 'Service Accounts'} </Link></li>
          <li><Link to="/dashboard" className='link'> <FaScroll /> {isOpen && 'Settlements'} </Link></li>
          <li><Link to="/dashboard" className='link'> <IoBarChartSharp /> {isOpen && 'Reports'} </Link></li>
          </ul>

          <p>SETTINGS</p>
          <ul>
          <li><Link to="/dashboard" className='link'> <GiSettingsKnobs /> {isOpen && 'Preferences'} </Link></li>
          <li><Link to="/dashboard" className='link'> <RiDiscountPercentFill /> {isOpen && 'Fees and Pricing'} </Link></li>
          <li><Link to="/dashboard" className='link'> <PiClipboardText /> {isOpen && 'Audit Log'} </Link></li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;