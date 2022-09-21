import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <Link class="navbar-brand" to="/home"></Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" to="/dashboard">Dashboard</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/time">Time</Link>
                  </li>
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/calculator">Calculator</a></li>
                  </ul>

                </ul>
                <button id="logout-button" type="button" class="btn btn-outline-info"><a href="/">Logout</a></button>

{/*                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button  class="btn btn-outline-success my-2 my-sm-0" type="submit" id="button-search">Search</button>
                </form>
*/}
              </div>
            </nav>
        );
    }
}

const Welcome = () => {
  return (
      <div>
        <Home />
        <div className="greetings">
            <h1>Welcome on this site!</h1>
        </div>
      </div>
  );
};

export default Welcome;