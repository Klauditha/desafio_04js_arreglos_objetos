const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];

let seccionPropiedades = document.getElementById("Propiedades");
let input_metrosDesde = document.getElementById("input_metrosDesde");
let input_metrosHasta = document.getElementById("input_metrosHasta");
let input_cantCuartos = document.getElementById("input_cantCuartos");
let btnBuscar = document.getElementById("btnBuscar");

seccionPropiedades += `<h4 class="py-3">Total: <span>${propiedadesJSON.length}</span></h4>`
for(let propiedad of propiedadesJSON){
  seccionPropiedades += `<div class="propiedades">`;
  seccionPropiedades += ` <div class="propiedad">`;
  seccionPropiedades += `   <div class="img" style="background-image: url('${propiedad.src}')"></div>`;
  seccionPropiedades += `   <section>`;
  seccionPropiedades += `     <h5>${propiedad.nombre}</h5>`;
  seccionPropiedades += `     <div class="d-flex justify-content-between">`;
  seccionPropiedades += `       <p>Cuartos: ${propiedad.cuartos}</p>`;
  seccionPropiedades += `       <p>Metros: ${propiedad.metros}</p>`;
  seccionPropiedades += `     </div>`;
  seccionPropiedades += `   <section>`;


  
}

function despliegueData(){

} 