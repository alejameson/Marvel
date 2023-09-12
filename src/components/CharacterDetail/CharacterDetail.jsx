import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import { getChatacterById, getComicsChatacterById } from '../../Api';
import './CharacterDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CharacterDetail() {
  const [personaje, setPersonaje] = useState([{}]);
  const [comics, setComics] = useState([{}]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPersonaje = await getChatacterById();
        const dataComics = await getComicsChatacterById();
        /* console.log(dataPersonaje); */
        setPersonaje(dataPersonaje);
        console.log(dataComics);
        setComics(dataComics);
      } catch (error) {
        console.error('Error en el llamado', error);
      }
    };
    fetchData();
  }, []);
  // Verificamos si personaje[0].thumbnail está definido antes de acceder a su propiedad extension
  const thumbnailSrc = personaje[0]?.thumbnail
    ? personaje[0].thumbnail.extension === 'jpg'
      ? personaje[0].thumbnail.path + '.jpg'
      : personaje[0].thumbnail.path + '.gif'
    : '';

  return (
    <div className='container'>
      {personaje.length ? (
        <Container sx={{maxWidth:'xl'}}>
            <Grid sx={{mt:20}} container columnSpacing={2}>
                <Grid item xs={5}>
                   <Typography variant="h4" gutterBottom fontWeight="bold">
                        {personaje[0].name}
                   </Typography>
                   <Typography variant="h6" gutterBottom>
                        {personaje[0].description}
                   </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={thumbnailSrc} style={{width:"100%", borderRadius:"1em"}} alt="Character" />
                </Grid>             
            </Grid>

         {/* Carousel */}

         <Slider {...settings}>
        {comics?.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={thumbnailSrc}           
                alt="comic"
              />
              <h1>{comics.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{comics.title}</h3>
              <span className="category">{comics.title}</span>
            </div>
          </div>
        ))}
      </Slider>

        </Container>
      ) : (
        <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
            <CircularProgress/>    
        </Box>
      )}
    </div>
  );
}

export default CharacterDetail;