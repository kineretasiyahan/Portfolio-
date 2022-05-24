import './navbar.css'
import { useState } from 'react'
import { Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick =()=>setNav(!nav) 
    console.log(nav);
  return (
    <div className='navbar-container'>
    {/* //menu */}
    <div className='navbar'>
        <ul className="list">
            <Link className='links' spy={true} to='profile' smooth={true}>
            <li>Home</li>
            </Link>
            <Link className='links' spy={true} to='about' smooth={true}>
            <li>About</li>
            </Link>
            <Link className='links' spy={true} to='skills' smooth={true}>
            <li>Skills</li>
            </Link>
            <Link className='links' spy={true} to='projects' smooth={true}>
            <li>Work</li>
            </Link>
            <Link className='links' spy={true} to='contact' smooth={true}>
            <li>Contact</li>
            </Link>
        </ul>
    </div>
    <div onClick={handleClick} className="icons">
        {!nav?<i class="fa fa-bars" aria-hidden="true"></i>:<i class="fa fa-window-close" aria-hidden="true"></i>}
    </div>

    {/* //mobile menu */}
    <ul className={!nav?"list-md":"list-mobile"}>
    <Link className='links' spy={true} to='profile' smooth={true}>
            <li>Home</li>
            </Link>
            <Link className='links' spy={true} to='about' smooth={true}>
            <li>About</li>
            </Link>
            <Link className='links' spy={true} to='skills' smooth={true}>
            <li>Skills</li>
            </Link>
            <Link className='links' spy={true} to='projects' smooth={true}>
            <li>Work</li>
            </Link>
            <Link className='links' spy={true} to='contact' smooth={true}>
            <li>Contact</li>
            </Link>
        </ul>

    </div>
  )
}
export default Navbar