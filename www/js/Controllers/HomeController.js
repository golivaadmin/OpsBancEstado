app.controller('HomeController', function($scope) {

    $scope.noticias = [
        {titulo: "Lorem ipsum dolor sit amet", src:"http://localhost:8100/img/top-noticias.png"},
        {titulo: "Lorem ipsum dolor sit amet", src:"http://localhost:8100/img/top-noticias.png"},
        {titulo: "Lorem ipsum dolor sit amet", src:"http://localhost:8100/img/top-noticias.png"},
    ];

    $scope.ultimo_minuto = [
        {titulo: "Ultimo minuto" , cuerpo: "Lorem ipsum dolor sit amet" , fecha: "16 mayo a las 12Hrs"},
        {titulo: "Ultimo minuto" , cuerpo: "Lorem ipsum dolor sit amet" , fecha: "16 mayo a las 12Hrs"},
        {titulo: "Ultimo minuto" , cuerpo: "Lorem ipsum dolor sit amet" , fecha: "16 mayo a las 12Hrs"},
        {titulo: "Ultimo minuto" , cuerpo: "Lorem ipsum dolor sit amet" , fecha: "16 mayo a las 12Hrs"}
    ];

    $scope.botones = [
        [{titulo:"Seguimiento Noticioso", icono: "" , colorFondo:"grey" },{titulo:"Beneficios", icono: "" , colorFondo:"yellow" }],
        [{titulo:"ConEstado TV", icono: "" , colorFondo:"blue" },{titulo:"Concurso interno", icono: "" , colorFondo:"red" }]
    ];

    $scope.noticias_detalle = function (item) { // cuando se hace click en header de las fotos/noticias



    };

    $scope.ultimo_minuto_detalle = function (item) {

    }

});
