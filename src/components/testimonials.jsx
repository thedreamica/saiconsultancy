import {
  Box,
  Button,
  Typography,
  getNativeSelectUtilityClasses,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import React from "react";
import { feedbackData } from "@/data/feedbackData";

const Testimonials = () => {
  return (
    <Carousel
      NavButton={({ onClick, style, next, prev }) => {
        return (
          <Button
            onClick={onClick}
            style={{
              position: "relative",
              top: "calc(50%) !important",
            }}
          >
            {next && (
              <Image
                src="/ZLxRoSE.png"
                width={45}
                height={20}
                alt="rightArrow"
              ></Image>
            )}
            {prev && (
              <Image
                src="/SoHeBqa.png"
                width={45}
                height={20}
                alt="leftArrow"
              ></Image>
            )}
          </Button>
        );
      }}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "transparent",
        },
      }}
      navButtonsWrapperProps={
        {
          // Move the buttons to the bottom. Unsetting top here to override default style.
        }
      }
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
    >
      {feedbackData.map((image, i) => (
        <Box
          key={i}
          sx={{
            width: "100%",
            backgroundImage: "url(/Image3.png)",
            objectFit: "contain",
            padding: "2em 0em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" },
              margin: { xs: "1em", md: "auto" },
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ marginBottom: "1em", fontWeight: "100" }}>
              OUR TESTIMONIALS
            </Typography>
            <Typography
              sx={{
                marginBottom: "1em",
                fontWeight: "700",
                fontSize: { xs: "1.75rem", md: "2rem" },
              }}
            >
              We care about your opinion
            </Typography>
            <Box sx={{ marginBottom: "1em" }}>
              <Image
                src={image.imageId}
                alt="valuesImg-desktop"
                width={80}
                height={80}
              />
            </Box>
            <Typography sx={{ margin: { xs: "2em", md: "0em 0 2em 0" } }}>
              {image.description}
            </Typography>
            <Typography
              sx={{
                marginBottom: "1em",
                color: "#FFCC00",
                fontWeight: "700",
                fontSize: { xs: "1.4rem", md: "1.4rem" },
              }}
            >
              {image.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default Testimonials;
