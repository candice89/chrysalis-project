var ID_TO_SRC = {
  "doS0G8m9ESqqlf87":"res/before_japan.jpg",
  "Vot3VP4N7SN7vH8q":"res/studied_in_japan.jpg",
  "W5M5p26ezqe7DKMj":"res/work_in_japan.jpg",
  "C6cVFRFZZGkiau1P":"",
};
function makeshift(id){
  var element = document.getElementById(id);
  element.innerHTML = "";
  if(ID_TO_SRC[id].length > 0) {
    var myimg = document.createElement("img");
    myimg.src=ID_TO_SRC[id];
    myimg.style.height = "auto";
    myimg.style.width = "100%";
  } else {
    var myimg = document.createElement("div");
    myimg.setAttribute("class","typewriter");
    var h1 = document.createElement("h1");
    h1.innerHTML="I wish I'd know...";
    myimg.appendChild(h1);
  }
  element.appendChild(myimg);
}
