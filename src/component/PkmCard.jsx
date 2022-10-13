// import { InputGroup, Form, Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

const PkmCard =  ({pokemon}) =>{
    console.log('cardeleemtn')
    console.log( pokemon) 
    return(
        <>
            {
                (!pokemon) ? "" : (  
                <div className='Carta'>
                    {/* <Row className='soloPkmInfo'> */}
                    <div className='cartaContainer'>
                        <h3 >{pokemon.name}</h3>
                        <img  alt='Pokemon' className='cardImg' src={pokemon.sprites.front_default}/> 
                        <div> 
                            <h2>Abilities</h2>
                            {
                                pokemon.abilities.map((pkmAbilities,key )=>{
                                    return(
                                        <span key={key}>{pkmAbilities.ability.name}<br/></span> 
                                    )
                                })
                            }
                                <h2> Types: </h2>
                            {
                                pokemon.types.map((type,key)=>{
                                    return(
                    
                                            <span key={key}>
                                                {type.type.name}<br/>
                                            </span>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>    
                    {/* </Row> */}
                </div>
            )
            }
        </>
    )
    
}
export default PkmCard;