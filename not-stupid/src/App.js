import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.dropdown = React.createRef();
  }

  toggleShow = () => {
    console.log(this.dropdown.current);
    let { current } = this.dropdown;

    if (current.cl.contains("show")) {
      current.cl.add("hide");
      current.cl.remove("show");
    } else {
      current.cl.add("show");
      current.cl.remove("hide");
    }
  };

  render() {
    return (
      <div className="frame">
        <body className="body">
          <nav>
            <header className="header-bar">
              <div>
                <div className="logo">Start Bootstrap</div>
              </div>
              <div>
                <i
                  id="burger-icon"
                  className="fas fa-bars fa-2x"
                  onClick={this.toggleShow}
                />
              </div>
              <div className="menu-buttons">
                <div className="menu">SERVICES</div>
                <div className="menu">PORTFOLIO</div>
                <div className="menu">ABOUT</div>
                <div className="menu">TEAM</div>
                <div className="menu">CONTACT</div>
              </div>
            </header>
          </nav>
          <div className='drop-menu'  ref={this.dropdown}>
            <div className='dropdown'>SERVICES</div>
            <div className="dropdown">PORTFOLIO</div>
            <div className="dropdown">ABOUT</div>
            <div className="dropdown">TEAM</div>
            <div className="dropdown">CONTACT</div>
          </div>
          <div className="main-pic">
            <div className="welcome-main">
              <div className="welcome-studio">Welcome To Our Studio!</div>
              <div className="nice-to-meet">IT'S NICE TO MEET YOU</div>
              <button className="tell-more">TELL ME MORE</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
export default App;
