import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Dual from './components/Dual';
import Board from "./components/Board";
import Write from "./pages/Write";
import BoardDetail from "./pages/BoardDetail";
import Mypage from "./components/Mypage";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Register from "./pages/Register";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dual' element={<Dual />} />
            <Route path='/board' element={<Board />} />
            <Route path='/write' element={<Write />} />
            <Route path='/board/:id' element={<BoardDetail />} />
            <Route path='/mypage' element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}