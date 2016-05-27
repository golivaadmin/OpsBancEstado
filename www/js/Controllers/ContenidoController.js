var last_contenido= {};

app.controller('ContenidoController', function($scope) {

        try{$scope.Title = last_contenido.titulo;}catch (e){}
        try{$scope.fecha = last_contenido.fecha;}catch (e){}
        try{$scope.cuerpo = last_contenido.cuerpo;}catch (e){}
        try{$scope.isImg = last_contenido.isImg;}catch (e){}
        try{$scope.isVideo = last_contenido.isVideo;}catch (e){}
        try{$scope.isComentario = last_contenido.isComentario;}catch (e){}
        try{$scope.comentarios = last_contenido.comentarios;}catch (e){}
        try{$scope.num_comentarios =  last_contenido.comentarios.length;}catch (e){}

});
