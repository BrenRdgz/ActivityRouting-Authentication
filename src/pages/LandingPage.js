import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function LandingPage(){
    return(
      <>
      <div>
        <h1>Welcome to my blog</h1>
      </div>
      <ImageList cols={3} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
    )
};

const itemData = [
  {
    img: 'https://www.barcelo.com/pinandtravel/wp-content/uploads/2021/09/playas-de-oman.jpg',
    title: 'Oman',
  },
  {
    img: 'https://www.barcelo.com/pinandtravel/wp-content/uploads/2020/01/viajar-solo-e1601990293690.jpg',
    title: 'Dubai',
  },
  {
    img: 'https://www.barcelo.com/pinandtravel/wp-content/uploads/2020/01/viajes-semana-santa-2020-e1601990318474.jpg',
    title: 'Tunez',
  },
  {
    img: 'https://www.barcelo.com/pinandtravel/wp-content/uploads/2020/01/viajes-luna-de-miel-2020-e1601990342633.jpg',
    title: 'Maldivas',
  },
  {
    img: 'https://www.viajes-carrefour.com/blog/wp-content/uploads/2018/05/turismo-rural-mascotas.jpg',
    title: 'Montaña',
  },
  {
    img: 'https://www.massaudubon.org/var/ezdemo_site/storage/images/media/departments/tours-and-travel/images/mass-audubon-2015-trip-to-denali-alaska-1140/303553-2-eng-US/mass-audubon-2015-trip-to-denali-alaska-1140_bannerbackground.jpg',
    title: 'Team',
  }
];
export default LandingPage;