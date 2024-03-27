import React from 'react'
import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../themes";
import {mockDataInvoices} from "../../data/mockdata";
import Header from '../../components/Header';

const Invoices = () => {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(mockDataInvoices);
    const columns = [
        { field: "id", headerName:"ID",flex: 0.5},
        {field: "name",
         headerName:"Name",
         flex: 1,
         cellClassName: "name-column--cell",
        },
        {field: "phone",
         headerName:"Phone",
         flex:1,
        },
        {field: "email",
         headerName:"Email",
         flex:1,
        },
        {field: "cost",
         headerName:"Cost",
         flex:1,
         renderCell:(params) =>{
            <Typography color={colors.greenAccent[500]} >
                ${params.row.cost}
            </Typography>
         }
        },
        {field: "date",
         headerName:"Date",
         flex:1,
        },
    ]
  return (
    <Box m="20px">
        <Header title="Invoices" subtitle="List of Invoice Balances for Future Reference" />
        <Box m="40px 0 0 0" height='72vh' sx={{
            "& .MuiDataGrid-root":{
                border:"none", 
            },
            "& .MuiDataGrid-cell":{
                borderBottom:"none"
            },
            "& .MuiDataGrid--cell":{
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeader":{
                backgroundColor: colors.blueAccent[500],
                borderBottom:"none"
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                marginBottom:"20px",
                backgroundColor: colors.blueAccent[700]
            }, 
            "& .MuiCheckbox-root":{
                color: `${colors.greenAccent[200]} !important`
            }
        }}>
            <DataGrid 
            checkboxSelection
            rows={mockDataInvoices}
            columns={columns}
            />
        </Box>

    </Box>
  )
}

export default Invoices
