import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
  );
}

export default App;
