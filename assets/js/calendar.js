const days = document.getElementsByClassName("day");

console.log("ENTERED JS SCRIPT");
console.log(days);

const today = new Date()

for (const day of days) {
    const id = day.id.replace("day", "");


    if (today.getDate() === parseInt(id)) {
        console.log(id);
    }
}