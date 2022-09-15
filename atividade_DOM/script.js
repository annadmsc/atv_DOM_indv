
// // 1 exe
let random1 = Math.random() * 100
let random2 = Math.random() * 100
let random3 = Math.random() * 100
random1 = random1.toFixed(2)
random2 = random2.toFixed(2)
random3 = random3.toFixed(2)


let table = document.querySelectorAll('#t1  td')

if(random1 > random2 && random1 > random3){
 maior = random1
if( random2 > random3){
      meio = random2
      menor = random3
  }
} else if( random2 > random1 && random2 > random3){
  maior = random2
  if(random1 > random2){
      meio = random1
      menor = random3
  }else if(random3> random1 && random3 > random2){
      maior = random3
      if(random1 > random2){
          meio = random1
          menor = random2
      }
  }
}


table[0].textContent = maior

table[1].textContent = meio

table[2].textContent = menor



//2 exe


// let rgb = document.getElementById('lista-cores').innerHTML;

// let random = Math.random() * 1000
// rgb = `<li>${random} </li>`
// console.log(random);
//  random = random.toFixed(0)
//  if(random > 0 && random < 225 ){
//  switch(random){
//     case 1 :
//         break;
//     case 2 :
//         break;
//     case 3 :
//         break;
//     case 4 :
//         break;
//     case 5 :
//         break;
//     case 6 :
//         break;
//     case 7 :
//         break;
//     case 8 :  
//         break;
//     case 9 :  
//         break;     

//  }
//  }else {

//  }


//4 

let nomes = document.getElementById('lista-nomes')
let nomes_atuz = nomes.querySelectorAll('ul  li ')

let v = nomes_atuz[0].lastChild.textContent.charAt(0);
let l = nomes_atuz[1].lastChild.textContent.charAt(0);
let c = nomes_atuz[2].lastChild.textContent.charAt(0);
let a = nomes_atuz[3].lastChild.textContent.charAt(0);
let j = nomes_atuz[4].lastChild.textContent.charAt(0);
let g = nomes_atuz[5].lastChild.textContent.charAt(0);
let r = nomes_atuz[6].lastChild.textContent.charAt(0);
let k = nomes_atuz[7].lastChild.textContent.charAt(0);
let t = nomes_atuz[8].lastChild.textContent.charAt(0);
let r2 = nomes_atuz[9].lastChild.textContent.charAt(0);
let h = nomes_atuz[10].lastChild.textContent.charAt(0);
let n = nomes_atuz[11].lastChild.textContent.charAt(0);
let s = nomes_atuz[12].lastChild.textContent.charAt(0);
let m = nomes_atuz[13].lastChild.textContent.charAt(0);
let l2= nomes_atuz[14].lastChild.textContent.charAt(0);
let p = nomes_atuz[15].lastChild.textContent.charAt(0);
let k2= nomes_atuz[16].lastChild.textContent.charAt(0);
let a2= nomes_atuz[17].lastChild.textContent.charAt(0);
let h2= nomes_atuz[18].lastChild.textContent.charAt(0);
let l3 = nomes_atuz[19].lastChild.textContent.charAt(0);

let passwd = v + l + c + a + j + g + r + k + t + r2 + h + n + s + m + l2 + p + k2 + a2 + h2 + l3

console.log(passwd)


let teste = document.querySelectorAll('#form-preenchimento')

console.log(teste)


