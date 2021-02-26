import React from 'react';
import coverImage from "../../assets/cover/cover-image-studio3.jpg";

function Main() {
  return (
    <section className="">
      <h1 id="main">Main panel</h1>
      <img src={coverImage} className="" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Main;