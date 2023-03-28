import React, { useState } from 'react'
import Cards from '../components/Cards';
import NavbarComp from '../components/Navbar';
import TextScroller from '../components/TextScroller';
import Topimage from '../components/Topimage';
import { Grid, makeStyles } from '@material-ui/core';
import tourdetails from '../services/tourdetails';
import Footer from '../components/Footer';


const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "50px",
      paddingRight: "50px"
    }
})

export default function Home() {

  const data = tourdetails();

  const classes = useStyles();

  // const [contact, setContact] = useState();
 
  return (
    <div>
       <div>
            <Topimage />
        </div>
        <div>
          <NavbarComp />
        </div>
        
        <div>
          <TextScroller />
        </div>

        <h3 className='my-3 pt-5'>Our Packages and Places</h3>
        <div>
          <Grid container spacing={4} className={classes.gridContainer}>
          {data.map((data, id)=>(
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Cards im={data.image} tit={data.title} descr={data.description} pr={data.price} />
              </Grid>
          ))
          }
          </Grid>
        </div>
        
        {/* <div className='my-1 pt-5'>
          {contact}
        </div> */}

        <div className='my-2 pt-3'>
          <Footer />
        </div>
    </div>
  )
}
