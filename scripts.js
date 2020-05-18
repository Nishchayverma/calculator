//function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

 // function to toggle between light and dark theme
        function themeChanger() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

// Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
                document.getElementById('switch').checked = false;
            } else {
                setTheme('theme-light');
              document.getElementById('switch').checked = true;
            }
        })();


  
var string="";
var result="";

function clearOutput(){
  string="";
  result="";
  document.getElementById("input").innerHTML=string;
  document.getElementById("result").innerHTML=result;
  screen.width > 768 ? document.getElementById("input").style.top= "160px": document.getElementById("input").style.top= "120px";
}

function clearSome(){
  string =string.substring(0,string.length-1);
  document.getElementById("input").innerHTML=string;
}

function displayClicked(char){

  if(char=="sin" || char=="cos" || char=="tan" || char=="log" || char=="ln" || char=="&#x3C0" || char=="1/x" || char=="!" || char=="&radic;" )
  alert("Pay to unlock this feature");
  else{
  if(result!=="")
    { 
      screen.width > 768 ? document.getElementById("input").style.top= "160px": document.getElementById("input").style.top= "120px";
     document.getElementById("result").innerHTML="";
  }
    string += char;
    document.getElementById("input").innerHTML=string;
}
}

function displayresult(){
   try{
     result= "= " + eval(string);
  screen.width > 768 ? document.getElementById("input").style.top= "130px" : document.getElementById("input").style.top= "96px";
  document.getElementById("result").innerHTML=result;
   string=result.substring(1,result.length);
   }
   catch(err){
    document.getElementById("input").innerHTML= err.name;
   }
  }

  //More options in mobile-mode
  function moreOptions(){
    if(document.getElementById("more").checked)
    {
      if(window.innerWidth>"600")
      document.getElementsByClassName("main-functions")[0].style.width="68%";
      else if(window.innerWidth>"500")
      document.getElementsByClassName("main-functions")[0].style.width="64%";
      else if(window.innerWidth>"400")
      document.getElementsByClassName("main-functions")[0].style.width="60%";
      
      document.getElementsByClassName("side-functions")[0].style.display="grid";
    }
   else
   {
    document.getElementsByClassName("main-functions")[0].style.width="98%";
    document.getElementsByClassName("side-functions")[0].style.display="none";

   }
  }

  


