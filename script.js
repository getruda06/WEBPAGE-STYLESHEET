function changeStyle(sheet, element) {
    let style =
    document.getElementById("pagestyle");
    style.href = sheet;
    style.disabled = false;

    let links =
    document.querySelectorAll(".style-link");
    links.forEach(function(link) {
        link.classList.remove("active");
    });
    element.classList.add("active");   
}

function noStyle(element) {
    let style =
     document.getElementById("pagestyle");
     style.disabled = true;

     let links =
    document.querySelectorAll(".style-link");
    links.forEach(function(link) {
        link.classList.remove("active");
    });
    element.classList.add("active");
  
}

