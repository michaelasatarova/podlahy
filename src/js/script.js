//toggle contact

function toggleContact(){
 let kontakt = document.getElementById('kontakt');  
 kontakt.classList.toggle("show-contact"); 
}

//toggle navi

function toggleNavi(){
    let navi = document.getElementById("navigation-menu");
    navi.classList.toggle("show-navi");
}

//calendar
dates('option');
months('option');
//You can change the startYear(1990) and endYear(2017)
years('option', 2000, 2017);