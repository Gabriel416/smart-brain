import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  const renderBoxList = () => {
    return boxes.map(box => {
      return (
        <div
          key={box.topRow}
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      );
    });
  };
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {renderBoxList()}
      </div>
    </div>
  );
};

export default FaceRecognition;
