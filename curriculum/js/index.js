let curriculum = "./curriculum.json";  
fetch(curriculum)
    .then(response => {
        if (!response.ok) {
            throw new Error("Errore nel recupero del file JSON");
        }
        return response.json();
    })
    .then(data => {
        // Inserisco i dati negli elementi HTML qui
        document.getElementById("nome").innerHTML = `Nome: ${data.nome}`;
        document.getElementById("cognome").innerHTML = `Cognome: ${data.cognome}`;
        document.getElementById("indirizzo_posta_elettronica").innerHTML = `Indirizzo Email: ${data.indirizzo_posta_elettronica}`;
        document.getElementById("cellulare").innerHTML = `cellulare: ${data.cellulare}`
    })
    .catch(error => {
        console.error("Si è verificato un errore:", error); // Mostro eventuali errori in console
    });
