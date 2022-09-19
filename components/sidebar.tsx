import {GiBatteredAxe, GiBlunderbuss, GiBrute, GiCrossedSwords} from "react-icons/gi";
// import '../styles/index.css'
// import '../styles/globals.css'

export interface SideBarInterface {
  icon: any
  text: string
}

const SideBar = () => {
  return (
    <div className="
      fixed top-0 left-0 h-screen w-16 m-0 
      flex flex-col 
      bg-gray-900 text-white shadow">
      <SideBarIcon icon={<GiBatteredAxe size="28" />} text="tooltip" />
      <SideBarIcon icon={<GiBlunderbuss size="28" />} text="tooltip" />
      <SideBarIcon icon={<GiBrute size="28" />} text="tooltip" />
      <SideBarIcon icon={<GiCrossedSwords size="28" />} text="tooltip" />
    </div>
  )
}

const SideBarIcon = (iconData : SideBarInterface) => {
  return (
    <div className="sidebar-icon group">
      {iconData.icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {iconData.text}
      </span>
    </div>
    
  )
}

export default SideBar