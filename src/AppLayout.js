import './AppLayout.css';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/app-header';

function AppLayout() {
  return (
    <div className="app-layout">
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
