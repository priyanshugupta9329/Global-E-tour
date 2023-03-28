import React from 'react'

export default function Cards(props) {

    const img = props.im;
    const title = props.tit;
    const description = props.descr;
    const price = props.pr;
  return (
  
    <div class="card" >
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text"><h6>{price}</h6></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
   
    )
  
}
