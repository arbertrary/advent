const days = document.getElementsByClassName("day");
const today = new Date()

// When the user clicks the button, open the modal 
for (var day of days) {
  dayPopup(day);
  // legalDay(day);
}

function dayPopup(day) {
  var modal = day.nextElementSibling;
  day.onclick = function () {
    console.log("clicked day");
    modal.style.display = "block";
  }

  var span = modal.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    console.log("clicked close");
    modal.style.display = "none";
  }

  day.addEventListener("keyup", e => {
    // Escape keycode = 27
    if (e.key == "Escape" || e.keyCode == 27) {
      modal.style.display = "none";
    }
  });

  // When the user clicks anywhere outside of the modal, close it
  modal.onclick = function (event) {
    console.log(modal);
    if (event.target !== modal.getElementsByClassName("modal-content")[0]) {
      modal.style.display = "none";
    }
  }
}

function legalDay(day) {
  const id = day.id.replace("day", "");

  if (today.getDate() > parseInt(id)) {
    day.setAttribute("style", "border-color:#1E792C;");

  } else if (today.getDate() == parseInt(id)) {

    day.addEventListener("click", event => {
      day.setAttribute("style", "border-color:#1E792C;");
    });

  } else {
    day.disabled = true;
  }

}
