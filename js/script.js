// Dichiaro le mie costanti legate ai valori immessi dall'utente
const userName = document.getElementById("user-name").value;
const userKm = parseInt(document.getElementById("user-km").value);
const userAge = document.getElementById("user-age").value;
// Imposto l'evento per generare il ticket al click del button
const generateButton = document.getElementById("generate-ticket");
generateButton.addEventListener("click", ticketGenerate);

// Funzione per la stampa del biglietto
function ticketGenerate() {
  // Calcolo del prezzo del ticket e stampa dei dati
  const price = userKm * 0.21;
  const discountYoung = 20 / 100;
  const discountSenior = 40 / 100;
  let discount = 0;
  if (userAge === "young") {
    discount = price * discountYoung;
    document.getElementById("ticket-offer").innerText = "Young";
  } else if (userAge === "senior") {
    discount = price * discountSenior;
    document.getElementById("ticket-offer").innerText = "Senior";
  } else {
    document.getElementById("ticket-offer").innerText = "Standard";
  }
  const finalPrice = price - discount;

  const ticketNumber = Math.floor(Math.random() * 99999);
  const ticketWagon = Math.floor(Math.random() * 11 + 1);

  document.getElementById("ticket-name").innerText = userName;
  document.getElementById("ticket-price").innerText = `${finalPrice.toFixed(
    2
  )} €`;
  document.getElementById("ticket-number").innerText = ticketNumber;
  document.getElementById("ticket-wagon").innerText = ticketWagon;
  document.getElementById("ticket-section").classList.add("active");
}
