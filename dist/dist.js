let pokemonRepository=function(){let e=[];function a(a){e.push(a)}function b(a){return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){a.imageUrl=b.sprites.front_default,a.height=b.height,a.types=b.types,a.name=b.name}).catch(function(a){console.error(a)})}function c(a){b(a).then(function(){f(a)})}function f(a){let b=document.querySelector('#poke-modal-body'),c=document.querySelector('#poke-modal-title');b.innerHTML='',c.innerHTML='';let d=document.createElement('h1');d.innerText=a.name;let e=document.createElement('img');e.src=a.imageUrl;let f=document.createElement('p');f.innerText='Height: '+a.height,c.appendChild(d),b.appendChild(e),b.appendChild(f)}function d(){return e}return{add:a,getAll:d,addListItem:function(d){let e=document.querySelector('.list-group'),b=document.createElement('li'),a=document.createElement('button');a.innerText=d.name,a.classList.add('btn','btn-custon','col-xl-6','col-md-8','col-11','mx-auto'),b.classList.add('list-group-item'),a.setAttribute('data-target','#modal'),a.setAttribute('data-toggle','modal'),b.appendChild(a),e.appendChild(b),function(a,b){a.addEventListener('click',function(){c(b)})}(a,d)},loadList:function(){return fetch('https://pokeapi.co/api/v2/pokemon/?limit=50').then(function(a){return a.json()}).then(function(b){b.results.forEach(function(b){a({name:b.name,detailsUrl:b.url})})}).catch(function(a){console.error(a)})},loadDetails:b,showDetails:c}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(a){pokemonRepository.addListItem(a)})})