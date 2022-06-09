import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import ReadingList from "./pages/ReadingList";
import "./App.css";
import ReadingListContextProvider from "./contexts/ReadingListContext";

function App() {
  return (
    <ReadingListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
      </BrowserRouter>
    </ReadingListContextProvider>
  );
}

export default App;
