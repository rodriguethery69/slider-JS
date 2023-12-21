// let btn = document.querySelectorAll('.btn');  //DÉFINIR btn COMME tous les éléments avec la classe "btn" 
// let img = document.querySelectorAll('.slider ul li');  //DÉFINIR img COMME tous les éléments avec la classe "btn" 

// // tableau img = <[0, 1, 2, 3, 4]>

// for (let i = 0; i < btn.length; i++) {  //POUR CHAQUE bouton dans btn FAIRE


//   btn[i].addEventListener('click', (e)=>{  //LORSQUE bouton est cliqué FAIRE

//     const imgActive = document.querySelector('.active');  //DÉFINIR imgActive COMME l'élément avec la classe "active"
//     const curentIndex = [...img].indexOf(imgActive);  //DÉFINIR curentIndex COMME la position de imgActive dans la liste img
//     const calc = btn[i].id == 'next' ? 1 : -1;   //DÉFINIR calc COMME 1 SI l'identifiant du bouton est "next", SINON DÉFINIR calc COMME -1
//     let index = curentIndex + calc;  //DÉFINIR index COMME curentIndex + calc

//     if(curentIndex >= img.length - 1 && btn[i].id == 'next') index = 0;  //SI curentIndex est égal à la longueur de img -1 ET l'identifiant du bouton est "next" ALORS DÉFINIR index COMME 0
//     if(curentIndex == 0 && btn[i].id == 'prev') index = img.length - 1;  //SI curentIndex est 0 ET l'identifiant du bouton est "prev" ALORS DÉFINIR index COMME la longueur de img -1

//     img[index].classList.add('active'); //AJOUTER la classe "active" à img[index]
//     imgActive.classList.remove('active'); //RETIRER la classe "active" de imgActive

//   })
// }





let btn = document.querySelectorAll('.btn');  //DÉFINIR btn COMME tous les éléments avec la classe "btn" 
let img = document.querySelectorAll('.slider ul li');  //DÉFINIR img COMME tous les éléments avec la classe "btn"


for (let i = 0; i < btn.length; i++) {  //POUR CHAQUE bouton dans btn FAIRE


   btn[i].addEventListener('click', (e)=>{  //LORSQUE bouton est cliqué FAIRE

    const imgActive = document.querySelector('.active');  //DÉFINIR imgActive COMME l'élément avec la classe "active"
    const curentIndex = [...img].indexOf(imgActive);  //DÉFINIR curentIndex COMME la position de imgActive dans la liste img
    const calc = btn[i].id == 'next' ? 1 : -1;   //DÉFINIR calc COMME 1 SI l'identifiant du bouton est "next", SINON DÉFINIR calc COMME -1
     let index = curentIndex + calc;  //DÉFINIR index COMME curentIndex + calc

   if(curentIndex >= img.length - 1 && btn[i].id == 'next') index = 0;  //SI curentIndex est égal à la longueur de img -1 ET l'identifiant du bouton est "next" ALORS DÉFINIR index COMME 0
   // if(curentIndex == 0 && btn[i].id == 'prev') index = img.length - 1;  //SI curentIndex est 0 ET l'identifiant du bouton est "prev" ALORS DÉFINIR index COMME la longueur de img -1

     img[index].classList.add('active'); //AJOUTER la classe "active" à img[index]
     imgActive.classList.remove('active'); //RETIRER la classe "active" de imgActive

  })
}
let btn = document.querySelector('.burger'); //.DÉFINIR btn COMME élément du DOM avec la classe "burger"
let navbar = document.querySelector('.navbar');//DÉFINIR navbar COMME élément du DOM avec la classe "navbar"
let itext = document.getElementById('itext');//DÉFINIR itext et ihtml COMME éléments du DOM affichant le code hexadécimal trois lignes 
let ihtml = document.querySelector('#ihtml'); // DÉFINIR itext et ihtml COMME éléments du DOM affichant le code hexadécimal de la croix

itext.innerText = "le code hexadecimale pour la croix est &#x2715;"
ihtml.innerHTML = "le code hexadecimale pour la croix est &#x2715;"

btn.addEventListener('click', ()=>{     //ATTACHER un événement 'click' à btn

    navbar.classList.toggle('active');   //TOGGLE la classe "active" sur navbar à chaque clic sur btn
  
    if (navbar.classList.contains('active')) {    //SI navbar a la classe "active" ALORS affiche une croix sur btn SINON affiche trois lignes horizontales sur btn
      btn.innerHTML = "&#x2715;";  // croix
    } else {
      btn.innerHTML = "&#x2630;";  // 3 lignes
    }
  
  })
// 