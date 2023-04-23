/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-search-cep').addEventListener('click',function() {
        //AJAX - Asynchronous JS and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        
        xhttp.open('GET', endpoint);
        xhttp.send();
        
    })
})
*/
$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-search-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const button = $(this);
        $(button).find('i').addClass('d-none');
        $(button).find('span').removeClass('d-none');


        $.ajax(endpoint).done(function(answer){
            const street = answer.logradouro;
            const district = answer.bairro
            const city = answer.localidade;
            const state = answer.uf;
            const address = `${street}, ${district} - ${city} - ${state}`;

            $('#address').val(address);

            setTimeout(function(){
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            },200)

        })
    })
})