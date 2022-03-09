//attributes
import elemn_dark from "./../assets/attributes/Dark.png"
import elemn_light from "./../assets/attributes/Light.png"
import elemn_earth from "./../assets/attributes/Earth.png"
import elemn_fire from "./../assets/attributes/Fire.png"
import elemn_divine from "./../assets/attributes/Divine.png"
import elemn_water from "./../assets/attributes/Water.png"
import elemn_wind from "./../assets/attributes/Wind.png"
import continuous from "./../assets/attributes/Continuous.webp"
import counter from "./../assets/attributes/Counter.webp"
import equip from "./../assets/attributes/Equip.webp"
import field from "./../assets/attributes/Field.webp"
import quick from "./../assets/attributes/Quick-Play.webp"
import ritual from "./../assets/attributes/Ritual.webp"
import spliceLarge from "./../assets/attributes/SpliceLarge.webp"
import normal from "./../assets/attributes/Normal.png"
//race
  
import spellcaster from "./../assets/race-monster/Spellcaster-DOR.png"
import sea_serpent from "./../assets/race-monster/Sea_Serpent-DOR.png"
import thunder from "./../assets/race-monster/Thunder-DOR.png"
import zombie from "./../assets/race-monster/Zombie-DOR.png"
import aqua from "./../assets/race-monster/Aqua-TF06.png"
import beast from "./../assets/race-monster/Beast-TF06.png"
import beast_warrior from "./../assets/race-monster/Beast-Warrior-TF06.png"
import dinosaur from "./../assets/race-monster/Dinosaur-TF06.png"
import divine_beast from "./../assets/race-monster/Divine-Beast-TF06.png"
import dragon from "./../assets/race-monster/Dragon-race.png"
import fairy from "./../assets/race-monster/Fairy-DOR.png"
import fish from "./../assets/race-monster/Fish-DOR.png"
import fiend from "./../assets/race-monster/Fiend-DOR.png"
import machine from "./../assets/race-monster/Machine.png"
import insect from "./../assets/race-monster/Insect-DOR.png"
import pyro from "./../assets/race-monster/Pyro-DOR.png"
import psychc from "./../assets/race-monster/Psychic.png"
import rock from "./../assets/race-monster/Rock-DOR.png"
import warrior from "./../assets/race-monster/Warrior-DOR.png"
import winged_beast from "./../assets/race-monster/Winged_Beast-DOR.png"
import wyrm from "./../assets/race-monster/Wyrm-DG.png"
import plant from "./../assets/race-monster/Plant-DOR.png"
import reptile from "./../assets/race-monster/Reptile-DOR.png"

//type_card
import normalMons from "./../assets/typeCard/Normal Monster.jpg"
import effectMons from "./../assets/typeCard/Effect Monster.jpg" 
import fuzionMons from "./../assets/typeCard/Fusion Monster.jpg" 
import spellCard from "./../assets/typeCard/Spell Card.jpg" 
import sychroMons from "./../assets/typeCard/Synchro Monster.jpg" 
import xyzMons from "./../assets/typeCard/XYZ Monster.jpg" 
import linkMons from "./../assets/typeCard/Link Monster.jpg" 
import trapCard from "./../assets/typeCard/Trap Card.jpg" 

   
    function attributes_sets(attrib) {
        var attr;   
    switch (attrib) {
            case'DARK':
                attr = elemn_dark;
            break;
            case'LIGHT':
                attr = elemn_light
            break;
            case'EARTH':
                attr = elemn_earth
            break;
            case'FIRE':
                attr = elemn_fire
            break;
            case'DIVINE':
                attr = elemn_divine
            break;
            case'WATER':
                attr = elemn_water
            break;
            case'WIND':
                attr = elemn_wind
            break;
            
            default: attr = ''
        }
    
        return(attr);
    }

    function race_sets(race) {
        var monster;   
    
    switch (race) {
        case'Spellcaster': 
            monster = spellcaster;
        break;
        case'Beast':
            monster = beast
        break;
        case'Beast-Warrior':
            monster = beast_warrior
        break;
        case'Dragon':
            monster = dragon
        break;
        case'Divine-Beast':
            monster = divine_beast
        break;
        case'Dinosaur':
            monster = dinosaur
        break;
        case'Fish':
            monster = fish
        break;
        case'Fiend':
            monster = fiend
        break;
        case'Fairy':
            monster = fairy
        break;
        case'Insect':
            monster = insect
        break;
        case'Pyro':
            monster = pyro
        break;
        case'Psychic':
            monster = psychc
        break;
        case'Rock':
            monster = rock
        break;
        case'Plant':
            monster = plant
        break;
        case'Reptile':
            monster = reptile
        break;
        case'Sea Serpent':
            monster =sea_serpent
        break;
        case'Thunder':
            monster =thunder
        break;
        case'Zombie':
            monster = zombie
        break;
        case'Wyrm':
            monster = wyrm
        break;
        case'Aqua':
            monster = aqua
        break;
        case'Winged Beast':
            monster = winged_beast
        break;
        case'Warrior':
            monster = warrior
        break;
        case'Machine':
            monster = machine
        break;
        case'Cyberse':
            monster = machine
        break;
        case 'Continuous':
            monster = continuous
        break;
        case 'Counter':
            monster = counter
        break;
        case 'Equip':
            monster = equip
        break;
        case 'Field':
            monster = field
        break;
        case 'Quick-Play':
            monster = quick
        break;
        case 'Ritual':
            monster = ritual
        break;
        case 'SpliceLarge':
            monster = spliceLarge
        break;
        case 'Normal':
            monster = normal
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
        case'Trap Card':
            typeCard = trapCard
        break;
        case'Spell Card':
            typeCard = spellCard
        break;
        case'Effect Monster':
            typeCard = effectMons
        break;
        case'Fuzion Monster':
            typeCard = fuzionMons
        break;
        case'Synchro Monster':
            typeCard = sychroMons
        break;
        case'Link Monster':
            typeCard = linkMons
        break;
        case'Xyz Monster':
            typeCard = xyzMons
        break;
        
        default: typeCard = ''        
    }
        return(typeCard);
    }
    export {attributes_sets,race_sets,type_sets};