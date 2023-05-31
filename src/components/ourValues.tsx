import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";

const OurValues = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        margin: "auto",
        padding: "2em 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ marginLeft: { xs: "0.75em", md: "none" } }}>
        <Typography sx={{ fontSize: "0.9rem", marginBottom: "0.75em" }}>
          Who We Are
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "1.5rem", md: "2.25rem" },
            fontWeight: "700",
            lineHeight: "1.25em",
            width: { xs: "100%", md: "50%" },
          }}
        >
          Empowering Your Business to Reach Its Full Potential
        </Typography>
        <Divider
          sx={{
            width: "6em",
            borderBottom: "0.25em solid #0033FF",
            margin: { xs: "1em 0 1em 0", md: "2em 0 2em 0" },
          }}
        ></Divider>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Image
            src="/goBhDIq.png"
            alt="valuesImg-desktop"
            width={500}
            height={330}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            display: {
              xs: "flex",
              md: "none",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/goBhDIq.png"
            alt="valuesImg-desktop"
            width={415}
            height={360}
          />
        </Box>

        <Box sx={{}}>
          <Typography
            sx={{
              margin: { xs: "2em 1em 1em 1.25em", md: "0.25em 2em 2em 2em" },
              fontSize: "0.9rem",
              order: "2",
            }}
          >
            At SAI Consultancy, we are committed to helping businesses of all
            sizes and across different industries achieve their goals and
            overcome their challenges. Our team of experienced consultants
            brings together a wealth of expertise and knowledge to you.
          </Typography>
          <Typography
            sx={{
              margin: { xs: "1em 1em 1em 1.25em", md: "0 2em 2em 2em" },
              background: "#F0F3FF",
              borderLeft: "0.5em solid #0033FF",
              padding: "2em",
              fontSize: "0.9rem",
              order: "1",
            }}
          >
            We pride ourselves on building lasting partnerships with our clients
            and working collaboratively to achieve their goals.
          </Typography>
          <Typography
            sx={{
              margin: { xs: "1em 1em 0 1.25em", md: "2em 1em 0 2em" },
              fontSize: "0.9rem",
              order: "0",
            }}
          >
            Whether you need help with strategy, management consulting,
            operations consulting, human resources consulting, financial
            consulting, IT services etc., We have the expertise you need.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurValues;
