import { carouselData } from "@/data/carouselData";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { ArrowUpRight } from "@styled-icons/bootstrap/ArrowUpRight";
import styled from "styled-components";
import NavigationBar from "./navigation";

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

const HeroSection = () => {
  return (
    <Box>
      <NavigationBar />
      <Carousel
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "#0033FF",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: "3px",
            color: "#C3CFFF", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#0033FF", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            position: "relative",
            bottom: "50px",
            zIndex: 2,
            textAlign: "center", // 4
          },
        }}
      >
        {carouselData.map((image, i) => (
          <Box key={i}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%", display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={image.imageId}
                    width={700}
                    height={700}
                    alt="image"
                  ></Image>
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={image.imageId}
                    width={320}
                    height={445}
                    alt="image"
                  ></Image>
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    position: "absolute",
                    zIndex: "2",
                    flexDirection: "column",
                    textAlign: "center",
                    margin: "10em 0.25em",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.75em",
                        fontWeight: "700",
                        color: "#FFFFFF",
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {image.description}
                    </Typography>
                    <Button
                      sx={{
                        boxSizing: "border-box",
                        color: "#FFFFFF",
                        textTransform: "capitalize",
                        margin: "2em 0",
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
              </Box>

              <Box
                sx={{
                  background: "#E4E9FF",
                  display: { xs: "none", md: "flex" },
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
                    {image.title}
                  </Typography>
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {image.description}
                  </Typography>

                  <Button
                    sx={{
                      boxSizing: "border-box",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      margin: "2em 0",
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
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;
