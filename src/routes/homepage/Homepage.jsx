import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
    <Link to="/dashboard">dashboard</Link>
    </div>
  )
}

export default Homepage