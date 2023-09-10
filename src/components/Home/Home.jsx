import React, { useEffect, useState } from 'react';
import { getChatacters } from '../../Api';
import { Box, Grid } from '@mui/material';
import CardCharacter from '../CardCharacter/CardCharacter';

function Home() {
    const [personajes, setPërsonajes] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getChatacters();/* axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=212dbf5bfa695f13238bdf8e94da92db&hash=2c49771beaf98b9400f980fc76ff3853") */;
                console.log(data);
                setPërsonajes(data)
            } catch (error) {
                console.error('Error en el llamado', error);
            }
        };
        fetchData();
    }, [])
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"/* , flexDirection: "column", padding: 5 */}}>
                {personajes.length ?
                    personajes.map(c =>
                        <Box sx={{padding: 5}}>
                            <CardCharacter
                                key={c.id}
                                name={c.name}
                                description={c.description}
                                img={c.thumbnail.extension === "jpg" ? c.thumbnail.path + ".jpg" : c.thumbnail.path + ".gif"}
                            />
                        </Box>
                    )
                :
                <div>
                    Cargando
                </div>
                }   
            </Box>
        </Box>
    )
}

{/* <div>
            {personajes.length ? 
                personajes.map(c => <CardCharacter
                    key={c.id}
                    name={c.name}
                    img={c.thumbnail.path + ".jpg"}

                  /> )
                :
                <div>
                    Home
                </div>
            }
        </div> */}

export default Home;