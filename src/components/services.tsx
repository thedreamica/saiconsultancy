import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { LightBulb } from "@styled-icons/heroicons-solid/LightBulb";

const RedZap = styled(LightBulb)`
  color: #0033ff;
  height: 80px;
  width: 80px;
`;

export const ServicesCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "288px", md: "300px" },
        height: { xs: "85px", md: "85px" },
        padding: "50px 10px",
        marginBottom: { xs: "0", md: "2em" },
        boxShadow: "0px 4px 4px 0px #00000040",
        borderRadius: "none",
      }}
    >
      <Box>
        <RedZap />
      </Box>
      <Box sx={{ margin: { xs: "auto", md: "0.25em" } }}>
        <Typography
          sx={{ fontWeight: "700", paddingBottom: { xs: "0.5em", md: "1em" } }}
        >
          Placement
        </Typography>
        <Typography>
          Assistance for connecting qualified candidates with top companies
        </Typography>
      </Box>
    </Box>
  );
};

const Services = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        margin: "auto",
        padding: "2em 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginLeft: { xs: "0.75em", md: "none" } }}>
        <Typography sx={{ fontSize: "0.9rem", marginBottom: "0.75em" }}>
          OUR SERVICES
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "1rem", md: "2.25rem" },
            fontWeight: "700",
            lineHeight: "1.25em",
            width: { xs: "100%", md: "60%" },
          }}
        >
          Best Consulting Services Tailored to Your Business Needs
        </Typography>
        <Typography
          sx={{
            width: "6em",
            borderBottom: "0.25em solid #0033FF",
            margin: { xs: "1em 0 1em 0", md: "2em 0 2em 0" },
          }}
        ></Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row " },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: { xs: "auto", md: "0.5em 2em" },
        }}
      >
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </Box>
    </Box>
  );
};

export default Services;
