/*
Nama 	: Muhammad Rozin Asy Syaddad
NIM 	: 120140006
Kelas 	: Pemrograman WEB RC
*/
// Membuat teks kedalam Id / Class HTML tertentu
const poin1 = document.getElementById('poin1')
const teks = document.createTextNode('Membuat teks kedalam Tag div yang memiliki atribut id="poin1"')

poin1.appendChild(teks)

// Membuat element HTML kedalam Id / Class HTML tertentu
const poin2 = document.getElementById('poin2')
const elemenTambahan = document.createElement('p')

poin2.appendChild(elemenTambahan)

elemenTambahan.innerHTML = 'Membuat elemen Tag p kedalam Tag div yang memiliki id="poin2"'

// Membuat element yang dinamis berdasarkan event handler tertentu
const poin3 = document.getElementById('poin3')

var angka = 0

const tombol = document.createElement('button')
const teksTombol = document.createTextNode('Klik!')

tombol.appendChild(teksTombol)
poin3.appendChild(tombol)

tombol.onclick = function () {
	const elemenBaru = document.createElement('p')

	poin3.appendChild(elemenBaru)

	if (angka === 0) {
		elemenBaru.innerHTML = 'Membuat elemen Tag p saat tombol diklik'
		angka++
	}else {
		elemenBaru.innerHTML = 'elemen Tag p ke-' + angka++
	}
}