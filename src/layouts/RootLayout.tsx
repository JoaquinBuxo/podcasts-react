import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Link to='/'>Podcaster</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
