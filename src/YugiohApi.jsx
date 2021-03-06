import {useState } from "react"
import style from "./styles/style.module.css"

import {cardTemplate} from "./api/cardTemplate"
import { api_engines } from "./api/api_engines"

import star from "./assets/level-stars.png"
import cardD from "./assets/cardDefault.jpg"
import "./styles/styleGB.css"

import {attributes_sets,race_sets,type_sets} from "./components/sets_att_rac_ty"

function YugiohApi() {
 
  
const [card, setcardObj] = useState([cardTemplate]);

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
     const [cardImg,setcardImg] = useState([cardD])
     //from img templates
     const [stars_img, setstars_img] = useState([])
     const [race_img, setrace_img] =  useState([])
     const [attr_img, setattr_img] = useState([])
     const [typeCard_img, settypecard] = useState([])
    

    
      async function  setcard_one(){
      let link = api_engines(1)
      setcardImg(cardD)
      fetch(link)
      .then(resp => resp.json())
      .then((data)=>{ setcardObj(data)
         console.log(data)})
      .then(()=>{
        console.log(card)
      setcardImg(card.card_images[0].image_url);
      setid(card.id);
      setname(card.name);	 
		  settype(card.type);
		  setdesc(card.desc);
		  setatk(card.atk);
		  setdef(card.def);
		  setlevel(card.level);
		  setrace(card.race);
		  setattribute(card.attribute);
		  setarchetype(card.archetype);
		  setstars_img(star);
		  setrace_img(race_sets(card.race));
		  setattr_img(attributes_sets(card.attribute));
		  settypecard(type_sets(card.type));
      })	
    }
      async function  setcard_two(){
        let link = api_engines(2)
      setcardImg(cardD)
      fetch(link)
      .then(resp => resp.json())
      .then((data)=>{ setcardObj(data)
        console.log(data)})
      .then(()=>{
        console.log(card)
      setcardImg(card.data[0].card_images[0].image_url);
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
		  setstars_img(star);
		  setrace_img(race_sets(card.data[0].race));
		  setattr_img(attributes_sets(card.data[0].attribute));
		  settypecard(type_sets(card.data[0].type));
      })	
    }

    return (
        
        <div className="container">
         
          <article className="container_content">
          
            <h2 className={style.text_reader}>{name}</h2>
            
            <div className={style.atributes_header}>
              <span className={style.content_atributes}>{level}<img className={style.img_content} src={stars_img} alt='' height="24px"/></span>             
              <span className={style.content_atributes}>type: {type}<img className={style.img_content} src={typeCard_img} alt='' height="24px"/></span>            
            </div>
            
            <div className={style.atributes_header}>
              <span className={style.content_atributes}>{attribute}<img className={style.img_content} src={attr_img} alt='' height="24px"/></span>
              <span className={style.content_atributes}>{race}<img className={style.img_content} src={race_img} alt='' height="24px"/></span>
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
            <img className={style.card} src={cardImg} alt={'ops'}/>
          </div>
         <div className= "conBtn">
         <button className={style.button_m} onClick={setcard_one} > Escolha aleat??ria </button>
         <button className={style.button_m} onClick={setcard_two} > exodia </button>
         </div>
          
        </div>
        
        );
    
} 

export default YugiohApi;