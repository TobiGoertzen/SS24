let subjects: string = "Frank"; "Claire"; "Doug"; "Zoe"; "Lucas"; "Tom";
let predicates: string = "hasst"; "liebt"; "tötet"; "tadelt"; "bedroht"; "sucht";
let objects: string = "Geschenke"; "Aufmerksamkeit"; "eine Verschwörung"; "die Reporter"; "den Präsidenten"; "Abgeordnete";

for (let i = 6; i>= 1; i--) {
    console.log(i);
    const verse: string = getVerse([subjects], [predicates], [objects]);
    console.log(verse);
}

function getVerse(_subjects: string[], _predicates: string[], _objects: string[]) {
    const randomSubjectIndex: number = Math.floor(Math.random() * subjects.length);
    const removedSubject: string[] = subjects.splice(randomSubjectIndex, 1);
    const randomSubject: string = removedSubject[0];

    const randomPredicateIndex: number = Math.floor(Math.random() * predicates.length);
    const removedPredicate: string[] = predicates.splice(randomPredicateIndex, 1);
    const randomPredicate: string = removedPredicate[0];

    const randomObjectIndex: number = Math.floor(Math.random() * objects.length);
    const removedObject: string[] = objects.splice(randomObjectIndex, 1);
    const randomObject: string = removedObject[0];

    const verse: string = {randomSubject, randomPredicate, randomObject};
    return verse;
}

const result: string = getVerse([subjects], [predicates], [objects]);
console.log(result);