import { Box, Typography } from "@mui/material";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";

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
          Our Services
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "1.35rem", md: "2.25rem" },
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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: { xs: "auto", md: "0.5em 2em" },
        }}
      >
        {servicesData.map((person) => (
          <Box
            key={person.id}
            sx={{
              display: "flex",
              width: { xs: "340px", md: "305px" },
              height: { xs: "105px", md: "150px" },
              padding: "20px 10px",
              marginBottom: { xs: "0", md: "2em" },
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Image
                src={person.imageId}
                width={70}
                height={70}
                alt={"icon-desktop"}
              ></Image>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Image
                src={person.imageId}
                width={50}
                height={50}
                alt={"icon - mobile"}
              ></Image>
            </Box>
            <Box
              sx={{
                margin: {
                  xs: "0.5em 0 0.25em 1em",
                  md: "0.75em 0.25em 0.75em 0.75em",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  paddingBottom: { xs: "0.5em", md: "1em" },
                }}
              >
                {person.title}
              </Typography>
              <Typography>{person.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
