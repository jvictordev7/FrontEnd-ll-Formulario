const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.querySelector("#email");
const form = document.querySelector("#registro");
const age = document.getElementById("idade");

// Função para mostrar mensagem de erro
const showsError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
};

// Função para mostrar sucesso (quando o campo está correto)
const showsSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.textContent = "";
};

// Checa se a entrada é obrigatória
const isRequired = (value) => (value === "" ? false : true);

// Checa se o comprimento está entre o mínimo e máximo
const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

// Função para validar a idade
const checkAge = () => {
    let valid = false;
    const min = 1, max = 120;

    const ageValue = age.value.trim();

    if (!isRequired(ageValue)) {
        showsError(age, "Idade é um campo obrigatório");
    } else if (!isBetween(ageValue.length, min, max)) {
        showsError(age, `Idade deve ter entre ${min} e ${max}.`);
    } else {
        showsSuccess(age);
        valid = true;
    }
    return valid;
};

// Função para validar o nome
const checkUsername = () => {
    let valid = false;
    const min = 3, max = 50;
    const nameValue = nome.value.trim();
    if (!isRequired(nameValue)) {
        showsError(nome, "Nome não pode ficar em branco.");
    } else if (!isBetween(nameValue.length, min, max)) {
        showsError(nome, `Nome deve ter entre ${min} e ${max} caracteres.`);
    } else {
        showsSuccess(nome);
        valid = true;
    }
    return valid;
};

// Função para validar sobrenome
const checkLastName = () => {
    let valid = false;
    const min = 3, max = 50;
    const sobrenomeValue = sobrenome.value.trim();
    if (!isRequired(sobrenomeValue)) {
        showsError(sobrenome, "Sobrenome não pode ficar em branco.");
    } else if (!isBetween(sobrenomeValue.length, min, max)) {
        showsError(sobrenome, `Sobrenome deve ter entre ${min} e ${max} caracteres.`);
    } else {
        showsSuccess(sobrenome);
        valid = true;
    }
    return valid;
};

// Função para validar o email
const checkEmail = () => {
    let valid = false;
    const emailVal = email.value.trim();
    if (!isRequired(emailVal)) {
        showsError(email, "E-mail não pode ficar em branco.");
    } else {
        showsSuccess(email);
        valid = true;
    }
    return valid;
};

// Evento de submit do formulário
form.addEventListener("submit", function (e) {
    e.preventDefault();  // Evita o envio normal do formulário

    const nomeValue = nome.value.trim();
    const sobrenomeValue = sobrenome.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();

    const isUserNameValid = checkUsername();
    const isLastNameValid = checkLastName();
    const isAgeValid = checkAge();
    const isEmailValid = checkEmail();

    // Se todos os campos forem válidos, redireciona para a página confirmation.html
    if (isUserNameValid && isLastNameValid && isAgeValid && isEmailValid) {
        // Construir a query string para enviar os dados para confirmation.html
        const queryString = `nome=${encodeURIComponent(nomeValue)}&sobrenome=${encodeURIComponent(sobrenomeValue)}&idade=${encodeURIComponent(ageValue)}&email=${encodeURIComponent(emailValue)}`;
        window.location.href = `../confirmation/confirmation.html?${queryString}`;
    }
});
