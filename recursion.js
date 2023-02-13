let num =1;
function show(){
  
    console.log("counter : ", num);
    num++;
    show();
}
show();