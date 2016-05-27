var last_contenido= {};

app.controller('ContenidoController', function($scope) {

    $scope.Title = last_contenido.titulo;
    $scope.fecha = last_contenido.fecha;
    $scope.cuerpo = last_contenido.cuerpo;
    $scope.isVideo = last_contenido.isVideo;
    $scope.isImg = last_contenido.isImg;
    $scope.isComentario = last_contenido.isComentario;
    $scope.comentarios = last_contenido.comentarios;
    $scope.num_comentarios =  last_contenido.comentarios.length;

});
