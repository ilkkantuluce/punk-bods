import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Story from './pages/Story'
import Faq from './pages/Faq'
import Gallery from './pages/Gallery'
import data from "./data/data.json";
import logo from './images/logo_circle.png'


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-default">
        
          <NavLink className="navbar-brand" to="/"><img className="img-fluid" src={logo}/></NavLink>
          {/*<NavLink className="navbar-brand navbar-brand-text" to="/">P</NavLink>*/}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">
            <ul className="navbar-nav">
              <li className="nav-item d-sm-block d-lg-none">
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">story</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" >faq</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">gallery</a>
              </li>
            </ul>
          </div>
        </nav>

       


        <Switch>
        {data.map((data) => {
              return (
                <Route path={'/' + data.id}>
                  <div className="item-page">
                    <div className="col-12 text-center" style={{backgroundColor: data.background_color, marginBottom: '10px'}}>
                      <img src={process.env.PUBLIC_URL + data.image} alt="" className="img-fluid" />
                    </div>
                    <div className="w-75 m-auto">
                      <div>
                        <h1>{'Bod: ' + data.bio.Name}</h1>
                        <h2>{data.subtitle + '.'}</h2>
                      </div>
                      <h3>Bio</h3>
                      <div className="row">
                        <div className="col-md-3">
                          <p>Name</p>
                          <b>{data.bio.Name}</b>
                        </div>
                        <div className="col-md-3">
                          <p>Birthdate</p>
                          <b>{data.bio.Birthdate}</b>
                        </div>
                        <div className="col-md-3">
                          <p>Age</p>
                          <b>{data.bio.Age}</b>
                        </div>
                        <div className="col-md-3">
                          <p>Body Type</p>
                          <b>{data.bio.BodyType}</b>
                        </div>
                        <div className="col-md-3">
                          <p>Gender</p>
                          <b>{data.bio.gender}</b>
                        </div>
                        <div className="col-md-3">
                          <p>Location</p>
                          <b>{data.bio.Location}</b>
                        </div>
                      </div>

                      <h3 className="attributes">Attributes</h3>
                      <div className="row">
                        <div className="col-md-3 top-wrap">
                          <b className="top">{data.attributes.Top}</b>
                          <p>Top</p>
                        </div>
                        <div className="col-md-3 underwear-wrap">
                          <b className="underwear">{data.attributes.Underwear}</b>
                          <p>Underwear</p>
                        </div>
                        <div className="col-md-3 outerwear-wrap">
                          <b className="outerwear">{data.attributes.Outerwear}</b>
                          <p>Outerwear</p>
                        </div>
                        <div className="col-md-3 bottom-wrap">
                          <b className="bottom">{data.attributes.Bottom}</b>
                          <p>Bottom</p>
                        </div>
                        <div className="col-md-3 item-wrap">
                          <b className="item">{data.attributes.Item}</b>
                          <p>Item</p>
                        </div>
                        <div className="col-md-3 socks-wrap">
                          <b className="socks">{data.attributes.Socks}</b>
                          <p>Socks</p>
                        </div>
                      </div>
                      <a href={'buy' + data.id} class="btn btn-outline-dark">Buy</a>
                    </div>
                  </div>
                </Route>
              );
          })
          }
          

          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/">
            <Story />
          </Route>
        </Switch>

          <footer>
            <div className="row">
              <div className="col-md-5">
                <div className="d-flex">
                  <p className="pt-2 mr-1">&#169;</p><h3>PunkBods</h3>
                </div>
              </div>
              <div className="col-md-7 text-right mt-2">
                <a href="">Apply to be a collector</a>
                <a href="">Submit Ideas</a>
                <a href="">Discord</a>
                <a href="">Twiller </a>
                <a href="">OpenSea</a>
                <a href="">Contact</a>
              </div>
            </div>
          </footer>
      </div>
    </Router>
  );
}


export default App;
