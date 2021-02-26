import React from 'react';
import logo from "../../assets/cover/wizzymuse-logo.png";

function Nav() {

  return (
    <header>
        <h2 className="flex-row">
            <a href="/">
            <img src={logo} style={{ width: "50%" }} alt="WizzyMuse logo" />
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="">
                    <a href="#main">
                        Main(?)
                    </a>
                </li>
                <li className="">
                    <a href="#">
                        Dashboard
                    </a>
                </li>
                <li className="">
                    <a href="#">
                        Forum
                    </a>
                </li>
                <li className="">
                    <a href="#">
                        Search Artist
                    </a>
                </li>               
                <li className="">
                    <a href="#">
                        Login/Register
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;