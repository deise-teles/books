// Mostrar o id Home
function mostraDisplayHome() {
    let displayHome = document.getElementById("displayHome")
    displayHome.style.display = "flex"
    let displayCadastro = document.getElementById("displayCadastro")
    displayCadastro.style.display = "none"
    let displayEntrar = document.getElementById("displayEntrar")
    displayEntrar.style.display = "none"
  }
  // Mostrar o id Cadastro
  function mostraDisplayCadastro() {
    let displayHome = document.getElementById("displayHome")
    displayHome.style.display = "none"
    let displayCadastro = document.getElementById("displayCadastro")
    displayCadastro.style.display = "flex"
    let displayEntrar = document.getElementById("displayEntrar")
    displayEntrar.style.display = "none"
  }
  // Mostrar o id Entrar
  function mostraDisplayEntrar() {
    let displayHome = document.getElementById("displayHome")
    displayHome.style.display = "none"
    let displayCadastro = document.getElementById("displayCadastro")
    displayCadastro.style.display = "none"
    let displayEntrar = document.getElementById("displayEntrar")
    displayEntrar.style.display = "flex"
  }
  
  // Botão: Display Home para Display Cadastro
  let bCadastro = document.getElementById("btCadastro")
  bCadastro.onclick = botao_cadastro
  function botao_cadastro(e) {
    let b_cadastro = parseInt(e.target.innerHTML)
    mostraDisplayCadastro()
  }
  // Botão: Display Home para Display Login
  let bEntrar = document.getElementById("btEntrar")
  bEntrar.onclick = botao_Login
  function botao_Login(e) {
    let b_entrar = parseInt(e.target.innerHTML)
    mostraDisplayEntrar()
    mostrarLivrosCadastrados(e)
  }
  
  //Mostrar Baseados em Fatos Reais
  function mostraFatosReais() {
    let displayFatosReais = document.getElementById("fatos_reais")
    displayFatosReais.style.display = "flex"
    let displayFiccao = document.getElementById("ficcao")
    displayFiccao.style.display = "none"
    let displayRomance = document.getElementById("romance")
    displayRomance.style.display = "none"
    let displayTerror = document.getElementById("terror")
    displayTerror.style.display = "none"
  }
  //Mostrar Ficção
  function mostraFiccao() {
    let displayFatosReais = document.getElementById("fatos_reais")
    displayFatosReais.style.display = "none"
    let displayFiccao = document.getElementById("ficcao")
    displayFiccao.style.display = "flex"
    let displayRomance = document.getElementById("romance")
    displayRomance.style.display = "none"
    let displayTerror = document.getElementById("terror")
    displayTerror.style.display = "none"
  }
  //Mostrar Romance
  function mostraRomance() {
    let displayFatosReais = document.getElementById("fatos_reais")
    displayFatosReais.style.display = "none"
    let displayFiccao = document.getElementById("ficcao")
    displayFiccao.style.display = "none"
    let displayRomance = document.getElementById("romance")
    displayRomance.style.display = "flex"
    let displayTerror = document.getElementById("terror")
    displayTerror.style.display = "none"
  }
  //Mostrar Terror
  function mostraTerror() {
    let displayFatosReais = document.getElementById("fatos_reais")
    displayFatosReais.style.display = "none"
    let displayFiccao = document.getElementById("ficcao")
    displayFiccao.style.display = "none"
    let displayRomance = document.getElementById("romance")
    displayRomance.style.display = "none"
    let displayTerror = document.getElementById("terror")
    displayTerror.style.display = "flex"
  }
  // Evento: Mostrar os livros Baseados em Fatos Reais
  let bBF = document.getElementById("pBF")
  bBF.onclick = botaoFatosReais
  function botaoFatosReais(e) {
    let b_BF = parseInt(e.target.innerHTML)
    mostraFatosReais()
  }
  // Evento: Mostrar os livros de Ficção
  let bF = document.getElementById("pF")
  bF.onclick = botaoFiccao
  function botaoFiccao(e) {
    let b_F = parseInt(e.target.innerHTML)
    mostraFiccao()
  }
  // Evento: Mostrar os livros de Romance
  let bR = document.getElementById("pR")
  bR.onclick = botaoRomance
  function botaoRomance(e) {
    let b_R = parseInt(e.target.innerHTML)
    mostraRomance()
  }
  // Evento: Mostrar os livros de Terror
  let bT = document.getElementById("pT")
  bT.onclick = botaoTerror
  function botaoTerror(e) {
    let b_T = parseInt(e.target.innerHTML)
    mostraTerror()
  }
  
  //Função para guardar os valores dentro das variaveis quanod clicarmos no botão 'confirmacadastro'
  function getLivros(e) {
    let nome = document.getElementById("uNome").value
    let autor = document.getElementById("uAutor").value
    let editora = document.getElementById("uEditora").value
    let qtdPg = document.getElementById("uQtd").value
    mostraDisplayHome()
    alert("Livro cadastrados com sucesso.")
  }
  let confirmaCadastro = document.getElementById("cadastroFim")
    confirmaCadastro.onclick = getLivros
  
  function mostrarLivrosCadastrados(e){
    e.preventDefault()
    let display = document.getElementById("displayCadastrados")
    let livro = getLivros
    display.innerHTML = "<br>&nbsp&nbsp Nome: " + livro.nome + "<br>&nbsp&nbsp Autor: " + livro.autor + "<br>&nbsp&nbsp Editora: " + livro.editora + "<br>&nbsp&nbsp Quantidade de páginas: " + livro.qtdPg + "<br>"
  }
  
  
  /*let display = document.getElementById("candidatoDigitado") 
      display.innerHTML = "&nbsp&nbspNome: " + candidato.nome + "<br>&nbsp&nbspPartido: " + candidato.partido + "<br>&nbsp&nbspNumero: " + candidato.numero + "<br>"*/