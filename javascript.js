

/* Set the width of the side navigation to 250px and the left margin of the 
   page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySideNav").style.width = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the 
   page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

/* Display each example program in each page (pdf object) */
function displayProg(show_hide, program) {
    var progs = ["prog0", "prog1", "prog2", "prog3", "prog4",
                 "prog5", "prog6"];
    if (show_hide == 1) {
        document.getElementById(progs[program]).style.display = 'none';
    }
    else {
        document.getElementById(progs[program]).style.display = 'block';
    }
}
