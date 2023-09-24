import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto">
      <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout