import React from "react";
import Title from "./title";
import SubTitle from "./subTitle";
import Button from "./link";
const HeaderSection = ({ title, subtitle, href }) => {
  return (
    <div className="header-section">
      <div className="left-header">
        <Title text={title} />
        <SubTitle text={subtitle} />
      </div>
      <div className="right-header">
        <Button href={href} text={'Lihat Selengkapnya'}/>
      </div>
    </div>
  );
};

export default HeaderSection;
