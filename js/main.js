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

/**
 * Function gets called by clickMenu(), from this document
 * Finds element with id "sidenavigation", changes width and background color/opacity.
 */
function openSidePanel() {
    document.getElementById("sidenavigation").style.width = "100%";
    document.getElementById("sidenavigation").style.backgroundColor = "rgba(35,35,40,0.96)";
}

/**
 * Function gets called by clickMenu(), from this document
 * Finds element with id "sidenavigation", changes width to 0px, hides panel.
 */
function closeSidePanel() {
    document.getElementById("sidenavigation").style.width = "0px";
}

/**
 * Function gets called when user clicks on scanQR button on addDevices.html
 * Finds element with id "modal-scanQR", updates display settings.
 */
function scanQR() {
    document.getElementById("modal-scanQR").style.display = "block";
}

/**
 * Function gets called when user clicks on Manual button on addDevices.html
 * Finds element with id "modal-manualAdd", updates display settings.
 */
function manualAdd() {
    document.getElementById("modal-manualAdd").style.display = "block";
}

/**
 * Function gets called when user clicks anywhere on the webapp.
 * Finds elements with id "modal-scanQR" or "modal-manualAdd" and updates display settings.
 * Results in the closing of the modal boxes.
 * @param {any} event
 */
window.onclick = function (event) {
    if (event.target == document.getElementById("modal-scanQR"))
    {
        document.getElementById("modal-scanQR").style.display = "none";
    }
    else if (event.target == document.getElementById("modal-manualAdd"))
    {
        document.getElementById("modal-manualAdd").style.display = "none";
   
