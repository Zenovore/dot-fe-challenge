import { Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category";
import { Login } from "./pages/Login";
import { ProtectedPages } from "./pages/ProtectedPages";
import { Quiz } from "./pages/Quiz";
import { Score } from "./pages/Score";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route exact path="/" element={<ProtectedPages />}>
        <Route element={<Category />}></Route>
      </Route>
      <Route exact path="/quiz" element={<ProtectedPages />}>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Route>
      <Route exact path="/score" element={<ProtectedPages />}>
        <Route path="/score" element={<Score />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
