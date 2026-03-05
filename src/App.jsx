import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; // Let's keep this if the user wants it later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* We can add more routes here, e.g. <Route path="/ticket/:id" element={<TicketDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
