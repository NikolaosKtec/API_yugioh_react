//elements
import elemn_dark from "./../assets/attributes/Dark.png"

//race
import dragon_race from "./../assets/race-monster/Dragon-race.png"   
import spellcaster from "./../assets/race-monster/Spellcaster-DOR.png"
//type_card
import normalMons from "./../assets/typeCard/Normal Monster.jpg"
//import type_fusionm from "./assets/Fusion Monster-typecard.jpg" 
   
    function attributes_sets(attrib) {
        var attr;   
    switch (attrib) {
            case"DARK":
            attr = elemn_dark;
                break;
        
          
        }
    
        return(attr);
    }

    function race_sets(race) {
        var monster;   
    
    switch (race) {
        case"Spellcaster": 
        monster = spellcaster;
        break;
    }
        return(monster);
    }

    function type_sets(type) {
        var typeCard;   
    
    switch (type) {
        case"Normal Monster": 
        typeCard = normalMons;
        break;
    }
        return(typeCard);
    }
    export {attributes_sets,race_sets,type_sets};