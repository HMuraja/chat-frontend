import styles from './App.css';
import NavBar from "./components/NavBar";
import LandingPage from './pages/LandingPage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container className={styles.Main}>
        <LandingPage />
      </Container>

    </div>
  );
}

export default App;
// Path: src/App.css