import './App.css';
import Home from './components/home/Home';
import OurTeamPage from './components/ourteam/OurTeamPage';
import ResearchPage from './components/research/ResearchPage';
import ConsultingPage from './components/consulting/ConsultingPage';
import InsideResearch from './components/research/InsideResearch';
import AddPost from './components/admin/AddPost';
import Login from './components/Login';
import Register from './components/Register';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/addpost" element={<AddPost />} />
      <Route path="/ourteam" element={<OurTeamPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/research/:id" element={<InsideResearch />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
