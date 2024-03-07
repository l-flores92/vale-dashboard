var menuClicked = 0;

function clickMenu() {
    if (menuClicked == 0) {
        menuClicked += 1;
        return openSidePanel();

    } else if (menuClicked == 1) {
        menuClicked -= 1;
        return closeSidePanel();
    } 
}
function openSidePanel() {
    document.getElementById("sidenavigation").style.width = "100%";
    document.getElementById("sidenavigation").style.backgroundColor = "rgba(35,35,40,0.96)";
}
function closeSidePanel() {
    document.getElementById("sidenavigation").style.width = "0px";
}