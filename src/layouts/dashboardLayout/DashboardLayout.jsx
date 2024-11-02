import { Outlet, useNavigate } from 'react-router-dom'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import ChatList from '../../components/chatList/ChatList'

const DashboardLayout = () => {
  //to protect routes ( why in dashboard layout? home pge should visible withut authentication, so we can't protect route in rootlayout)
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()
  
    useEffect(()=>{
      if (isLoaded && !userId) {
        navigate('/sign-in')
      }
    },[isLoaded, userId, navigate])
  
    console.log('test', userId)
  
    if (!isLoaded) return 'Loading...'
  
    // show dshbordlyout( dshbordpge, chtpge) if user signed in
  return (
    <div className='dashboardLayout'><div className="menu"><ChatList/></div>
    <div className="content">
      <Outlet />
    </div></div>
  )
}

export default DashboardLayout