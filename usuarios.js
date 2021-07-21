var enviar = document.querySelector("#adicionar-usuario");
enviar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

	var email = form.email.value;
	var usuario = form.usuario.value;
	var senha = form.senha.value;
	

// Criando novos campos na tabela para inserir novos usuários
// A função criadora de elementos é .createElement()

		var usuariosTr = document.createElement("tr");

	    var usuarioTd = document.createElement("td");
	    var emailTd = document.createElement("td");
	    var senhaTd = document.createElement("td");

// Inserindo as informações digitadas pelo usuário nos campos da tabela

    	usuarioTd.textContent = usuario;
		emailTd.textContent = email;
		senhaTd.textContent = senha;

// Inserindo os campos filhos dentro da tabela
// Adicionando elementos na página e dentro de outros elementos com a função appendChild()

		usuariosTr.appendChild(usuarioTd);
		usuariosTr.appendChild(emailTd);
		usuariosTr.appendChild(senhaTd);
// Agora, no momento em que preenchemos os dados do formulário e clicamos em Adicionar, o usuário é adicionado à tabela!

		var tabela = document.querySelector("#tabela-usuarios");

    	tabela.appendChild(usuariosTr);
		
		console.log(usuario);
    	console.log(email);
    	console.log(senha);

    	form.reset();
});