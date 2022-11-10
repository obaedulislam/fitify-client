import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          style: {
            background: 'yellow',
            color: '#000',
            fontSize: '16px',
            fontWeight:'600'
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}

export default App;
