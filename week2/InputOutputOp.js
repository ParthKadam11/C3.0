const fs = require("fs");

const content1 = fs.readFile("week2/a.txt", "utf-8");//Asynchronously Reading(When this line runs program stops execution until process in this line is completed)
console.log(content1);

const content2 = fs.readFileSync("week2/b.txt","utf-8");//Synchronously Reading(Sould Not Use in most cases)
console.log(content2);
//Since this program is I/O bound speed depends on hardware like cpu ram storage etc