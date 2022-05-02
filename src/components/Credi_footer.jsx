import img_dark from "./../assets/bk_dark.jpg"

    function Credi_footer() {
        return (
            
            <footer>
                <div>
                <figure>
                    <img src={img_dark} width='180px' alt="ops!"/>
                </figure>
                </div>
            <div>
                <p>por: Nikolaos Ferreira @2022</p>
                <ul>
                    <li>link da api:<a href='https://db.ygoprodeck.com/api-guide/' target='_blank'>YugiohApi</a>
                    </li>
                </ul>
                </div>
            </footer>
        );
    }
export default Credi_footer;