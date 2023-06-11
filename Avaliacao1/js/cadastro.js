function darkMode(el) {
    const iconeLua = document.getElementById('iconeLua');

    if (el.checked) {
        document.body.style.backgroundColor = "black";
        alterarLabels("white", "cursive");
        alterarInputs("#3a3a3d", "white");
        alterarBotaoEnviar(false, "#3a3a3d");
        iconeLua.style.color = 'white';
    } else {
        document.body.style.backgroundColor = "white";
        alterarLabels("black", "Segoe UI");
        alterarInputs("white", "black");
        alterarBotaoEnviar(true, "#0d6efd");
        iconeLua.style.color = 'black';
    }
}

function alterarBotaoEnviar(addClassPrimary, backgroundColor) {
    const botaoSubmit = document.getElementById('btnCadastrar');

    if (!addClassPrimary) {
        botaoSubmit.classList.remove("btn-primary");
        botaoSubmit.style.color = "white";
        botaoSubmit.style.borderRadius = "0";
    } else {
        botaoSubmit.classList.add("btn-primary");
        botaoSubmit.style.borderRadius = "0.25rem";
    }

    botaoSubmit.style.backgroundColor = backgroundColor;
}

function alterarLabels(color, fonte) {
    const elLabels = document.getElementsByClassName("lblCadastro");

    Array.from(elLabels).forEach(elLabel => {
        elLabel.style.color = color;
        elLabel.style.fontFamily = fonte;
    });
}

function alterarInputs(backgroundColor, textColor) {
    const inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(input => {
        input.style.backgroundColor = backgroundColor;
        input.style.color = textColor;
    });
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}