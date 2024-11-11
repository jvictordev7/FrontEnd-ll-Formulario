document.addEventListener('DOMContentLoaded', function () {
    // Coletando os dados do formulário via URL (GET)
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const sobrenome = urlParams.get('sobrenome');
    const email = urlParams.get('email');
    const idade = urlParams.get('idade');

    // Exibindo os dados na página de confirmação
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML = `
        <div><strong>Nome:</strong> ${nome}</div>
        <div><strong>Sobrenome:</strong> ${sobrenome}</div>
        <div><strong>E-mail:</strong> ${email}</div>
        <div><strong>Idade:</strong> ${idade}</div>
    `;

    // Função para salvar os dados em um arquivo .json
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function () {
        const userData = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            idade: idade
        };

        const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.json';
        link.click();
    });
});
