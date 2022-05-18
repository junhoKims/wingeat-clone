import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, CartPage, NotFoundPage } from '@pages';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
