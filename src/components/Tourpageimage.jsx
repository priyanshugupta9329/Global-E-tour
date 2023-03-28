
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Allimage = [
  { url: "https://memes.co.in/wallpapers/uploads/1625904063.jpg" },
  { url: "https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" },
  { url: "https://images.thrillophilia.com/image/upload/s--gptd7azP--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/012/900/original/1551428022_alleppeyPlaces_feature.png.jpg?1551428022" },
  { url: "https://images.pexels.com/photos/895254/pexels-photo-895254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { url: "https://memes.co.in/wallpapers/uploads/1625904105.jpg" },
  { url: "https://dzt53h2bjh4s.cloudfront.net/wp-content/uploads/2017/05/20115738/Eiffel-Tower-Skyline-World-Travel-Wallpaper-HD-Images-Free-Download-7829809928.jpg" },
 
];

const Tourpageimage = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1100}
        height={450}
        images={Allimage}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
    </div>
  );
}

export default Tourpageimage;