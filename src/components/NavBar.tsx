import { AppProps } from '../types';

export default function NavBar({ children }: AppProps) {
  return (
    <nav className="navbar navbar-expand bg-primary navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Intermediate Apollo:</span>
        {/* Bootstrap doesn't tell you that 'flex-fill' is necessary 
            in the absence of 'collapse' */}
        <div className="flex-fill">
          <ul className="navbar-nav">{children}</ul>
        </div>
      </div>
    </nav>
  );
}
