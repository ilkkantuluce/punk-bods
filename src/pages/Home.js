import homeHeaderImage from '../images/home_page_header.png'

function Home() {
    return(
      <div className="home">
        <div className="home-header">
          <img src={homeHeaderImage} className="img-fluid"/>
          <div className="on-image">
            <h1>PunkBods</h1>
            <p>A private art collection of 10,000 unique digital characters, created for the cryptopunks ecosystem.</p>
            <a href="/gallery" class="btn btn-outline-dark">Discover</a>
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

export default Home;