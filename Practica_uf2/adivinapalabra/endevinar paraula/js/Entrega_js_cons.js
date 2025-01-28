// constant asociades al HTML
const boto = document.getElementById('btn_1');
const m_pista = document.getElementById('m_pista');
const possib = document.querySelector('#m_posibilitat');
const errors = document.querySelector('#m_lletres_erronies');
const lletra_u = document.querySelector('#m_lletres_utilitzades');
const m_error = document.querySelector('#missatge_error');
// const paraulaok = document.querySelector('#paraula_out');
const lletres = document.getElementById('lletres');


// variables de treball
let conta_l = 0;   // numero de paraules dins del JSON (registres)
let conta_pa = 0;  // numero aleatori per escollir la paraula
let paraula_ = ""; // paraula seleccionada
let conta_po = 6;  // contador de les posibilitata ofertes
let l_error = [];  // recull de les lletres erroneas
let l_ok = [];     // recull de les lletres correctes
let lletra_i = ""; // lletra introduida
let paraula = "";
let paraula_ok = [];
let paraula_ar = [];
let joc = true;
let divsLletra = [];
divsLletra = document.getElementsByClassName("lletra");