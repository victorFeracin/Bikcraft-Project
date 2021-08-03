
if(window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", //nome do atributo data-slide="principal"
        time: 5000 //tempo de transição
    });

    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleForm) {
    new SimpleForm ({
        form: ".formphp", //Seletor do form
        button: "#enviar", //Seletor do botão
        erro: "<div id='form-erro'><h2>Erro no envio</h2><p>Ocorreu um erro. Tente enviar um e-mail para: teste@xxxx.com.</p></div>",
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>"
    });
}