import React, {Component} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css'
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

function FloatingMenu() {
    const category=["intel cpu", "amd cpu",
                    "radeon gpu", "nvidia gpu",
                    "ddr4 ram", "ddr5 ram",
                    "nvme ssd", "sata ssd",
                    "liquid cpu cooler",
                    "air cpu cooler"]
    return (
        <Accordion className="AccordionStyle" square={true}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
                {"PC 부품"}
            </AccordionSummary>
            <AccordionDetails>
                <Box className={"FloatingMenuStyle"}>
                    {category.map((categoryItem, index) => (
                        <Button key={index} className="ButtonStyle" variant="contained" color="inherit">
                            <Typography variant="body2" color="text.secondary">
                                {categoryItem}
                            </Typography>
                        </Button>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
  }
  
export default FloatingMenu;