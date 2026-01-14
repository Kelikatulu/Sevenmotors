document.getElementById("calcForm").addEventListener("submit", e => {
  e.preventDefault();

  const value = Number(document.getElementById("value").value);
  const duty = value * document.getElementById("duty").value / 100;
  const excise = (value + duty) * document.getElementById("excise").value / 100;
  const vat = (value + duty + excise) * document.getElementById("vat").value / 100;

  const total = value + duty + excise + vat;

  document.getElementById("result").innerHTML = `
    <p>Duty: KES ${duty.toLocaleString()}</p>
    <p>Excise: KES ${excise.toLocaleString()}</p>
    <p>VAT: KES ${vat.toLocaleString()}</p>
    <h3>Total: KES ${total.toLocaleString()}</h3>
  `;
});
