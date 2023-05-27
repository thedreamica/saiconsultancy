import { carouselData } from "@/data/carouselData";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { ArrowUpRight } from "@styled-icons/bootstrap/ArrowUpRight";
import { useState, useEffect } from "react";

const RightArrow = styled(ArrowUpRight)`
  color: #ffffff;
  height: 25px;
  width: 20px;
  padding: 5px 15px;
  transition: rotate 1s;
  &:hover {
    rotate: 45deg;
  }
`;

export const HeroSection = () => {
  const [data] = useState(carouselData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    const sliderTiming = setInterval(() => {
      setIndex(index + 1);
    }, 4000);

    return;
    () => clearInterval(sliderTiming);
  }, [index]);

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        {data.map((item, newIndex) => {
          const { id, title, description, image } = item;
          return (
            <Box key={id} sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%" }}>
                <Image
                  src={image}
                  width={700}
                  height={700}
                  alt="heroImge1"
                ></Image>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "4em",
                    fontWeight: "700",
                    lineHeight: "4.5rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{ fontSize: "1.5rem", margin: "1em 5em 1em 0" }}
                >
                  {description}
                </Typography>
                <Button
                  sx={{
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    padding: "5px 15px 5px 25px",
                    background: "#0033FF",
                    ":hover": {
                      background: "#0033FF",
                    },
                  }}
                >
                  Discover More
                  <RightArrow />
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HeroSection;
