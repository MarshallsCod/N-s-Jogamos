document.addEventListener('DOMContentLoaded', function() {
    // Adicionando interação ao botão de login
    const loginBtn = document.getElementById('login-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Redirecionando para a página de login...');
            // Aqui você pode adicionar a lógica real de redirecionamento
            // window.location.href = '/login';
        });
    }
    
});