import svaghi from "./modul/seconda-funzione.js";
import identity from "./modul/prima-funzione.js";

// console.log(svaghi("playstation", "palestra", "cinema"));
// console.log(identity("uno", "due"))



const myFunction = () => {
    const {firstName, secondName} = identity("francesco", "tullio");
    // console.log(firstName, secondName);
    const attivita = svaghi("playstation", "lettura", "palestra");
    console.log(attivita)
    const result = {fullName: (firstName + " " + secondName),
                    hobbies: attivita.hobbies}
    return result
    }


console.log(myFunction());