// import React, {  useState } from 'react';
// import axios from 'axios';

// const NewDex = () => {
//     const axios = require('axios').default;
// //     const api =axios.create({
// //         baseURL: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1130`
// //     })

//     // const axios = require('axios');


            
//     const [pokeaxis, setPokemon] = useState([]);
//     // useEffect(()=>{
//     //     axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1130')
//     //     .then(response=>{setPokemon(response.data)})  
    
//     // }, []); 


//     // const DeployDex = () =>{
//         // Hacer una petición para un usuario con ID especifico
//         axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1130')
//         .then(response=> {
//             // manejar respuesta exitosa
//             console.log(response);
//             console.log(setPokemon);
//         setPokemon({pokemon: response.data.result})})
        
            
//         .catch(error=> {
//             // manejar error
//             console.log(error);})
//         // .then( response=> {
//         //     // siempre sera executado
//         //     })

//     // }


//     return(
//         <div>
//             <button>Fetch pokemon</button>
//             {pokeaxis}
//             {/* {pokeaxis.pokemon  ? pokeaxis.pokemon.map ((item, index)=>{ 
//                 return(<div key={index}>{item.name}</div> )}
//             ):[]}  */}
//         </div>
//     )
// }


// export default NewDex;