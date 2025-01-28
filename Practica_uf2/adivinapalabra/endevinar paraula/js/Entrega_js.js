
inici_de_joc();

boto.addEventListener("click", () => {
    inici_de_joc();
});

document.addEventListener("keyup", event => {
    if (eslletra(event.key)) {
        lletra_i = event.key.toUpperCase();

        if (!l_ok.includes(lletra_i) && conta_po > 0 && joc) {

            if (!paraula.includes(lletra_i)) {
                l_error.push(lletra_i);
                conta_po -= 1;
            }
            l_ok.push(lletra_i);
            possib.innerHTML = conta_po;
            errors.innerHTML = l_error;
            lletra_u.innerHTML = l_ok;
            if (conta_po > 0) {
                lletres.innerHTML = "";
                for (i = 0; i <= paraula.length - 1; i++) {
                    if (paraula_ar[i] == lletra_i) {
                        paraula_ok[i] = lletra_i;
                        // paraulaok.innerHTML = paraula_ok;                        
                    };
                    lletres.innerHTML += `<div class="lletra">${paraula_ok[i]}</div>`;
                };
                let par_a = paraula_ok.toString();
                let par_b = par_a.replace(/\,/g, '');
                if (paraula_ar == par_b) {
                    lletres.innerHTML = "";
                    for (i in paraula_ok) {
                        lletres.innerHTML += `<div class="lletra encert">${paraula_ok[i]}</div>`;
                    };
                    m_error.innerHTML = `<p> Felicitats!!!! has endeviant la paraula`;
                    joc = false;
                }
            } else {
                lletres.innerHTML = "";
                for (i in paraula_ok) {
                    lletres.innerHTML += `<div class="lletra errada">${paraula_ok[i]}</div>`;
                };
                m_error.innerHTML = `<p> Has superat el nùmero d'intets erronis, la paraula es: <br><br><b>${paraula}</b></p>`;
            };
        };
    };
});
