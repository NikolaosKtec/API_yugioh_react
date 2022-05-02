function api_engines(props) {
      
    var link_set;
    switch(props) {
      case 1:
        link_set = 'https://db.ygoprodeck.com/api/v7/randomcard.php' //random
      break;
      case 2:
      link_set = 'https://db.ygoprodeck.com/api/v7/'+
      'cardinfo.php?name=Exodia%20the%20Forbidden%20One' //params
      break;
    }
  return (
    link_set
  );
  }

  /*function api_link (){

    
  }*/


export {api_engines};