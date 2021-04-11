import data from "../data/data.json";


function search() {
    document.getElementById("sold").checked = false;
    document.getElementById("available").checked = false;
    var input, filter, itemsWrap, ahref, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    itemsWrap = document.getElementById("items-wrap");
    ahref = itemsWrap.getElementsByTagName("a");
    document.getElementById('li-length').innerHTML = ahref.length;
    
    for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        console.log('first:' + txtValue.toUpperCase().indexOf(filter))
        console.log('second:' + ahref.length)
        var test12 = txtValue.toUpperCase().indexOf(filter) + ahref.length; 
        console.log(test12 - ahref.length)
  
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ahref[i].style.display = "";
            document.getElementsByClassName("pager")[0].style.display = 'none'
        } else {
            ahref[i].style.display = "none";
            document.getElementsByClassName("pager")[0].style.display = 'none'
          }
    }
  }
   
  
  function ifBlank(){
    var input, filter, itemsWrap, ahref, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    itemsWrap = document.getElementById("items-wrap");
    ahref = itemsWrap.getElementsByTagName("a");
    for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if(input.value == ''){
          ahref[i].style.display = "";
          document.getElementsByClassName("pager")[0].style.display = 'flex'
        }
    }
  }
  
  
  function checkboxinput(){
    var result = document.getElementById("result");
    var chks = result.getElementsByTagName("INPUT");
    for (var i = 0; i < chks.length; i++) {
        chks[i].onclick = function () {
            for (var i = 0; i < chks.length; i++) {
                if (chks[i] != this && this.checked) {
                    chks[i].checked = false;
                }
            }
        };
    }
  
    var input, filter, itemsWrap, ahref, a, i, txtValue;
    if(document.getElementById('sold').checked){
      input = 'false';
      filter = input.toUpperCase();
      itemsWrap = document.getElementById("items-wrap");
      ahref = itemsWrap.getElementsByTagName("a");
      for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[1];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ahref[i].style.display = "";
            document.getElementsByClassName("pager")[0].style.display = 'none'
        } else {
            ahref[i].style.display = "none";
        }
      }
    }
  
    if(document.getElementById('available').checked){
      input = 'true';
      filter = input.toUpperCase();
      itemsWrap = document.getElementById("items-wrap");
      ahref = itemsWrap.getElementsByTagName("a");
      for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[1];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ahref[i].style.display = "";
            document.getElementsByClassName("pager")[0].style.display = 'none'
        } else {
            ahref[i].style.display = "none";
        }
      }
    }
  
    if(document.getElementById('sold').checked === false && document.getElementById('available').checked === false){
      itemsWrap = document.getElementById("items-wrap");
      ahref = itemsWrap.getElementsByTagName("a");
      for (i = 0; i < ahref.length; i++) {
        ahref[i].style.display = "";
        document.getElementsByClassName("pager")[0].style.display = 'flex'
      }
    }
  
  }
  

function Gallery() {
    return(
      <div className="gallery">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback" />
          <button className="btn" type="submit" onClick={search}>Submit</button>
          <input type="text" autofocus className="form-control" placeholder="Search by punk or bod id" id="myInput"
          onKeyUp={ifBlank}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              search()
            }
          }}
          />
          <div className="d-flex" id="result">
            <div className="d-flex">
              <p id="li-length">{data.length}</p><p className="ml-1">results</p>
            </div>
      
            <div className="checkbox">
              <input type="checkbox" id="available" onChange={checkboxinput} />
              <label htmlFor="available">available</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="sold" onChange={checkboxinput} />
              <label htmlFor="sold">sold</label>
            </div>
  
          </div>
        </div>
  
        <div className="paginate 1">
          <div className="row items" id="items-wrap">
            {data.map((data) => {
                return (
                  <a href={'/' + data.id} className="col-md-4" key={data.id}>
                    <p className="d-none">{data.id + ' ' + data.bio.Name}</p>
                    <p className="d-none">{'' + data.available}</p>
                    <div key={data.subtitle} style={{backgroundColor: data.background_color, marginBottom: '25px', textAlign: 'center'}}>
                      <img src={process.env.PUBLIC_URL + data.image} className="img-fluid" alt=""/>
                    </div>
                  </a>
                );
            })}
          </div>
        <div class="pager">
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

  export default Gallery;