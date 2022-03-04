

    
    function Nav_comp() {
       

        return (
            <div className='nav_header'>
           
            <header>
                <h1>yu-gi-oh Cards</h1>
                
            </header>
            <nav>
                    <li>
                        cartas mais famosas <button onClick={return_card}>aqui</button>
                    </li>
                    
                </nav>
            </div>
        );
    }

    function return_card() {
        
        /*fetch(api_engines(2))
              .then(resp => resp.json())
              .then((data)=> { card = data})
                  
        return (
            card    
        );*/
    }
 export {Nav_comp};