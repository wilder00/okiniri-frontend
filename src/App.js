import logo from './logo.svg';
import './App.css';
import AppRouteContent from './App.routes';
import DefaultLayout from './layouts/default';

const AppContent = ()=>{
  return (
    <DefaultLayout>
      <AppRouteContent/>
    </DefaultLayout>
  )
}

function App() {
  return (
    <AppContent/>
  );
}

export default App;
