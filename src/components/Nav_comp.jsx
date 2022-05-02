
import "./../styles/styleGB.css"
    
    function Nav_comp() {
       

        return (
            <nav className='nav_top'>
            <header>
                <h1><a id="linkA" href="https://db.ygoprodeck.com/" target='_blank'>yu-gi-oh Cards</a></h1>
            </header>
            <ul>
                    <li>
                        <a href="#" target='_blank'>cartas mais famosas </a> 
                    </li> 
            </ul>
            </nav>
        );
    }

 export {Nav_comp};