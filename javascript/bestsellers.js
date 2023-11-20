function openTab(evt, tabName) {
     
    let i, bestsellers__tab-content, bestsellers__tabs-button;
    bestsellers__tab-content = document.getElementsByClassName("bestsellers__tab-content");
    for (i = 0; i < bestsellers__tab-content.length; i++) {
        bestsellers__tab-content[i].style.display = "none";
    }

    bestsellers__tabs-button = document.getElementsByClassName("bestsellers__tabs-button");
    for (i = 0; i < bestsellers__tabs-button.length; i++) {
        bestsellers__tabs-button[i].className = bestsellers__tabs-button[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}