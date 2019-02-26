// Copyright (c) 2019 Jerry L Hoover - Two Brave Dogs

function executeButton(myButtonText) { 
    switch (myButtonText) {
        default:
            myButtonText = "";
            break;
        case "Two Brave Dogs":
            window.open("http://twobravedogs.com", "_self", false);
            myButtonText = "";
            break;
        case "RealJHoo":
            window.open("https://realjhoo.com", "_self", false);
            myButtonText = "";
            break;
        case "The Torque Hub":
            window.open("https://thetorquehub.com", "_self", false);
            myButtonText = "";
            break;
        case "Keep Cat Fed":
            window.open("https://keepcatfed.com", "_self", false);
            myButtonText = "";
            break;
        case "Fort Bend Museum":
            window.open("https://fortbendmuseum.org", "_self", false);
            myButtonText = "";
            break;
        case "George Ranch":
            window.open("https://georgeranch.org", "_self", false);
            myButtonText = "";
            break;
        case "RRM":
            window.open("https://rosenbergrrmuseum.org", "_self", false);
            myButtonText = "";
            break;
    }
}

document.addEventListener('click', (event) => {
    executeButton(event.target.value);
});