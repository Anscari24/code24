//
function eslletra(lletra) {
    return lletra.length === 1 && lletra.match(/[a-z]/i);
};

//

function inici_de_joc() {
    conta_l = listado.length; // recullo el num. de paraules que hi ha
    conta_pa = Math.floor((Math.random() * conta_l)); // es seleciona una de manera aleatoria
    paraula_ = listado[conta_pa];      // recollim la paraula segons l'index aleatori
    l_error = [];   // es vuida el repositori de lletres erroneas
    l_ok = [];     // es vuida el repositori de lletres correctes
    conta_po = 6;
    paraula = paraula_.palabra.toUpperCase();
    // inicialitzem els textos
    m_pista.innerHTML = paraula_.pista;
    possib.innerHTML = conta_po;
    errors.innerHTML = l_error;
    lletra_u.innerHTML = l_ok;
    m_error.innerHTML = "";
    paraula_ok = [];
    paraula_ar = paraula;
    lletres.innerHTML = "";
    for (i = 0; i <= paraula.length - 1; i++) {
        paraula_ok[i] = "";
        lletres.innerHTML += `<div class="lletra">${paraula_ok[i]}</div>`;
    };
    // paraulaok.innerHTML = paraula_ok;
    joc = true;
};