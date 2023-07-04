import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import FormPage from "./scenes/form/index";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Perfil from './scenes/perfil';
import Registro from './scenes/registro';
import Login from './scenes/login';
import ResetPassword from './scenes/reset';
import Conexiones from './scenes/conexiones';
import Grupos from './scenes/grupos';
import Planes from './scenes/planes';
import Chat from './scenes/chat';
import Archivos from './scenes/archivos';
import Correos from './scenes/correos';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route exact path="/"  element={<Dashboard/>}/>
              <Route path="/equipo" element={<Team />} />
              <Route path="/contactos" element={<Contacts />} />
              <Route path="/facturas" element={<Invoices />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendario" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> 
              <Route path="/perfil" element={<Perfil />} /> 
              <Route path="/registro" element={<Registro />} />
              <Route path="/login" element={<Login />} />  
              <Route path="/reset" element={<ResetPassword />} />  
              <Route path="/conexiones" element={<Conexiones />} /> 
              <Route path="/grupos" element={<Grupos />} />
              <Route path="/planes" element={<Planes />} />  
              <Route path="/chat" element={<Chat />} /> 
              <Route path="/archivos" element={<Archivos />} /> 
              <Route path="/correos" element={<Correos />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
