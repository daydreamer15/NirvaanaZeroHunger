import { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "./App.css";
import JoinUs from "./screens/JoinUs";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screens/globals/Topbar";

import ProDashboard from "./screens/prodashboard";
import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import Contacts from "./screens/contacts";
import NGOs from "./screens/Ngos";


import Geography from "./screens/geography";
import Sidebar from "./screens/globals/Sidebar";
import NgoSidebar from "./screens/globals/NgoSidebar";


import EateryForm from "./screens/eateryform";
import ListFood from "./listfood";
import SignUp from "./screens/SignUp";
import ChatUI from "./screens/chat";
import Contact from "./screens/Contact";


const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isNgoSidebar, setIsNgoSidebar] = useState(true);

  const location = useLocation();
  const ngolocation = useLocation();

  const allowedRoutes = [
    "/prodashboard",
    "/dashboard",
    "/team",
    "/chat",
    "/eateryform",
    "/contacts",
    "/invoices",
    "/form",
    "/addhoreca",
    "/Ngos",
    "/geography",
  ];

  const ngoallowedRoutes = [
    "/ngocalendar",
    "/listngoHoreca",
    "/ngocontacts",
    "/ngoinvoices",
    "/ngochat",
    "/listfood",
    "/listHoreca",
  ];

  const shouldDisplaySidebarAndTopbar = allowedRoutes.includes(
    location.pathname
  );

  const shouldDisplayNgoSidebarAndTopbar = ngoallowedRoutes.includes(
    ngolocation.pathname
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* reset the css to default */}
        <div className="app">
          {shouldDisplaySidebarAndTopbar && <Sidebar isSidebar={isSidebar} />}
          {shouldDisplayNgoSidebarAndTopbar && (
            <NgoSidebar isNgoSidebar={isNgoSidebar} />
          )}
          <main className="content">
            {shouldDisplaySidebarAndTopbar && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}
            {shouldDisplayNgoSidebarAndTopbar && (
              <Topbar setIsNgoSidebar={setIsNgoSidebar} />
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/joinUs" element={<JoinUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup/:type" element={<SignUp />} />


             
              <Route path="/eateryform" element={<EateryForm />} />
              <Route path="/prodashboard" element={<ProDashboard />} />
              <Route path="/listfood" element={<ListFood />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/chat" element={<ChatUI />} />

              <Route path="/chat" element={<ChatUI />} />
              <Route path="/ngochat" element={<ChatUI />} />
              <Route path="/Ngos" element={< NGOs/>} />

      
         

              <Route path="/contacts" element={<Contacts />} />
              <Route path="/ngocontacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />
              <Route path="/ngoinvoices" element={<Invoices />} />
              
             

              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
