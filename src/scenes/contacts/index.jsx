import React from 'react'
import {Box} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import {mockDataContacts} from "../../data/mockdata";
import Header from '../../components/Header';
import { useTheme } from '@emotion/react';

const Contacts = () => {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName:"ID",flex: 0.5},
        {field :"registrarId", headerName: "Registrar ID"},
        {field: "name",
         headerName:"Name",
         flex: 1,
         cellClassName: "name-column--cell",
        },
        {field: "age",
         headerName:"Age",
         type:"number",
         headerAlign:"left",
         align:"left",
        },
        {field: "phone",
         headerName:"Phone",
         flex:1,
        },
        {field: "email",
         headerName:"Email",
         flex:1,
        },
        {field: "address",
         headerName:"Address",
         flex:1,
        },
        {field: "city",
         headerName:"City",
         flex:1,
        },
        {field: "zipCode",
         headerName:"Zipcode",
         flex:1,
        },
    ]
  return (
    <Box m="20px">
        <Header title="Contacts" subtitle="List of Contacts for Future Reference" />
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color:`${colors.greenAccent[300]} !important`,
            }
        }}>
            <DataGrid 
            rows={mockDataContacts}
            columns={columns}
            slots={{toolbar: GridToolbar}}
            />
        </Box>

    </Box>
  )
}

export default Contacts
