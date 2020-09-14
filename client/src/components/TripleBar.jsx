import React from "react";

const Bar = ({ barObject }) => {
  const { first, second, third } = barObject;

  const total = first + second + third;

  const firstPercent = 100 * first / total + "%";
  const secondPercent = 100 * second / total + "%";
  const thirdPercent = 100 * third / total + "%";

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "25px",
        overflow: "hidden",
        height: "15px",
        /* margin: "20px 0 20px 0", */
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#1976D2",
          height: "100%",
          width: firstPercent,
        }}
      ></div>

      <div
        style={{
          display: "inline-block",
          backgroundColor: "#2196F3",
          height: "100%",
          width: secondPercent,
        }}
      ></div>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#2196F3",
          opacity: "50%",
          height: "100%",
          width: thirdPercent,
        }}
      ></div>
    </div>
  );
};
export default Bar;
