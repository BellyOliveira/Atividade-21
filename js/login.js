const botaoLogin = document.querySelector('#id_do_botao_Entrar_do_formulario');
botaoLogin.addEventListener('click', autenticar);

const areaMensagem = document.getElementById('msg');

async function autenticar(e) {
  e.preventDefault();

  document.getElementById('msg').innerText = "Aguarde... ";

  const dados = {
    email: document.getElementById('id_do_input_do_email').value,
    senha: document.getElementById('id_do_input_do_senha').value
  };

  const url = "https://atividade-18.vercel.app/login"; // URL do seu back-end

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    if (!response.ok) {
      throw new Error("Email/Senha incorretos! - " + response.status);
    }

    const data = await response.json();
    localStorage.setItem('jwt', data.token);

    // Redireciona para a área restrita (home.html) após autenticação bem-sucedida
    window.location.href = 'home.html';
  } catch (error) {
    areaMensagem.style = "color:red";
    areaMensagem.innerHTML = error;
  }
}