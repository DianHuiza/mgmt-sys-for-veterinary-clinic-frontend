import { Outlet } from "react-router-dom";
import { Header } from '../components/Header';

export const BaseLayout = () => {
  return (
    <>
      <Header/>
      <div>
        <Outlet />
      </div>
      <footer>
        
      </footer>
    </>
  );
};
