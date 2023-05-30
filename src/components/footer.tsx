import { Box, Divider, Link, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ background: "#FFFFFF" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-evenly" },
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: { xs: "column", md: "row" },
          padding: "3em 0",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", marginBottom: "1.5em" }}
        >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center" },
            alignItems: { xs: "center", md: "flex-start" },
            marginBottom: "1em",
          }}
        >
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center" },
              alignItems: { xs: "center", md: "flex-start" },
              marginBottom: "1em",
            }}
          >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center" },
            alignItems: { xs: "center", md: "flex-start" },
            marginBottom: "1em",
          }}
        >
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
                  fontSize: { xs: "1.2em", md: "1.4rem" },
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
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          padding: { xs: "1em", md: "1em 8em" },
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: { xs: "0.75rem", md: "1rem" },
          }}
        >
          © Copyright 2023&nbsp;
        </Typography>{" "}
        <Typography
          sx={{
            color: "#0033FF",
            fontWeight: "700",
            fontSize: { xs: "0.75rem", md: "1rem" },
          }}
        >
          Sai Consultancy.&nbsp;
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
          All Rights reserved by Hyge
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
