import React from "react";
import {
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography,
    Box
} from '@mui/material';
import { Link } from "react-router-dom";

function CardCharacter({id, name, description, img}) {
    const descriptionResume = description.length < 160 ? description : description.slice(1,160) + "..."
    return (
        <Card sx={{ maxWidth: 345, height: 500, bgcolor:"rgb(237, 29, 36)"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={img}
            />
            <CardContent sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                    { description !== '' ? descriptionResume : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum exercitationem iste autem velit nulla assumenda est a veritatis, repudiandae nesciunt modi."
                    }
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <CardActions>
                        <Link to={`/characterDetail/${id}`}><Button variant="contained" color="error" sx={{bgcolor:"black"}}>Learn More</Button></Link>
                    </CardActions>
                </Box> 
            </CardContent>
        </Card>
    )
}

export default CardCharacter;