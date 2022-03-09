function api_engines(props) {
      
    var link_set;
    switch(props) {
      case 1:
        link_set = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Jinzo' //spec -card
      break;
      case 2:
      link_set = 'https://db.ygoprodeck.com/api/v7/randomcard.php' //random
      break;
    }
  return (
    link_set
  );
  }

  /*function api_link (){

    
  }*/


export {api_engines};