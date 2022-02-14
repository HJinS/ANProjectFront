import React, {Component, useEffect, useState} from "react";
import { Grid, Box } from "@mui/material";
import './mainArea.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import MyButton from "./myButton";

function FloatingMenu() {
    const category=["intel cpu", "amd cpu",
                    "radeon gpu", "nvidia gpu",
                    "ddr4 ram", "ddr5 ram",
                    "nvme ssd", "sata ssd",
                    "liquid cpu cooler",
                    "air cpu cooler"]
    const [filterList, setFilter] = useState<string[]>([]);

    const addFilterItem = (filterItem: string) => {
        setFilter([
            ...filterList,
            filterItem
        ])
    }

    const deleteFilterItem = (filterItem: string) => {
        setFilter(filterList.filter(item => item !== filterItem))
    }

    useEffect(() => {
        console.log(filterList)
    }, [filterList])


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
                        <MyButton key={index} category={categoryItem} addFilterItem={addFilterItem} deleteFilterItem={deleteFilterItem}/>         
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
  }
  
export default FloatingMenu;