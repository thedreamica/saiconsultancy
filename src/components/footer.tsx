import { Box, Divider, Link, Typography } from "@mui/material";
import Image from "next/image";
import { LineHeight } from "styled-icons/remix-editor";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-evenly" },
          flexDirection: { xs: "column", md: "row" },
          padding: "3em 0",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Image
              src="/RQxTq6Y.png"
              width={50}
              height={50}
              alt="footer-logo"
            ></Image>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1em",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ fontSize: "1.5rem", color: "#0033FF", fontWeight: "700" }}
              >
                SAI &nbsp;
              </Typography>
              <Typography
                sx={{ fontSize: "1.5rem", color: "#000000", fontWeight: "700" }}
              >
                Consultancy
              </Typography>
            </Box>
            <Box
              sx={{
                fontSize: "1rem",
                color: "#000000",
              }}
            >
              <Typography>We Catalyze your Growth</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "700", fontSize: "1.4rem" }}>
            Services
          </Typography>
          <Divider
            sx={{
              width: "2em",
              marginBottom: "1em",
              border: "0.1em solid #0033FF",
            }}
          ></Divider>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link
              sx={{ marginBottom: "1em", color: "#000000", fontSize: "1rem" }}
              underline="none"
              href="/"
            >
              <Typography>Strategy Consulting</Typography>
            </Link>
            <Link
              underline="none"
              sx={{ marginBottom: "1em", color: "#000000", fontSize: "1rem" }}
              href="/"
            >
              <Typography>Managment Consulting</Typography>
            </Link>
            <Link
              underline="none"
              sx={{ marginBottom: "1em", color: "#000000", fontSize: "1rem" }}
              href="/"
            >
              <Typography>Operations Consulting</Typography>
            </Link>
            <Link
              underline="none"
              sx={{ marginBottom: "1em", color: "#000000", fontSize: "1rem" }}
              href="/"
            >
              <Typography>Financial Consulting</Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "700", fontSize: "1.4rem" }}>
            Get In Touch
          </Typography>
          <Divider
            sx={{
              width: "2em",
              marginBottom: "1em",
              border: "0.1em solid #0033FF",
            }}
          ></Divider>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link underline="none" href="mailto:support@saiconsultancy.in">
              <Typography
                sx={{
                  marginBottom: "1em",
                  color: "#000000",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                }}
              >
                support@saiconsultancy.in
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography>
              No. 1, JB Complex, 1<sup>st</sup> floor, Iyankulam,
              <br /> Paruthipattu, Avadi, Chennai - 600071.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "1em", md: "1em 8em" },
        }}
      >
        <Typography sx={{ color: "#000000", fontWeight: "700" }}>
          © Copyright 2023&nbsp;
        </Typography>{" "}
        <Typography sx={{ color: "#0033FF", fontWeight: "700" }}>
          Sai Consultancy.&nbsp;
        </Typography>
        <Typography>All Rights reserved by Hyge</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
