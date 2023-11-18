function openTab(evt, tabName) {

    let i, what-we-offer__tab-content, what-we-offer__tabs-button;
    what-we-offer__tab-content = document.getElementsByClassName("what-we-offer__tab-content");
    for (i = 0; i < what-we-offer__tab-content.length; i++) {
        what-we-offer__tab-content[i].style.display = "none";
    }

    
    what-we-offer__tabs-button = document.getElementsByClassName("what-we-offer__tabs-button");
    for (i = 0; i < what-we-offer__tabs-button.length; i++) {
        what-we-offer__tabs-button[i].className = what-we-offer__tabs-button[i].className.replace(" active", "");
    }

    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}