import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import NotFound from "@/pages/NotFoundPage";
import { Providers } from "@/app/providers";

const App = () => (
  <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Providers>
);

export default App;
