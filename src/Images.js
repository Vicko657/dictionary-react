import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="third-column col-3">
        {props.photos.map(function (photo, index) {
          if (index < 2) {
            return (
              <img
                className="word-img img-fluid d-none d-lg-block"
                key={index}
                src={photo.src.landscape}
                alt={photo.alt}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
