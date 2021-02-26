"use strict";

{
  var count = -1
  var color = ["red","darkslateblue","darkorange","lawngreen","blueviolet","yellow","aquamarine","deepskyblue","hotpink"]
  var check = 0
  var check2 = 0
  var eyes = [[1,0,0,0,0,1,1,0,0],[0,1,0,0,0,0,1,1,1],[1,0,1,1,1,1,0,1,1],[0,1,1,1,0,1,1,1,0],[0,0,1,1,0,1,1,1,0],[1,1,0,1,1,0,0,0,0],[0,1,1,1,1,0,1,1,0],[0,1,1,1,1,1,1,1,0],[1,0,0,1,1,1,1,1,1]]
  var visit = [0,0,0,0,0,0,0,0,0]
  
  const jct1 = document.getElementById("jct1")
  const jct2 = document.getElementById("jct2")
  const jct3 = document.getElementById("jct3")
  const jct4 = document.getElementById("jct4")
  const jct5 = document.getElementById("jct5")
  const jct6 = document.getElementById("jct6")
  const jct7 = document.getElementById("jct7")
  const jct8 = document.getElementById("jct8")
  const jct9 = document.getElementById("jct9")
  const retry = document.getElementById("retry")
  const box = document.getElementById("box")
  const failed = document.getElementById("failed")
  const clear = document.getElementById("clear")
  const excellent = document.getElementById("excellent")
  const tw1 = document.getElementById("tw1")
  const tw2 = document.getElementById("tw2")
  
  function vis(x) {
    x.style.visibility = "visible"
  }
  function last() {
    if(count==8){
      vis(box);
      if(check==9){
        vis(clear);
        vis(tw1);
      }else{
        vis(failed);
        vis(retry);
      }
    }
  }

  retry.addEventListener("click", ()=>{
    location.reload();
  });
  
  tw1.addEventListener("click", ()=>{
    window.open("https://twitter.com/share?text=『Eyes wide open』Normal Clear!&url=https://pearl-izumo.github.io/Eyeswideopen/", "_blank");
  });

  tw2.addEventListener("click", ()=>{
    window.open("https://twitter.com/share?text=『Eyes wide open』All Clear!&url=https://pearl-izumo.github.io/Eyeswideopen/", "_blank");
  });

  jct1.addEventListener("click", ()=>{
    if(visit[0]==0){
      count += 1;
      visit[0] = 1;
      if(eyes[count][0]==0){
        jct1.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct1.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct2.addEventListener("click", ()=>{
    if(visit[1]==0){
      count += 1;
      visit[1] = 1;
      if(eyes[count][1]==0){
        jct2.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct2.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct3.addEventListener("click", ()=>{
    if(visit[2]==0){
      count += 1;
      visit[2] = 1;
      if(eyes[count][2]==0){
        jct3.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct3.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct4.addEventListener("click", ()=>{
    if(visit[3]==0){
      count += 1;
      visit[3] = 1;
      if(eyes[count][3]==0){
        jct4.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct4.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct5.addEventListener("click", ()=>{
    if(visit[4]==0){
      count += 1;
      visit[4] = 1;
      if(eyes[count][4]==0){
        jct5.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct5.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct6.addEventListener("click", ()=>{
    if(visit[5]==0){
      count += 1;
      visit[5] = 1;
      if(eyes[count][5]==0){
        jct6.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct6.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct7.addEventListener("click", ()=>{
    if(visit[6]==0){
      count += 1;
      visit[6] = 1;
      if(eyes[count][6]==0){
        jct7.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct7.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct8.addEventListener("click", ()=>{
    if(visit[7]==0){
      count += 1;
      visit[7] = 1;
      if(eyes[count][7]==0){
        jct8.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct8.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
  jct9.addEventListener("click", ()=>{
    if(visit[8]==0){
      count += 1;
      visit[8] = 1;
      if(eyes[count][8]==0){
        jct9.style.backgroundColor = color[count];
        check += 1;
      }else{
        jct9.style.backgroundColor = "lightgray";
      }
      last();
    }
  });
}
