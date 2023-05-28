import { SetStateAction, useEffect, useState } from "react";
import { carouselData } from "@/data/carouselData";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { GreaterThan } from "@styled-icons/fa-solid/GreaterThan";
import { LessThan } from "@styled-icons/fa-solid/LessThan";
import { Circle } from "@styled-icons/fluentui-system-filled/Circle";
import styled from "styled-components";

const NextButton = styled(GreaterThan)`
  box-sizing: border-box;
  background: blue;
  color: white;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 100%;
  display: flex;
`;

const PrevButton = styled(LessThan)`
  box-sizing: border-box;
  background: blue;
  color: white;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 100%;
  display: flex;
`;

const CircleIcon = styled(Circle)`
  width: 20px;
  height: 20px;
`;
const HeroSection = () => {
  const [prevButton, setPrevButton] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  const hasNext = prevButton < carouselData.length - 1;

  function handleClick() {
    if (hasNext) {
      setPrevButton(prevButton + 1);
    } else {
      setPrevButton(0);
    }
  }

  let Data = carouselData[prevButton];
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "50%", display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                position: "relative",
                left: "0",
                top: "0",
                zIndex: "2",
                objectFit: "cover",
              }}
              src={Data.imageId}
              width={700}
              height={700}
              alt="image"
            ></Image>
          </Box>
        </Box>
        <Button
          style={{
            position: "absolute",
            bottom: "350px",
            zIndex: "2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClick}
        >
          <PrevButton />
        </Button>
        <Box
          sx={{
            background: "#C3CFFF",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 30px 50px 50px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "4em",
                fontWeight: "700",
                lineHeight: "4.5rem",
              }}
            >
              {Data.title}
            </Typography>
            <Typography sx={{ fontSize: "1.5rem" }}>
              {Data.description}
            </Typography>
          </Box>
          <Box>
            <Button onClick={handleClick}>
              <NextButton />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        {carouselData.map((dot, index) => (
          <Box key={dot.id} onClick={() => handleDotClick(index)}>
            <CircleIcon
              style={{
                color: activeIndex === index ? "#FFCC00" : "black",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
