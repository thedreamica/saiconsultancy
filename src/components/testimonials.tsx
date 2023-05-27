import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <Box
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
      <Button
        sx={{
          position: { xs: "absolute", md: "relative" },
          left: { xs: "85px", md: "250px" },
          top: { xs: "3190px", md: "0px" },

          cursor: "auto",
        }}
      >
        <Image src="/SoHeBqa.png" width={45} height={20} alt={""}></Image>
      </Button>
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
            src="/BrJMgKQ.png"
            alt="valuesImg-desktop"
            width={80}
            height={80}
          />
        </Box>
        <Typography sx={{ marginBottom: "2em" }}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been sad is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been sad is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been sad is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been sad
        </Typography>
        <Typography
          sx={{
            marginBottom: "1em",
            color: "#FFCC00",
            fontWeight: "700",
            fontSize: { xs: "1.4rem", md: "1.4rem" },
          }}
        >
          Sundar Raman - CEO - Zeyotech
        </Typography>
      </Box>
      <Button
        sx={{
          position: { xs: "absolute", md: "relative" },
          right: { xs: "85px", md: "250px" },
          top: { xs: "3190px", md: "0px" },
          cursor: "auto",
        }}
      >
        <Image src="/ZLxRoSE.png" width={45} height={20} alt={""}></Image>
      </Button>
    </Box>
  );
};

export default Testimonials;
