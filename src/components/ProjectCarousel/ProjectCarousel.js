import React from "react";
import "./ProjectCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { ContactsOutlined } from "@material-ui/icons";

export default function ProjectCarousel(props) {
  console.log(props);
  return (
    <div style={{ paddingTop: "20px", border: "solid red" }}>
      <Carousel
        showStatus={false}
        infiniteLoop
        showIndicators={true}
        showThumbs={false}
        // autoPlay={false}
        // useKeyboardArrows={true}
        // swipeable
      >
        <div>
          <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209966/Portfolio%20Pics/Happy-space/InspirationScreen_m5vfie.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209966/Portfolio%20Pics/Happy-space/InspirationScreen_m5vfie.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209966/Portfolio%20Pics/Happy-space/InspirationScreen_m5vfie.png" />
        </div>
      </Carousel>
    </div>
  );
}
// {props.images.length && (
//   <>
//     {props.images.map((image, index) => (
//       <div className="carousel__image-holder">
//         <img
//           className="carousel__image"
//           alt={`Ige${index}`}
//           key={index + image}
//           src={image}
//         />
//       </div>
//     ))}
//   </>
// )}
