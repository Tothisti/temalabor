import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Container from '@mui/material/Container';
import './App.css';
import { Provider } from 'jotai'

function App() {
  return (
    <Provider>
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
