import { Button, Typography, Box, TextField, Link } from "@mui/material";
import styled from "styled-components";
import { ArrowUpRight } from "@styled-icons/bootstrap/ArrowUpRight";

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

const ContactUs = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "url(/contact-bg.png)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: "2em 0",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "auto",
            md: "100%",
          },
          padding: { xs: "0.5em", md: "0" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            width: { xs: "100%", md: "70%" },
            gridTemplateColumns: { xs: "auto", md: "auto auto" },
            gap: "3.5em",
            margin: { xs: "auto", md: "5em auto 2em auto" },
          }}
        >
          <TextField
            label="Name"
            variant="standard"
            sx={{ borderBottom: "1px solid black" }}
          />
          <TextField
            label="Email"
            variant="standard"
            sx={{ borderBottom: "1px solid black" }}
          />
          <TextField
            label="Phone"
            variant="standard"
            sx={{ borderBottom: "1px solid black" }}
          />
          <TextField
            label="Subject"
            variant="standard"
            sx={{ borderBottom: "1px solid black" }}
          />
          <TextField
            sx={{
              width: {
                xs: "auto",
                md: "215%",
              },
              borderBottom: "1px solid black",
            }}
            label="Message"
            multiline
            variant="standard"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            margin: { xs: "2em 0", md: "auto" },
          }}
        >
          <Button
            sx={{
              boxSizing: "border-box",
              color: "#FFFFFF",
              textTransform: "uppercase",
              padding: "5px 15px 5px 25px",
              background: "#0033FF",
              ":hover": {
                background: "#0033FF",
              },
            }}
          >
            send message
            <RightArrow />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ padding: { xs: "0.5em", md: "0" } }}>
          <Typography sx={{ fontSize: { xs: "1.75em", md: "15px" } }}>
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.75em", md: "2em" },
              color: "#000000",
              fontWeight: "700",
              margin: "0.4em 2.5em 0.4em 0",
            }}
          >
            Feel Free to reach out to us anytime
          </Typography>
        </Box>
        <Box sx={{ padding: { xs: "0.5em", md: "0" } }}>
          <Typography sx={{ fontSize: { xs: "1.75em", md: "15px" } }}>
            Email Us
          </Typography>
          <Link underline="none" href="mailto:support@saiconsultancy.in">
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "30px" },
                color: "#000000",
                fontWeight: "700",
              }}
            >
              support@saiconsultancy.in
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
