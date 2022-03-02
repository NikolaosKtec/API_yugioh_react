import YugiohApi from  "./YugiohApi"
import Nav_comp from "./components/Nav_comp.js"
import Credi_footer from "./components/Credi_footer.js";
 const App = ()=> {
    
    return (<>
         <Nav_comp/>
        <YugiohApi/>
        <Credi_footer/>
    </>);
}

export default App;