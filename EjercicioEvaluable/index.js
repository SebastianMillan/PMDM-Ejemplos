$(document).ready(() => {

    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/planets",
    }).done(respuesta => {
        listaPlanetas = respuesta.results;
        listaPlanetas.forEach(planeta => {
            var templatePlanetas = `<div class="col-3 mb-2">
                        <div class="planeta text-center" cont="${listaPlanetas.indexOf(planeta)}">
                            <span class="fs-4">${planeta.name}</span>
                        </div>
                    </div>`;

            $('#listaPlanetas').append(templatePlanetas);


        });

        $('.planeta').click(function () {
            var idPlaneta = $(this).attr("cont");
            console.log(idPlaneta);
            $('#detalle').modal("show");
            $('#namePlanet').text(listaPlanetas[idPlaneta].name);
            $('#imgPlaneta').attr("src", "https://starwars-visualguide.com/assets/img/planets/" + idPlaneta + ".jpg")
        });

    });


});