import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Youth Coder
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/articels">Articels</Link>
              <Link to="/tutor">Tutor</Link>
              <Link to="/forum">Forum</Link>
              <Link to="/">Login & Registration</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Youth Coder
              </Link>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/articels">Articels</Link>
              <Link to="/tutor">Tutor</Link>
              <Link to="/forum">Forum</Link>
              <Link to="/contact">Contact Us</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
