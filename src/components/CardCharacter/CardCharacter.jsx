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

function CardCharacter({name, description, img}) {
    const descriptionResume = description.length < 160 ? description : description.slice(1,160) + "..."
    return (
        <Card sx={{ maxWidth: 345, height: 500, backgroundImage: 'linear-gradient(90deg, rgba(171,16,16,1) 30%, rgba(2,0,36,1) 48%, rgba(255,0,50,1) 100%)' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                    { description !== '' ? descriptionResume : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum exercitationem iste autem velit nulla assumenda est a veritatis, repudiandae nesciunt modi."
                    }
                </Typography>
            </CardContent>
            <Box sx={{display: "flex", justifyContent: "center", }}>
            <CardActions>
                <Button variant="contained" color="error" sx={{bgcolor:"black"}}>Learn More</Button>
            </CardActions>
            </Box>
        </Card>
    )
}

export default CardCharacter;