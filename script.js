window.addEventListener('load',()=>{
   fetchapi("fuck")
})


async function fetchapi(word){
let data = await fetch(`https://api.dictionaryapi.dev/api/v1/entries/en/${word}`)
let info =  await data.json();
console.log(info);
const meanings =info[0].meaning;
let dis=document.querySelector('h1');

for (let index = 0; index < meanings.noun.length; index++) {
   console.log(`defination:${meanings.noun[index].definition}`);
   dis.innerHTML=`defination:${meanings.noun[index].definition}`
}



}