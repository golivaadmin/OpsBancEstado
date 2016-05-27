app.controller('BeneficiosController', function($scope,$state) {

    $scope.beneficios = [
        { titulo : "EDUCACIÓN", cantidad:3 , src:"../../img/educacion.png" },
        { titulo : "VACACIONES", cantidad:4 ,src:"../../img/vacaciones.png" },
        { titulo : "FAMILIA", cantidad:2 ,src:"../../img/familia.png" },
        { titulo : "DEPORTE", cantidad:4 ,src:"../../img/deportes.png" }
    ];

    $scope.categorias_beneficio = function(item){
        titulo_beneficio_anterior = item.titulo;
        $state.go('app.beneficioslista');
    }

});

var titulo_beneficio_anterior = "";

app.controller('BeneficiosListaController', function($scope,$state) {

    $scope.Title = titulo_beneficio_anterior;

   $scope.beneficios = [
        { titulo : "Cine 3D", likes:12 ,fecha:"28 abril 16", src:"http://localhost:8100/img/cine.png" ,subtitulo:"Cine Planet" ,isVideo:false,isImg:true,isComentario:true, cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, metus a dictum lobortis, mi nisi ultrices augue, pharetra volutpat urna ipsum eu arcu. Donec efficitur velit et pellentesque imperdiet. Donec fermentum velit sed nibh lobortis rhoncus. Curabitur eget dolor commodo leo consectetur porttitor et sed tellus. Sed sit amet rhoncus purus, ut sodales sapien. Suspendisse vehicula rutrum erat, fermentum imperdiet nisi venenatis id." ,comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
        { titulo : "Cine 3D", likes:12 ,fecha:"25 marzo 2016", src:"http://localhost:8100/img/rafting.png" ,subtitulo:"Cine Planet" ,isVideo:false,isImg:true,isComentario:true, cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, metus a dictum lobortis, mi nisi ultrices augue, pharetra volutpat urna ipsum eu arcu. Donec efficitur velit et pellentesque imperdiet. Donec fermentum velit sed nibh lobortis rhoncus. Curabitur eget dolor commodo leo consectetur porttitor et sed tellus. Sed sit amet rhoncus purus, ut sodales sapien. Suspendisse vehicula rutrum erat, fermentum imperdiet nisi venenatis id.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
        { titulo : "Cine 3D", likes:12 ,fecha:"12 febrero 2016", src:"http://localhost:8100/img/cine.png" ,subtitulo:"Cine Planet" ,isVideo:false,isImg:true,isComentario:true, cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, metus a dictum lobortis, mi nisi ultrices augue, pharetra volutpat urna ipsum eu arcu. Donec efficitur velit et pellentesque imperdiet. Donec fermentum velit sed nibh lobortis rhoncus. Curabitur eget dolor commodo leo consectetur porttitor et sed tellus. Sed sit amet rhoncus purus, ut sodales sapien. Suspendisse vehicula rutrum erat, fermentum imperdiet nisi venenatis id.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
        { titulo : "Cine 3D", likes:12 ,fecha:"5 enero 2016", src:"http://localhost:8100/img/rafting.png" ,subtitulo:"Cine Planet" ,isVideo:false,isImg:true,isComentario:true, cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, metus a dictum lobortis, mi nisi ultrices augue, pharetra volutpat urna ipsum eu arcu. Donec efficitur velit et pellentesque imperdiet. Donec fermentum velit sed nibh lobortis rhoncus. Curabitur eget dolor commodo leo consectetur porttitor et sed tellus. Sed sit amet rhoncus purus, ut sodales sapien. Suspendisse vehicula rutrum erat, fermentum imperdiet nisi venenatis id.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
    ];

    $scope.detalle_beneficio = function(item){

        last_contenido = item;
        $state.go('app.contenidoDetalle');

    }

});
