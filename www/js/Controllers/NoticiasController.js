app.controller('NoticiasController', function($scope,$state) {


    $scope.noticias = list_noticias;

    $scope.detalle_noticia = function(item){
        try {
            last_contenido = item;
            $state.go('app.contenidoDetalle');
        }catch (e){ console.log(e) }
    };

});
