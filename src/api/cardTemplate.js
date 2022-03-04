
    function cardTemplate() {

        const dataCard = {data:[{
            id: 0,
            name: "",
            type: "",
            desc: "",
            atk: 0,
            def: 0,
            level: 0,
            race: "",
            attribute: "",
            archetype: "",
            card_sets: [
              {
                set_name: "",
                set_code: "",
                set_rarity: "",
                set_rarity_code: "",
                set_price: 0  ,
              },
              {
                set_name: "",
                set_code: "",
                set_rarity: "",
                set_rarity_code: "",
                set_price: 0,
              },
              {
                set_name:"",
                set_code: "",
                set_rarity: "",
                set_rarity_code: "",
                set_price: 0,
              }
            ],
            card_images: [
              {
                id: 0,
                image_url:"",
                image_url_small: "",
                }
                ]
              }
           ]}
        return (
            dataCard
        );
    }

   
    export {cardTemplate};