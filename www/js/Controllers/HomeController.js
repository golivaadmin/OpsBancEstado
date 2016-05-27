var list_noticias = {};
var aux_obj={};
app.controller('HomeController', function($scope,$state) {

    $scope.noticias = [
        {titulo: "Lorem ipsum dolor sit amet",fecha: "28 de abril 2016", src:"http://localhost:8100/img/top-noticias.png",isImg:true,isComentario:true,cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit euismod ex sit amet gravida. Aliquam id tempor ex, vitae sagittis tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Aliquam eleifend tempus tortor, eget fringilla mi. Praesent ornare scelerisque ante, sit amet aliquet ex dictum sit amet. Mauris in porttitor libero. Nam id consequat ex, quis maximus augue. Maecenas neque lorem, faucibus non gravida non, pharetra tristique orci.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
        {titulo: "Lorem ipsum dolor sit amet",fecha: "28 de abril 2016", src:"http://localhost:8100/img/top-noticias.png",isImg:true,isComentario:true,cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit euismod ex sit amet gravida. Aliquam id tempor ex, vitae sagittis tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Aliquam eleifend tempus tortor, eget fringilla mi. Praesent ornare scelerisque ante, sit amet aliquet ex dictum sit amet. Mauris in porttitor libero. Nam id consequat ex, quis maximus augue. Maecenas neque lorem, faucibus non gravida non, pharetra tristique orci.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
        {titulo: "Lorem ipsum dolor sit amet",fecha: "28 de abril 2016", src:"http://localhost:8100/img/top-noticias.png",isImg:true,isComentario:true,cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit euismod ex sit amet gravida. Aliquam id tempor ex, vitae sagittis tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Aliquam eleifend tempus tortor, eget fringilla mi. Praesent ornare scelerisque ante, sit amet aliquet ex dictum sit amet. Mauris in porttitor libero. Nam id consequat ex, quis maximus augue. Maecenas neque lorem, faucibus non gravida non, pharetra tristique orci.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]},
    ];

    list_noticias = $scope.noticias;

    $scope.ultimo_minuto = [
        {titulo: "Ultimo minuto" , cuerpo: "Dadores de sangre para Jaime Corrales de garantias estatales" , fecha: "16 mayo a las 12:00"},
        {titulo: "Ultimo minuto" , cuerpo: "Vemos que el atributo src permite indicar el nombre de la imagen que queramos cargar." , fecha: "16 mayo a las 12Hrs"},
        {titulo: "Ultimo minuto" , cuerpo: "Vemos que el atributo src permite indicar el nombre de la imagen que queramos cargar." , fecha: "16 mayo a las 12Hrs"},
        {titulo: "Ultimo minuto" , cuerpo: "Vemos que el atributo src permite indicar el nombre de la imagen que queramos cargar." , fecha: "16 mayo a las 12Hrs"}
    ];

    $scope.ConEstado = {titulo: "Video",isVideo:true,fecha: "28 de abril 2016", src:"http://localhost:8100/img/top-noticias.png",isImg:false,isComentario:true,cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit euismod ex sit amet gravida. Aliquam id tempor ex, vitae sagittis tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Aliquam eleifend tempus tortor, eget fringilla mi. Praesent ornare scelerisque ante, sit amet aliquet ex dictum sit amet. Mauris in porttitor libero. Nam id consequat ex, quis maximus augue. Maecenas neque lorem, faucibus non gravida non, pharetra tristique orci.",comentarios:[{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"},{nombre:"Marcia",apellido:"Cayetano",comentario:"liquam ullamcorper, metus non facilisis malesuada",hace:"Hace 2 Dias"}]};
    aux_obj = $scope.ConEstado;

    $scope.botones = [
        [{titulo:"Seguimiento Noticioso",go_to:"", icono: "../../img/seguimiento-bn.png" , colorFondo:"#FF0237" },{titulo:"Noticias",go_to:"app.noticias", icono: "../../img/noticias-bn.png" , colorFondo:"#808080" }],
        [{titulo:"Beneficios", go_to:"app.beneficios",icono: "../../img/beneficios-bn.png" , colorFondo:"#FF9A00" },{titulo:"ConEstados TV",go_to:"app.contenidoDetalle", icono: "../../img/videos-bn.png" , colorFondo:"#004C9B" }]
    ];

    $scope.go_to = function(item){



        if(item.titulo === "ConEstados TV"){
            last_contenido = aux_obj;
        }
        $state.go(item.go_to);
    }

    $scope.noticias_detalle = function (item) { // cuando se hace click en header de las fotos/noticias



    };

    $scope.ultimo_minuto_detalle = function (item) {

    }

});
