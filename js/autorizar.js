export async function verificarAutenticacao() {
    try {
      // Obtém o token JWT armazenado no localStorage
      const token = localStorage.getItem('jwt');
  
      if (!token) {
        throw new Error("Token não encontrado");
      }
  
      const url = "https://atividade-18.vercel.app/auth"; // Altere com a URL do seu back-end
  
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
  
      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status}`);
      }
  
      const data = await res.json();
      console.log('Autenticação bem-sucedida:', data);
      return true;
    } catch (error) {
      console.error(error);
      //window.location.href = 'login.html'; // Redireciona para a página de login
    }
  }