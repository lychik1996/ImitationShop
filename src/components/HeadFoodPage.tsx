import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HeadFoodPage() {
  return (
    <>
      <div className="all">
        <header>
          <div className="header">
            <div className="header_left">
              <Link to="/">MainPage</Link>
            </div>
            <div className="header_right">
            <Link to="/basket" className="header_basket">
                Basket
              </Link>
              <Link to="/favorite" className="header_favorite">
                Favorite
              </Link>

              <Link to="/profile" className="header_profile">
                Profile
              </Link>

              <Link to="createItems" className="header_createItems">
                CreateItems
              </Link>
            </div>
          </div>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <ul className="footer">
            <li className="footer_"></li>
            <li className="footer_"></li>
            <li className="footer_"></li>
            <li className="footer_"></li>
          </ul>
        </footer>
      </div>
    </>
  );
}
