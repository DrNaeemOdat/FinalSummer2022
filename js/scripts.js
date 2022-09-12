document.addEventListener("DOMContentLoaded",function(event){
  document.querySelector(".btn1").addEventListener("click",loadImage1);
  //Add code to make other buttons work
});
function loadImage1(){
  var fig = null;
  var xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function () {
    if ((this.readyState == 4) && (this.status == 200)) {
      fig = this.responseText;
      console.log(fig);
      var xttp = new XMLHttpRequest();
      xttp.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
          if(window.cnt<3){
            var entry = JSON.parse(this.responseText);
            fig = fig.replace(new RegExp("{{src}}", "g"), entry[0].src);
            fig = fig.replace(new RegExp("{{description}}", "g"), entry[0].description);

            document.querySelector(".image-frame").innerHTML = document.querySelector(".image-frame").innerHTML + fig;
            window.cnt++;
          }
        }
      };
      xttp.open("GET", "data/data.json", true);
      xttp.send(null);//for POST only
    }
  };
  xttp.open("GET", "data/fig.html", true);
  xttp.send(null);//for POST only
}