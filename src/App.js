import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Navbar from './scenes/global/Navbar';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <Navbar/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/react-admin" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/invoices" element={<Invoices />}/>
          <Route path="/form" element={<Form />}/>
          {/* <Route path="/bar" element={<Bar />}/> */}
          {/* <Route path="/line" element={<Line />}/> */}
          {/* <Route path="/pie" element={<Pie />}/> */}
          {/* <Route path="/faq" element={<FAQ />}/> */}
          {/* <Route path="/geography" element={<Geography />}/> */}
          {/* <Route path="/calendar" element={<Calendar />}/> */}
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;