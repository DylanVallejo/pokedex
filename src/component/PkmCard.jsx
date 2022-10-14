
const PkmCard =  ({pokemon}) =>{
    return(
        <>
            {
                (!pokemon) ? "" : (  
                <div className='Carta'>
                    <div className='cartaContainer'>
                        <h3 >{pokemon.name}</h3>
                        <img  alt='Pokemon' className='cardImg' src={pokemon.sprites.front_default}/> 
                        <div> 
                            <div className="statistics">
                                <h2>Abilities</h2>
                                {
                                    pokemon.abilities.map((pkmAbilities,key )=>{
                                        return(
                                            <span key={key}>{pkmAbilities.ability.name}<br/></span> 
                                        )
                                    })
                                }
                            </div>
                            <div className="statistics">
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
                            <div className="statistics">
                                <h2>Stats</h2>
                                {
                                    pokemon.stats.map((stats, key )=>{
                                        return(
                                            <span key={key}>
                                                {stats.stat.name} {stats.base_stat}<br/>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>    
                </div>
            )
            }
        </>
    )
    
}
export default PkmCard;