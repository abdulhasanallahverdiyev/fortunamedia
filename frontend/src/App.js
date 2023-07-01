import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './Routes/Route';
import BackToTop from './Components/BackToTop';
const router = createBrowserRouter(ROUTES);
function App() {
  return (
    <div className="App">
      <BackToTop />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
