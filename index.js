let http = new XMLHttpRequest();

http.open('get','class.json',true);

http.send();

http.onload =function(){

    if(this.readyState == 4 && this.status == 200){
        let cards = JSON.parse(this.responseText);

        let output = "";

        for(let item of cards){
           output+= `
           <div class="card-group  col-md-4  px-5 mt-5  " style="width:28rem;">
                <div class="card shadow">
                  <img src="${item.ImageUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                           <h5 class="card-title p-2">${item.Name}</h5>
                           <p class="card-text">${item.ShortDesc}</p>
                           <button class='btn btn-outline-secondary view_btn'>View</button>
                        </div>
                </div>
            </div>
           ` 
        }

        document.querySelector('.cardss').innerHTML = output

    }

}
