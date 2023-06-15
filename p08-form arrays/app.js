function meuEscopo() {
    const form = document.querySelector('.form');
    const register = document.querySelector('.register');

    const pessoas = [];

    function recebeEventoClicar(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        });

        console.log(pessoas);

        register.innerHTML += `<p><strong>Nome:</strong> ${nome.value}<br><strong>Sobrenome:</strong> ${sobrenome.value}<br><strong>Peso:</strong> ${peso.value}<br><strong>Altura:</strong> ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoClicar);
}
meuEscopo();