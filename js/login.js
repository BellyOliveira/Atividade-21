const botaoLogin = document.querySelector('#Entrar');
botaoLogin.addEventListener('click', autenticar);

const areaMensagem = document.getElementById('msg');

async function autenticar(e) {
  e.preventDefault();

  document.getElementById('msg').innerText = "Aguarde... ";

  const dados = {
    email: document.getElementById('email').value,
    senha: document.getElementById('senha').value
  };

  const url = "https://atividade-18-six.vercel.app/login"; // URL do seu back-end

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