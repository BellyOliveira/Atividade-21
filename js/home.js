
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('jwt');
  
    if (!token) {
      // Redireciona para a página de login se o token não estiver presente
      window.location.href = 'login.html';
      return;
    }
  
    const response = await fetch("https://atividade-18-six.vercel.app/auth", {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      // Se a autenticação for bem-sucedida, mostra o conteúdo protegido
      document.getElementById('loading-overlay').style.display = 'none';
      document.getElementById('conteudo-protegido').style.display = 'block';
    } else {
      // Caso contrário, redireciona para o login
      window.location.href = 'login.html';
    }
  });
  