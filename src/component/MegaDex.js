import React, {useState,useEffect} from 'react';
import PkmCard from './PkmCard';
import '../style.css'
import axios from 'axios';

import { InputGroup, Form, Card, Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MegaDex = (  ) => {
    const [pmkData, setpmkData] = useState([])
    const [search, setSearch] = useState("");
    const [initialUrl, setInitialUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    const [nextPkmURl, setNextPkmURl] = useState()
    const [previusPkmURl, setPreviusPkmURl] = useState()
    const [loading, setLoading] = useState(true)
    const [detailedPkmn, setDetailedPkmn] = useState()
    const [allPkmns, setAllPkmns] = useState([]);

    
    const deployPokemon = async() => {
        setLoading(false);
        
        const res = await axios.get(initialUrl);
        setNextPkmURl(res.data.next);
        setPreviusPkmURl(res.data.previous);
        getPkmn(res.data.results);
        setLoading(false);
    };  
    
    
    
    const  getPkmn = async(res) => {
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            setpmkData(state=>{
                state=[...state,result.data];
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
            setAllPkmns(state=>{
                state=[...state,result.data];
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }
    
    const previusData = () =>{
        setpmkData([]);
        setInitialUrl(previusPkmURl) ;
    }
    
    const nextData = () => {
        setpmkData([])
        setInitialUrl(nextPkmURl)
    }
    
    useEffect(() => {
        deployPokemon();
    }, [initialUrl])
    
    return(
        <div className='mainContainer'>
            <div className='searchBarContainer'>
                <div className='searchAndBtnsContainer'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Search Pokemon</InputGroup.Text>
                        <Form.Control onChange={event=>{setSearch(event.target.value)}} className='searchBar' aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </InputGroup>
            
                    {
                        previusPkmURl && <Button className='paginationBtns' onClick={previusData}>Previous</Button>
                    }
                    {
                        nextPkmURl && <Button className='paginationBtns' onClick={nextData}>Next</Button>
                    }
                </div>
            
            </div>
            <div className='secondContainer'>
                <div className='secondRow'>
                    <PkmCard loading={loading} pokemon={detailedPkmn}/>
                </div>
                <div className='firstRow'>
                    <Card className='pkmCenter'>
                        {/* <button className='fetchBtn' onClick={deployPokemon}>FETCH POKEMON</button> */}
                        { pmkData.filter((val)=>{
                            if (search === " " ){
                                return val
                            }else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.types[0].type.name.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                        }).map((item, index)=>{ 
                            return(
                                <Row className='cardPkm' key={index} onClick={()=>setDetailedPkmn(item)}>
                                    
                                        <Col className='firstBlock'>
                                            <Card.Title className='pkmTitle'>{item.name}</Card.Title>
                                            <Card.Img className='pkmImg'  alt='Pokemon Image' src={item.sprites.front_default}/>
                                            
                                        </Col>
                                        
                                        <Col className='secondBlock'>
                                            <Card.Text variant="primary" className='pkmInfo'><span className='subTitles' >id #:</span> {item.id}</Card.Text>
                                        </Col>
                                </Row>
                            )}
                        )} 
                    </Card>
                </div>
                
                
            </div>
            
        </div>
    )
}
export default MegaDex;

