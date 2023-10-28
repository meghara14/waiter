import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/pages/NotFound";
import TablePage from "./components/pages/TablePage";
import Home from "./components/pages/Home";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tablesReducer";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};


export default App;
