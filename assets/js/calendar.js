const days = document.getElementsByClassName("day");

console.log("ENTERED JS SCRIPT");
console.log(days);

const today = new Date()

for (const day of days) {
    const id = day.id.replace("day", "");

    if (today.getDate() === parseInt(id)) {
        doors = day.getElementsByClassName("door-closed");
        
        day.addEventListener("click", event => {
            // console.log("test")
            doors[0].setAttribute("class", "door-open")
        });
        console.log(id);
    }
}