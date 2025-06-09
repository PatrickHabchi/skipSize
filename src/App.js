import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkipSelectionPage from './pages/SkipSelectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkipSelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
