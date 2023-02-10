// prvni ukol

let title = "Harry Potter";

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0,5));
console.log(title.slice(title.length - 5, title.length));

// druhy ukol

let email = prompt("Zadej svůj email ve formátu jmeno.prijmeni@domena");
let atIndex = email.indexOf("@");
let jmenoPrijmeni = email.slice(0, atIndex);
let domena = email.slice(atIndex + 1, email.length);

const parsedEmail = {
    userName: jmenoPrijmeni,
    domain: domena
};

let userName = document.querySelector(".userName");
userName.textContent = parsedEmail.userName;

let domain = document.querySelector(".domain");
domain.textContent = parsedEmail.domain;

// treti ukol 
let ulice = prompt("Zadej svou adresu: Ulice");
let cisloDomu = prompt("Zadej svou adresu: cislo domu");
let mesto = prompt("Zadej svou adresu: mesto");
let psc = prompt("Zadej svou adresu: PSČ");

let adresa = document.querySelector(".adresa");

adresa.innerHTML = `
<address>
    <p>${ulice} ${cisloDomu}</p>
    <p>${psc} ${mesto}</p>
</address>
`