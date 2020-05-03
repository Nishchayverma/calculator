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
  screen.width > 768 ? document.getElementById("input").style.top= "160px": document.getElementById("input").style.top= "118px";
}

function clearSome(){
  string =string.substring(0,string.length-1);
  document.getElementById("input").innerHTML=string;
}

function displayClicked(char){
  
  if(result!=="")
    { 
      screen.width > 768 ? document.getElementById("input").style.top= "160px": document.getElementById("input").style.top= "118px";
     document.getElementById("result").innerHTML="";
  }
    string += char;
    document.getElementById("input").innerHTML=string;
}

function displayresult(){
   try{
     result= "= " + eval(string);
  screen.width > 768 ? document.getElementById("input").style.top= "130px": document.getElementById("input").style.top= "96px";
  document.getElementById("result").innerHTML=result;
   string=result.substring(1,result.length);
   }
   catch(err){
    document.getElementById("input").innerHTML= err.name;
   }
}


