import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from './pages/Books';
import ReadingList from './pages/ReadingList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/reading-list" element={<ReadingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
