"use strict";
let subjects = "Frank";
"Claire";
"Doug";
"Zoe";
"Lucas";
"Tom";
let predicates = "hasst";
"liebt";
"tötet";
"tadelt";
"bedroht";
"sucht";
let objects = "Geschenke";
"Aufmerksamkeit";
"eine Verschwörung";
"die Reporter";
"den Präsidenten";
"Abgeordnete";
for (let i = 6; i >= 1; i--) {
    console.log(i);
    const verse = getVerse([subjects], [predicates], [objects]);
    console.log(verse);
}
function getVerse(_subjects, _predicates, _objects) {
    const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
    const removedSubject = subjects.splice(randomSubjectIndex, 1);
    const randomSubject = removedSubject[0];
    const randomPredicateIndex = Math.floor(Math.random() * predicates.length);
    const removedPredicate = predicates.splice(randomPredicateIndex, 1);
    const randomPredicate = removedPredicate[0];
    const randomObjectIndex = Math.floor(Math.random() * objects.length);
    const removedObject = objects.splice(randomObjectIndex, 1);
    const randomObject = removedObject[0];
    const verse = { randomSubject, randomPredicate, randomObject };
    return verse;
}
const result = getVerse([subjects], [predicates], [objects]);
console.log(result);
//# sourceMappingURL=script.js.map