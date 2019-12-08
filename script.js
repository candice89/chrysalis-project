let ID_TO_BUTTON = {
  "doS0G8m9ESqqlf87": {
    "text":"Chapter 1<br>Before Japan",
    "class":"U1J4egV6Qo4DhTR6",
  },
  "Vot3VP4N7SN7vH8q":{
    "text":"Chapter 2<br>Studied in Japan",
    "class":"CZ0XZqHR04wT5hFz",
  },
  "W5M5p26ezqe7DKMj":{
    "text":"Chapter 3<br>Work in Japan",
    "class":"U1J4egV6Qo4DhTR6",
  },
  "C6cVFRFZZGkiau1P":{
    "class":"CZ0XZqHR04wT5hFz",
    "text":"Chapter X<br>What next?",
  },
};
let ID_TO_SRC = {
  "doS0G8m9ESqqlf87":"res/before_japan.jpg",
  "Vot3VP4N7SN7vH8q":"res/studied_in_japan.jpg",
  "W5M5p26ezqe7DKMj":"res/work_in_japan.jpg",
  "C6cVFRFZZGkiau1P":"",
};
let states = {
  "doS0G8m9ESqqlf87":true,
  "Vot3VP4N7SN7vH8q":true,
  "W5M5p26ezqe7DKMj":true,
  "C6cVFRFZZGkiau1P":true,
};
function makeshift(id){
  let element = document.getElementById(id);
  element.innerHTML = "";

  let myimg = null;
  if(states[id]) {
    if(ID_TO_SRC[id].length > 0) {
      myimg = document.createElement("img");
      myimg.src=ID_TO_SRC[id];
      myimg.style.height = "auto";
      myimg.style.width = "100%";
    } else {
      myimg = document.createElement("div");
      myimg.setAttribute("class","typewriter");
      let h1 = document.createElement("h1");
      h1.innerHTML="I wish I'd know...";
      myimg.appendChild(h1);
    }
  } else {
    myimg = document.createElement("button");
    myimg.setAttribute("class",ID_TO_BUTTON[id]["class"]);
    myimg.innerHTML = ID_TO_BUTTON[id].text;
  }
  myimg.onclick = function(){makeshift(id)}
  states[id] = !states[id];
  element.appendChild(myimg);
}
