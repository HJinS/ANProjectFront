import React, {Component} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css'
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

function FloatingMenu() {
    const category=["intel cpu", "amd cpu",
                    "radeon gpu", "nvidia gpu",
                    "ddr4 ram", "ddr5 ram",
                    "nvme ssd", "sata ssd",
                    "liquid cpu cooler",
                    "air cpu cooler"]
    return (
        <Box className={"FloatingMenuStyle"}>
            {category.map(categoryItem => (
                <Button className={"ButtonStyle"}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {categoryItem}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
  }
  
export default FloatingMenu;