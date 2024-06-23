/** @format */

import checklist from "../../assets/Checklist.svg";
import logo from "../../assets/logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='welcome-container'>
      <div className='welcome-left'>
        <div className='welcome-logo'>
          <img
            src={logo}
            alt='welcome image'
            className='welcome-img'
            width={150}
          />
        </div>
        <div className='welcome-content'>{children}</div>
      </div>
      <div className='welcome-right'>
        <img
          src={checklist}
          alt='welcome image'
          className='welcome-img'
          width={300}
        />
      </div>
    </div>
  );
};

export default Layout;
