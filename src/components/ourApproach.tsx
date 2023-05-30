import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import approachData from "@/data/approachData";
import { Button, ListItem, Typography, Divider } from "@mui/material";
import Image from "next/image";

const OurApproach = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  const handleTabClick = (e: {
    target: { id: React.SetStateAction<number> };
  }) => {
    setCurrentTab(e.target.id);
  };

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
          Our Approach
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "1rem", md: "2.25rem" },
            fontWeight: "700",
            lineHeight: "1.25em",
            width: { xs: "100%", md: "40%" },
          }}
        >
          Doing the Right Thing, at the Right Time.
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
          display: { xs: "none", md: "flex" },
          width: "100%",
          margin: "auto",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: "320px",
          }}
        >
          {approachData.map((item, index) => (
            <>
              <ListItem
                sx={{
                  borderLeft: "5px solid blue",
                  padding: "13px",
                  marginBottom: "1.5px",
                  background: activeIndex === index ? "#0033FF" : "#F0F3FF",
                  color: activeIndex === index ? "#FFFFFF" : "#000000",
                }}
                key={item.number}
                id={item.number}
                onClick={() => handleClick(index)}
                onClickCapture={handleTabClick}
              >
                <Typography>{item.title}</Typography>
              </ListItem>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                {approachData.map((card, i) => (
                  <Box
                    key={i}
                    sx={{
                      margin: "0.65em 2em",
                      background: "#F0F3FF",
                    }}
                  >
                    {currentTab === `${card.number}` && (
                      <>
                        <Box>
                          <Image
                            src={card.imageId}
                            width={700}
                            height={240}
                            alt={""}
                          ></Image>
                        </Box>
                        <Box sx={{ margin: "20px 70px 20px 20px" }}>
                          <Typography
                            sx={{ fontWeight: "700", marginBottom: "1em" }}
                          >
                            {card.title}
                          </Typography>
                          <Typography>{card.description}</Typography>
                          <Button>
                            <Typography
                              sx={{
                                textTransform: "capitalize",
                                color: "#000000",
                              }}
                            >
                              Read More
                            </Typography>
                          </Button>
                        </Box>
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </>
          ))}
        </List>
        <Box>
          {approachData.map((card, i) => (
            <Box
              key={i}
              sx={{
                margin: "0.65em 2em",
                background: "#F0F3FF",
              }}
            >
              {currentTab === `${card.number}` && (
                <>
                  <Box>
                    <Image
                      src={card.imageId}
                      width={700}
                      height={240}
                      alt={""}
                    ></Image>
                  </Box>
                  <Box sx={{ margin: "20px 70px 20px 20px" }}>
                    <Typography sx={{ fontWeight: "700", marginBottom: "1em" }}>
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                    <Button>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          color: "#000000",
                        }}
                      >
                        Read More
                      </Typography>
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurApproach;
