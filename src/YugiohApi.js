import { useEffect, useState } from "react"
import style from "./styles/style.module.css"
import star from "./assets/level-stars.png"
import {Api_engine_yugioh} from "./api/Api_engine_yugioh"


import "./styles/styleGB.css"

import {attributes_sets,race_sets,type_sets} from "./components/sets_att_rac_ty"

function YugiohApi() {

  useEffect(()=> {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Jinzo')
  .then(resp => resp.json())
  .then((data)=>setcardObj(data))
  },[])  
 
const [card, setcardObj] = useState([Api_engine_yugioh]);


    
     //from card infos
     const [id,setid ] = useState([])
     const [name,setname ] = useState([])
     const [type,settype ] = useState([])
     const [desc,setdesc ] = useState([])
     const [atk,setatk ] = useState([])
     const [def,setdef ] = useState([])
     const [level,setlevel ] = useState([])
     const [race, setrace] = useState([])
     const [attribute,setattribute ] = useState([])
     const [archetype,setarchetype] = useState([])
     const [cardImg,setcardImg] = useState([])
     //from img templates
     const [stars_img, setstars_img] = useState([])
     const [race_img, setrace_img] =  useState([])
     const [attr_img, setattr_img] = useState([])
     const [typeCard_img, settypecard] = useState([])
    

   function setcard_one(){
    console.log(card.data[0])

      setid(card.data[0].id);
      setname(card.data[0].name);	 
		  settype(card.data[0].type);
		  setdesc(card.data[0].desc);
		  setatk(card.data[0].atk);
		  setdef(card.data[0].def);
		  setlevel(card.data[0].level);
		  setrace(card.data[0].race);
		  setattribute(card.data[0].attribute);
		  setarchetype(card.data[0].archetype);
		  setcardImg(card.data[0].card_images[0].image_url)
		  setstars_img(star)
		  setrace_img(race_sets(card.data[0].race))
		  setattr_img(attributes_sets(card.data[0].attribute))
		  settypecard(type_sets(card.data[0].type))     	
    }

    function setcard_random() {
      
    }

    return (

        <section className="container">
         
          <article className="header">
          
            <h2 className={style.text_reader}>{name}</h2>
            
            <div className={style.atributes_header}>
              <span className={style.content_atributes}>{level}<img className={style.img_content} src={stars_img} height="24px"/></span>             
              <span className={style.content_atributes}>type: {type}<img className={style.img_content} src={typeCard_img} height="24px"/></span>            
            </div>
            
            <div className={style.atributes_header}>
              <span className={style.content_atributes}>{attribute}<img className={style.img_content} src={attr_img} height="24px"/></span>
              <span className={style.content_atributes}>{race}<img className={style.img_content} src={race_img} height="24px"/></span>
              <span className={style.content_atributes}>atk/{atk}</span>
              <span className={style.content_atributes}>def/ {def}</span>
            </div>

            <div className={style.atributes_header}>
              <p className={style.content_atributes}>{desc}</p>  
            </div> 
            <div className={style.content_bottom}>
              <p >archetype: {archetype}</p>
              <p >id: {id}</p>
            </div>
          </article>
   
          <div className={style.card_assets}>
            <img className={style.card} src={cardImg} alt="erro de amostra!"/>
          </div>
          <button className={style.button_m} onClick={setcard_one}> Jinzo </button>
          
        </section>
        );
    
} 

  const navItem  = ()=> {
    
    return (
      <nav>
        
      </nav>
    );
  }
export default YugiohApi;