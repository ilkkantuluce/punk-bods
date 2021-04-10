import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import './App.css';
import data from "./data/data.json";
import homeHeaderImage from './images/home_page_header.png'
import logo from './images/logo_circle.png'


function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
      if(input.value == ''){
        window.location.reload();
      }
  }
}

function Story() {
  return(
    <div className="home">
      <div className="home-header">
        <img src={homeHeaderImage} className="img-fluid"/>
        <div className="on-image">
          <h1>PunkBods</h1>
          <p>A private art collection of 10,000 unique digital characters, created for the cryptopunks ecosystem.</p>
          <a href="" class="btn btn-outline-dark">Discover</a>
        </div>
      </div>
      
      <div>
        <div className="d-flex w-65 m-auto">
          <div><h1>Invite Only</h1></div>
          <p>We are looking for collectors that are truly passionate about digital art, and nol just looking to make a quick buck. Owning a cryplopunk or having a large following is not required, in fact, you can even stay anonymous.</p>
        </div>

        <div className="d-flex w-65 m-auto">
          <div><h1>Weekly Drops</h1></div>
          <p>The story of the town unfolds with every drop. Whether it’s the unsuspecting punk murderer or the town sheriff with a dark secret, you will soon gel to know thema all. Join our discord channel or follow us on Lwitler to be notified.</p>
        </div>

        <div className="d-flex w-65 m-auto">
          <div><h1>Community Driven</h1></div>
          <p>Submit an idea for a bod identitiy or an extra and if we implement it, we will reward you with %50 off on anv artwork.</p>
        </div>

      </div>
    </div>
  ) ;
}


function Gallery() {
  return(
    <div className="gallery">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <button className="btn">Submit</button>
        <input type="text" autofocus className="form-control" placeholder="Search by punk or bod id" id="myInput" onKeyUp={myFunction}/>
        <div className="d-flex">
          <p>10,000</p><p className="ml-1">results</p>

          <div className="checkbox">
            <input type="checkbox" id="available" />
            <label htmlFor="available">available</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="sold" />
            <label htmlFor="sold">sold</label>
          </div>
      
        </div>
        
      </div>

      <div className="paginate 1">
        <div className="row items" id="myUL">
          {data.map((data) => {
              return (
                <a href={'/' + data.id} className="col-md-4" key={data.id}>
                  <p className="d-none">{data.id + ' ' + data.bio.Name}</p>
                  <div key={data.subtitle} style={{backgroundColor: data.background_color, marginBottom: '25px'}}>
                    <img src={process.env.PUBLIC_URL + data.image} className="img-fluid" alt=""/>
                  </div>
                </a>
              );
          })}
        </div>
      <div class="pager d-flex">
        <div class="pageNumbers"></div>
        <div className="ml-auto d-flex">
          <div class="previousPage">Previous</div>
          <div class="nextPage">next</div>
        </div>
        {/*<div class="firstPage">&laquo;</div>*/}
        {/*<div class="lastPage">&raquo;</div>*/}
      </div>
      </div>
    </div>
  ) ;
}


function Faq() {
  return(
    <div className="faq">
      <div className="w-65 m-auto">
        <h1>Story</h1>
        <p>Lorem Ipsum is simply dummy lext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ype and scrambled it to make a type specimen book. It has survived nol only five centuries, but also the leap into electronic lypeselling, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
      </div>
      <div className="w-65 m-auto">
        <h1>Faq</h1>
        <b>What are punkbods?</b>
        <p>Punkbods is an art collection of 10,000 unique digilal characters stored on the Ethereum blockchain as non-fungible tokens (i.e. NFTs). They are designed lo be an extension lo cryplopunks. Each bod is an exact.1 to 1 match with an existing punk.</p>
      
        <b>Why did we create punkbods?</b>
        <p>As cryplopunk owners ourselves, we saw a gap in the NFT ecosystem for high quality, realistic bodies and accessories lo compliment our cryplopunks. We wanled Lo complete their identities and create a slory around who they are.</p>
      
        <b>Are punkbods worth collecting?</b>
        <p>Ultimately, the value of digilal art is subjective. We created these because that's what our hearts desired. We do not know who or how these characters will be used. Any transfers or collecting of the punkhods after the initial sale are out of our control and up to the discretion of the owner(s).</p>

        <b>Do I own the rights to usage of a punkbod?</b>
        <p>Absolutely, as these characters make their way into the world, we would love to see them imagined as physical prints, in comics. memes or adapted into other pieces of content.</p>

        <b>How did our team come together?</b>
        <p>We are a small team consisling of a programmer, an artist and a marketer. This project has been in the works for the last few months sparked by the excitement around cryptopunks. As a team. we have different competencies - technical, marketing and creative.</p>

      </div>
  
    </div>
 ) ;
}



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
                <a className="nav-link" href="/gallery" >gallery</a>
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
                      <img alt="" src={process.env.PUBLIC_URL + data.image} className="img-fluid" />
                    </div>
                    <div className="w-75 m-auto">
                      <div>
                        <h1>{data.bio.Name}</h1>
                        <h2>{data.subtitle}</h2>
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

                      <a href="" class="btn btn-outline-dark">Buy</a>
                    
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
