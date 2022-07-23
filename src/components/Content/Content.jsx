import React from "react";
import Aside from "./Aside/Aside.jsx";
import Boxs from "./Boxs/Boxs.jsx";

const styles = {
  wrapper: {
    display: "flex",
    padding: "40px 0"
  }
};

const Content = () => {
  const renderBoxs = [
    {
      id: "one",
      height: "200px",
      backgroundColor: "green",
      text: "Контент 1",
      padding: "20px",
      xs: "12",
      md: "6",
      lg: "7",
      marginRight: "20px"
    },{
      id: "two",
      height: "200px",
      backgroundColor: "blue",
      text: "Контент 2",
      padding: "20px",
      xs: "12",
      md: "6",
      lg: "5"
    },{
      id: "three",
      height: "200px",
      backgroundColor: "pink",
      text: "Контент 2",
      padding: "40px",
      xs: "12",
      md: "12",
      lg: "12"
    }
  ];
  return (
    <div style={styles.wrapper}>
      <Aside />
      <Boxs renderBoxs={renderBoxs} />
    </div>
  );
};

export default Content;
