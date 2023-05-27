import { Box, Typography } from "@mui/material";
import approachData from "../data/approachData";
import { useState } from "react";
import Image from "next/image";
import React from "react";

export const OurApproachCard = (step: any, i: any) => {
  const [active, setActive] = useState(false);

  return (
    <Box>
      <Box>
        <Box key={i}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              onClick={() => {
                console.log("click");
                setActive(!active);
              }}
            >
              {step.title}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={step.image}
              width={700}
              height={240}
              alt="test1"
            ></Image>
          </Box>
          <Box sx={{ width: "70%", padding: "1.5em" }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "700",
                marginBottom: "0.75em",
              }}
            >
              {step.title}
            </Typography>
            <Typography>{step.description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const OurApproach = () => {
  return (
    <Box>
      {approachData.map((i) => (
        <OurApproachCard key={i} />
      ))}
    </Box>
  );
};

export default OurApproach;
