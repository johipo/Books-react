import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import { Link } from 'react-router-dom'

function Header() {
   return (
       <header className='header'>
           <Link to="/">
               <Logo/>
           </Link>
           <OpcoesHeader/>
           <IconesHeader/>
       </header>
   )
}
export default Header