// CREAZIONE DI UN ARRAY PER LA LISTA DELLA SPESA
const list = ['Uova', 'Pecorino', 'Guanciale', 'Pepe', 'Pasta'];
// STAMPA DEL RISULTATO OTTENUTO IN HTML
const list_container = document.getElementById('shipping-list');
// DICHIARAZIONE DELLA VARIABILE i
let i = 0; 
// REALIZZAZIONE DEL CICLO WHILE
while(i < list.length) {
    const li = document.createElement('li');
    li.innerText = list[i];
    list_container.appendChild(li);
    i++;
    
    console.log(li);
}