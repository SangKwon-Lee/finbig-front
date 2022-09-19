import { useState } from "react";
import { BestDataImg, BestDataTitle, BestDataWrapper } from "./Home.style";

const HomeBestContainer = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <BestDataWrapper
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <BestDataTitle style={{ display: isHover ? "flex" : "none" }}>
        {props.data.title}
      </BestDataTitle>
      <BestDataImg
        src={props.data.thumbnail}
        onClick={() => {
          props.onClickCard(props.data.id);
        }}
      />
    </BestDataWrapper>
  );
};

export default HomeBestContainer;
