import React from 'react'
import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../themes';


const FAQ = () => {
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" height="82vh" sx={{ overflowY:"scroll"
    }} >
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore commodi adipisci illum doloremque laborum dignissimos, nam in. Facilis ab possimus ipsam quasi voluptatibus ipsa temporibus optio? Quibusdam est accusamus voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore commodi adipisci illum doloremque laborum dignissimos, nam in. Facilis ab possimus ipsam quasi voluptatibus ipsa temporibus optio? Quibusdam est accusamus voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    Your Favorite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore commodi adipisci illum doloremque laborum dignissimos, nam in. Facilis ab possimus ipsam quasi voluptatibus ipsa temporibus optio? Quibusdam est accusamus voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    Some Random question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore commodi adipisci illum doloremque laborum dignissimos, nam in. Facilis ab possimus ipsam quasi voluptatibus ipsa temporibus optio? Quibusdam est accusamus voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    The Final question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore commodi adipisci illum doloremque laborum dignissimos, nam in. Facilis ab possimus ipsam quasi voluptatibus ipsa temporibus optio? Quibusdam est accusamus voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ
