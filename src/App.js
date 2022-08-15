import { Suspense } from 'react';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={<h1>Loading......</h1>}>
      <Routes />
    </Suspense>
  );
}

export default App;
