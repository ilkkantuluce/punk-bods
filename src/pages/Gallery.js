import data from "../data/data.json";


function search() {
    document.getElementById("sold").checked = false;
    document.getElementById("available").checked = false;
    var input, filter, itemsWrap, ahref, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    itemsWrap = document.getElementById("items-wrap");
    ahref = itemsWrap.getElementsByTagName("a");
    
    for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ahref[i].classList.add("mystyle");
            ///document.getElementsByClassName("pager")[0].style.display = 'none';
            var resultNumber = document.querySelectorAll('.mystyle').length;
            document.getElementById('li-length').innerHTML = resultNumber;

            if(document.getElementById('li-length').innerHTML == '0'){
              document.getElementById('no-result').innerHTML = 'No result';
            }
            else{
              document.getElementById('no-result').innerHTML = '';
            }

        } else {
            console.log(data.length)
            ahref[i].classList.remove("mystyle");
            ahref[i].classList.add("no");
            ///document.getElementsByClassName("pager")[0].style.display = 'none';
            var resultNumber = document.querySelectorAll('.mystyle').length;
            document.getElementById('li-length').innerHTML = resultNumber;

            if(document.getElementById('li-length').innerHTML == '0'){
              document.getElementById('no-result').innerHTML = 'No result';
            }
            else{
              document.getElementById('no-result').innerHTML = '';
            }
            
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
          ahref[i].classList.remove("no");
          ahref[i].classList.remove("mystyle");
          ahref[i].classList.add("mystyle2");
          ///document.getElementsByClassName("pager")[0].style.display = 'flex';
          var resultNumber2 = document.querySelectorAll('.mystyle2').length;
          document.getElementById('li-length').innerHTML = resultNumber2;
          
          if(document.getElementById('li-length').innerHTML == '0'){
            document.getElementById('no-result').innerHTML = 'No result';
          }
          else{
            document.getElementById('no-result').innerHTML = '';
          }
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
      document.getElementById("myInput").value = '';
      for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[1];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          ahref[i].classList.add("mystyle");
          ///document.getElementsByClassName("pager")[0].style.display = 'none';
          var resultNumber = document.querySelectorAll('.mystyle').length;
          document.getElementById('li-length').innerHTML = resultNumber;

          if(document.getElementById('li-length').innerHTML == '0'){
            document.getElementById('no-result').innerHTML = 'No result';
          }
          else{
            document.getElementById('no-result').innerHTML = '';
          }
        } else {
            console.log(data.length)
            ahref[i].classList.remove("mystyle");
            ahref[i].classList.add("no");
            ///document.getElementsByClassName("pager")[0].style.display = 'none';
            var resultNumber = document.querySelectorAll('.mystyle').length;
            document.getElementById('li-length').innerHTML = resultNumber;

            if(document.getElementById('li-length').innerHTML == '0'){
              document.getElementById('no-result').innerHTML = 'No result';
            }
            else{
              document.getElementById('no-result').innerHTML = '';
            }
        }
      }
    }
  
    if(document.getElementById('available').checked){
      input = 'true';
      filter = input.toUpperCase();
      itemsWrap = document.getElementById("items-wrap");
      ahref = itemsWrap.getElementsByTagName("a");
      document.getElementById("myInput").value = '';
      for (i = 0; i < ahref.length; i++) {
        a = ahref[i].getElementsByTagName("p")[1];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          ahref[i].classList.add("mystyle");
          //document.getElementsByClassName("pager")[0].style.display = 'none';
          var resultNumber = document.querySelectorAll('.mystyle').length;
          document.getElementById('li-length').innerHTML = resultNumber;

          if(document.getElementById('li-length').innerHTML == '0'){
            document.getElementById('no-result').innerHTML = 'No result';
          }
          else{
            document.getElementById('no-result').innerHTML = '';
          }
        } else {
          console.log(data.length)
          ahref[i].classList.remove("mystyle");
          ahref[i].classList.add("no");
          //document.getElementsByClassName("pager")[0].style.display = 'none';
          var resultNumber = document.querySelectorAll('.mystyle').length;
          document.getElementById('li-length').innerHTML = resultNumber;

          if(document.getElementById('li-length').innerHTML == '0'){
            document.getElementById('no-result').innerHTML = 'No result';
          }
          else{
            document.getElementById('no-result').innerHTML = '';
          }
        }
      }
    }
  
    if(document.getElementById('sold').checked === false && document.getElementById('available').checked === false){
      itemsWrap = document.getElementById("items-wrap");
      ahref = itemsWrap.getElementsByTagName("a");
      for (i = 0; i < ahref.length; i++) {
        ahref[i].classList.remove("no");
        ahref[i].classList.remove("mystyle");
      ahref[i].classList.add("mystyle2");
      ///document.getElementsByClassName("pager")[0].style.display = 'flex';
      var resultNumber2 = document.querySelectorAll('.mystyle2').length;
      document.getElementById('li-length').innerHTML = resultNumber2;
      

        ///document.getElementsByClassName("pager")[0].style.display = 'flex'
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
          <div className="row items" id="items-wrap"><h1 id="no-result" className=""></h1>
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