import "./Card.css";
import  React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from "react";


const TvSeries = ({ TvSeries }) => {

  const [search, setSearch] = useState("")

  
  return (
  
    <div className="main" >

      <input id="input-search" className="basic-form-field cursor-center"  type="text" placeholder="Search here"
        onChange={(event) => {
          setSearch(event.target.value)
        }
        }
      />
      <div  className="Card-Hori">
      {


        TvSeries.filter((TvSeriestitle) => {
          if (search === " ") {
            return TvSeriestitle;
          }
          else if (TvSeriestitle.title.toLowerCase().includes(search.toLowerCase())) {
          
            return TvSeriestitle;
          }


      //  return (<div></div>)
        }).map((tvelement) => {

          return (
            <Card  className="Mcard" sx={{ maxWidth: 345 }}>
              <CardHeader
                title={tvelement.title}

              />


              <CardMedia
                component="img"
                height="194"
                image={tvelement.image_url}
                alt="Loading...."
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <p>{tvelement.synopsis}</p>
                  <h5>{tvelement.start_date}</h5>
                  <h5>{tvelement.end_date}</h5>


                </Typography>
              </CardContent>

            </Card>

          )

        })}

</div>
</div>

  )
}



export default TvSeries;













