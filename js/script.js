// Imposto l'evento per generare il ticket al click del button
const generateButton = document.getElementById("generate-ticket");
generateButton.addEventListener("click", ticketGenerate);

// Funzione per la stampa del biglietto
function ticketGenerate() {
  // Dichiaro le mie costanti legate ai valori immessi dall'utente
  const userName = document.getElementById("user-name").value;
  const userKm = parseInt(document.getElementById("user-km").value);
  const userAge = document.getElementById("user-age").value;
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
  } else if (userAge === "adult") {
    document.getElementById("ticket-offer").innerText = "Standard";
  }
  const finalPrice = price - discount;

  // Imposto le constanti per la carrozza e il numero di biglietto
  const ticketNumber = Math.floor(Math.random() * 99999);
  const ticketCarriage = Math.floor(Math.random() * 11 + 1);

  // Stampo tutto a pagina
  document.getElementById("ticket-name").innerText = userName;
  document.getElementById("ticket-price").innerText = `${finalPrice.toFixed(
    2
  )} €`;
  document.getElementById("ticket-number").innerText = ticketNumber;
  document.getElementById("ticket-carriage").innerText = ticketCarriage;
  document.getElementById("ticket-section").classList.add("active");
}

// Imposto l'evento per ricaricare al click del bottone annulla
const reloadButton = document.getElementById("reload-page");
reloadButton.addEventListener("click", function () {
  window.location.reload();
});
