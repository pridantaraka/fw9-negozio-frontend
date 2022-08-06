import React,{Fragment} from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-elastic-carousel'

import tshirt from '../../../assets/images/tshirt.png'
import short from '../../../assets/images/short.png'
import jacket from '../../../assets/images/jacket.png'
import pants from '../../../assets/images/pants.png'
import socks from '../../../assets/images/socks.png'
import tie from '../../../assets/images/tie.png'
import heels from '../../../assets/images/high-heels.png'
import accesories from '../../../assets/images/accesorries.png'

import "./category.css"



const Category = ()=>{
    const navigate = useNavigate();
  return (
    <Fragment>
      <Carousel itemsToShow={4}>
        <img
          onClick={() => navigate("/main/category/T-shirt")}
          className="img-category"
          src={tshirt}
          alt="T-shirt"
        />
        <img
          onClick={() => navigate("/main/category/Short")}
          className="img-category"
          src={short}
          alt="Short"
        />
        <img
          onClick={() => navigate("/main/category/Jacket")}
          className="img-category"
          src={jacket}
          alt="Jacket"
        />
        <img
          onClick={() => navigate("/main/category/Pants")}
          className="img-category"
          src={pants}
          alt="Pants"
        />
        <img className="img-category" src={socks} alt="socks" />
        <img className="img-category" src={tie} alt="Tie" />
        <img className="img-category" src={heels} alt="Heels" />
        <img className="img-category" src={accesories} alt="Accesories" />
      </Carousel>
    </Fragment>
  );
};


export default Category