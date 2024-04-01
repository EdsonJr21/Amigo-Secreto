let amigos = [];

function adicionar(){
  let nomeAmigo = document.getElementById("nome-amigo");
  if (nomeAmigo.value == ""){
    alert("Por favor, insira um nome!");
    return;
  }
  if(amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.value.toLowerCase())){
    alert("Este amigo já existe na lista.");
    return;
  }

  let lista = document.getElementById("lista-amigos");
  amigos.push(nomeAmigo.value);
  if (lista.textContent == ""){
    lista.textContent = nomeAmigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + nomeAmigo.value;
  }
  nomeAmigo.value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("É necessário ter pelo menos 4 amigos para sortear!");
    return;
  }

  embaralhar(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    let amigoAtual = amigos[i];
    let proximoAmigo = amigos[(i + 1) % amigos.length];
    sorteio.innerHTML += amigoAtual + " --> " + proximoAmigo + "<br/>";
  }
}

function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = lista[i];
    lista[i] = lista[j];
    lista[j] = temp;
  }
}

function reiniciar(){
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML="";
}

function remover(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  amigos.forEach(function(amigo, index) {
    let listItem = document.createElement("li");
    listItem.textContent = amigo;
    listItem.setAttribute("onclick", `remover(${index})`);
    lista.appendChild(listItem);
  });  
}