// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce
let poleJmen = ["Markéta","Kateřina","Júlia","Lucie","Aneta","Veronika","Petra","Olga"];

vypisText(poleJmen);
// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0
vypisText(poleJmen[2]);

// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length
let pocetJmen = 
vypisText(`Počet jmen v poli: ${poleJmen.length}`)

// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.
poleJmen.forEach(function(ele,idx){
  vypisText(`${idx}. ${ele}`)
})

// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)
poleJmen.push('Tereza')
vypisText(poleJmen);

// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()
let prvniJmeno = poleJmen[0]
let posledniJmeno = poleJmen[poleJmen.length -1]
poleJmen.pop(0)
poleJmen.shift(poleJmen.length -1,1)
vypisText(`První jméno: ${prvniJmeno}`);
vypisText(`Poslední jméno: ${posledniJmeno}`);
vypisText(poleJmen);

// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}