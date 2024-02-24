import './Navbar.css';
import { GoChecklist } from "react-icons/go";

const Navbar = () => {
    return (
        <div className='shadow-lg' >
            <nav className="navbar navbar-expand-lg navbar-light nav-bg-col pl-3 pt-1">
                <GoChecklist className="logo mr-4 ml-4" />
                <a id='navbar-text' className="navbar-brand nav-style" href="/"> Todos <span className='nav-span-style'>Application</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    {/* <ul className="navbar-nav">
                        <li className="nav-item active ml-1">
                            <a className="nav-link" href="#">Home </a>
                        </li>

                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                         
                    </ul> */}
                </div>
            </nav>
        </div>

    )


};
export { Navbar };