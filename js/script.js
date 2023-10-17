
// Requested info 

// name user
const userName = prompt("Ciao! Benvenuto nel generatore di password. Come ti chiami?");
console.log(userName, typeof userName);

// surname user
const userLastName = prompt(`Perfetto ${userName}, ho bisogno di sapere il tuo cognome. Qual è il tuo cognome?`)
console.log(userLastName, typeof userLastName);

// // last question about fav color 
const userFavouriteColor = prompt("Ultima informazione per terminare: qual è il tuo colore preferito?")
console.log(userFavouriteColor, typeof userFavouriteColor);

// ellaboration password
const password = (`${userName}${userLastName}${userFavouriteColor}21`)
console.log(password)

// output
document.getElementById("passwordgenerator").innerHTML= `${password}`