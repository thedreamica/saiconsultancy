import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

const pages = ["Home", "Services", "Approach", "Contact Us"];

const CloseIcon = styled(CloseOutline)`
  width: 40px;
  height: 40px;
  color: #0033ff;
`;

const MenuIcon = styled(Menu)`
  width: 40px;
  height: 40px;
  color: #0033ff;
`;

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        background: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          background: "#FFFFFF",
          margin: "auto",
          width: "80%",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: "50px",
          right: "50px",
          left: "50px",
          zIndex: "2",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ margin: "0 0.75em" }}>
            <Image src="/CQupQbH.png" width={60} height={60} alt={""} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#0033FF",
                fontWeight: "700",
              }}
            >
              SAI &nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Consultancy
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <MenuItem href="/" key={page}>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "space-evenly",
                  margin: "0 1.5em",
                  borderBottom: active === index ? "5px solid #0033FF" : "none",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "context-menu",
                }}
                onClick={() => {
                  setActive(index);
                }}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              background: "#0033FF",
              ":hover": {
                background: "#0033FF",
              },
              padding: "2em ",
            }}
          >
            FREE CONSULTATION
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          display: { xs: "flex", md: " none" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.5em",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: " none" },

            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "0.25em" }}>
            <Image src="/CQupQbH.png" width={35} height={35} alt={""} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#0033FF",
                fontWeight: "700",
              }}
            >
              SAI &nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Consultancy
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            {open ? (
              <Box>
                <CloseIcon onClick={handleMenu} />
              </Box>
            ) : (
              <MenuIcon onClick={handleMenu} />
            )}
          </Box>
        </Box>
      </Box>
      {open ? (
        <Box>
          <Box
            sx={{
              background: "#000000",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={page} onClick={handleMenu} href="/">
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontWeight: "700",
                    display: "flex",
                    margin: "auto",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom:
                      active === index ? "5px solid #0033FF" : "none",
                  }}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
            <Button
              variant="contained"
              sx={{
                background: "#0033FF",
                ":hover": {
                  background: "#0033FF",
                },
                padding: "1em ",
                display: "flex",
              }}
            >
              <Typography>FREE CONSULTATION</Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
export default NavigationBar;
