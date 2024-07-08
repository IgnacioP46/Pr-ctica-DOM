const products = [
    {
      nombre: 'Rock Transgresivo',
      artista: 'Extremo Duro',
      precio: 20,
      sello: 'Discos Rizos',
      imagen: './assets/Extremo Duro - Rock Transgresivo.jpg',
      spotify: 'https://open.spotify.com/embed/track/4Qn4NJZZhMQVxVROSb0Je1?utm_source=generator&theme=0',
      genero: 'rock'
    },
    {
      nombre: 'And Justice For All',
      artista: 'Metallica',
      precio: 25,
      sello: 'Discos Rizos',
      imagen: './assets/Metalica - And Justice For All.jpg',
      spotify: `https://open.spotify.com/embed/track/5IX4TbIR5mMHGE4wiWwKW0?utm_source=generator&theme=0`,
      genero: 'rock'
    },
    {
      nombre: 'Bremen no existe',
      artista: 'Biznaga',
      precio: 20,
      sello: 'Discos Rizos',
      imagen: './assets/Biznaga - Bremen no existe.jpg',
      spotify: 'https://open.spotify.com/embed/track/2Gyl6PbDuegfFqroGZAEVE?utm_source=generator&theme=0',
      genero: 'rock'
    },{
        nombre: 'Wish you were here',
        artista: 'Pink Floyd',
        precio: 22,
        sello: 'Discos Rizos',
        imagen: './assets/Pink Floyd - Wish you were here.jpg',
        spotify: 'https://open.spotify.com/embed/track/7aE5WXu5sFeNRh3Z05wwu4?utm_source=generator&theme=0',
        genero: 'rock'
      },{
        nombre: 'Back in Black',
        artista: 'AC/DC',
        precio: 15,
        sello: 'Discos Rizos',
        imagen: './assets/Back in black.png',
        spotify: 'https://open.spotify.com/embed/track/2SiXAy7TuUkycRVbbWDEpo?utm_source=generator&theme=0',
        genero: 'rock'
      },{
        nombre: 'Paranoid',
        artista: 'Black Sabbath',
        precio: 21,
        sello: 'Discos Rizos',
        imagen: './assets/Black Sabbath - Paranoid.jpg',
        spotify: 'https://open.spotify.com/embed/track/6TYQRlRci6AkVrN9a5C7ne?utm_source=generator&theme=0',
        genero: 'rock'
      },{
        nombre: 'Humbugt',
        artista: 'Arctic Monkeys',
        precio: 20,
        sello: 'Discos Rizos',
        imagen: './assets/Arctic Monkeys - Humbug.jpg',
        spotify: 'https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'Una semana en el motor...',
        artista: 'Los Planetas',
        precio: 14,
        sello: 'Discos Rizos',
        imagen: './assets/los planetas - una semana en el motor de un autobús.jpg',
        spotify: 'https://open.spotify.com/embed/track/0VaaF3Mjm3xwl9uQJbwetH?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'Diamantes',
        artista: 'El columpio asesino',
        precio: 27,
        sello: 'Discos Rizos',
        imagen: './assets/El columpio asesino - Diamantes.jpg',
        spotify: 'https://open.spotify.com/embed/track/4IgIOkHExsdloE3IPgcjmm?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'Alcalá Norte',
        artista: 'Alcalá Norte',
        precio: 19,
        sello: 'Discos Rizos',
        imagen: './assets/Alcalá Norte - Alcalá Norte.jpg',
        spotify: 'https://open.spotify.com/embed/track/6ou443eT6aXOCxcX9Jrnee?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'Carolina Durante',
        artista: 'Carolina Durante',
        precio: 26,
        sello: 'Discos Rizos',
        imagen: './assets/Carolina Durante - Carolina Durante.jpg',
        spotify: 'https://open.spotify.com/embed/track/7nzDOroIGrDwq02tGfR35c?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'Gas Lagrima',
        artista: 'Margarita Quebrada',
        precio: 20,
        sello: 'Discos Rizos',
        imagen: './assets/Margarita Quebrada - Gas Lagrima.jpg',
        spotify: 'https://open.spotify.com/embed/track/6sO7yvh7b4pewSU7uQYlUr?utm_source=generator&theme=0',
        genero: 'indie'
      },{
        nombre: 'BARKHATU',
        artista: 'Chill Mafia',
        precio: 12,
        sello: 'Discos Rizos',
        imagen: './assets/BARKHATU - Chill Mafia.jpg',
        spotify: 'https://open.spotify.com/embed/track/3nmNOh9BzeS76jR6MOUrd4?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Escamas',
        artista: 'VVV [Trippin you]',
        precio: 24,
        sello: 'Discos Rizos',
        imagen: './assets/Invierno Nuclear • VVV [Trippin you].jpg',
        spotify: 'https://open.spotify.com/embed/track/0wK1nvACkwDtDPAL0PmE6E?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Zorra',
        artista: 'Bad Gyal',
        precio: 22,
        sello: 'Discos Rizos',
        imagen: './assets/Zorra - Bad Gyal.jpg',
        spotify: 'https://open.spotify.com/embed/track/0OP1RzrglC008kj79Httv3?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Ultralágrima',
        artista: 'Ultralágrima',
        precio: 28,
        sello: 'Discos Rizos',
        imagen: './assets/Ultralagrima - 500 Balas.jpg',
        spotify: 'https://open.spotify.com/embed/track/202IucX3hlYKrsKQz9mfOF?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Reproches',
        artista: 'Ayax',
        precio: 19,
        sello: 'Discos Rizos',
        imagen: './assets/Reproches - Ayax.jpg',
        spotify: 'https://open.spotify.com/embed/track/7aKXQCV7TaA56bnhXTxJFn?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Cicatrices',
        artista: 'Natos y Waor',
        precio: 15,
        sello: 'Discos Rizos',
        imagen: './assets/Generación perdida - Natos y Waor.jpg',
        spotify: 'https://open.spotify.com/embed/track/0wBzg9W5KJiK3IMjVOaoOf?utm_source=generator&theme=0',
        genero: 'urbano'
      },{
        nombre: 'Estopa',
        artista: 'Estopa',
        precio: 29,
        sello: 'Discos Rizos',
        imagen: './assets/Como Camarón - Estopa.jpg',
        spotify: 'https://open.spotify.com/embed/track/1VB4sadHjFcFklHcZuoROi?utm_source=generator&theme=0',
        genero: 'clasicos'
      },{
        nombre: 'El Vals del Obrero',
        artista: 'Ska-P',
        precio: 20,
        sello: 'Discos Rizos',
        imagen: './assets/El Vals del Obrero - Ska-P.jpg',
        spotify: 'https://open.spotify.com/embed/track/6oytv9amMEx3pxSw9UmEtv?utm_source=generator&theme=0',
         genero: 'clasicos'
      },{
        nombre: 'Naces, Creces, Te Jodes...',
        artista: 'Mama Ladilla',
        precio: 13,
        sello: 'Discos Rizos',
        imagen: './assets/Naces, Creces, Te Jodes y Mueres - Mama Ladilla.jpg',
        spotify: 'https://open.spotify.com/embed/track/2ahUf9ZMcCqgswU7oFZIeB?utm_source=generator&theme=0',
        genero: 'clasicos'
      },{
        nombre: 'Naturaleza Muerta',
        artista: 'Alasca',
        precio: 20,
        sello: 'Discos Rizos',
        imagen: './assets/Alasca - Naturaleza Muerta.jpg',
        spotify: 'https://open.spotify.com/embed/track/4gP89Uk2gEVcmygi6ddRjf?utm_source=generator&theme=0',
        genero: 'clasicos'
      },{
        nombre: 'Desde mi azotea',
        artista: 'Navajita Platea',
        precio: 24,
        sello: 'Discos Rizos',
        imagen: './assets/Desde mi azotea - Navajita Platea,.jpg',
        spotify: 'https://open.spotify.com/embed/track/1JpZMDDAkfhnrO6nXIQZ2g?utm_source=generator&theme=0',
        genero: 'clasicos'
      },{
        nombre: 'La Leyenda Del Tiempo',
        artista: 'Camaron De La Isla',
        precio: 28,
        sello: 'Discos Rizos',
        imagen: './assets/La Leyenda Del Tiempo -  Camaron De La Isla.jpg',
        spotify: 'https://open.spotify.com/embed/track/4HkLNQjAxavV3rwHbbqeHI?utm_source=generator&theme=0',
        genero: 'clasicos'
      },
  ];
  
  function targetasGrupo(product) {
    const targeta = document.createElement('div');
    targeta.classList.add('gallery-item');
  
    const img = document.createElement('img');
    img.src = product.imagen;
    targeta.appendChild(img);
  
    const nombre = document.createElement('h3');
    nombre.textContent = product.nombre;
    targeta.appendChild(nombre);
  
    const artista = document.createElement('p');
    artista.textContent = product.artista;
    targeta.appendChild(artista);
  
    const precio = document.createElement('p');
    precio.textContent = `Precio: ${product.precio}€`;
    targeta.appendChild(precio);
  
    const button = document.createElement('button');
    button.textContent = 'Comprar';
    targeta.appendChild(button);
    //esta parte la busque
    const iframe = document.createElement('iframe');
    iframe.src = product.spotify;
    iframe.width = '250';
    iframe.height = '80';
    iframe.frameBorder = '0';
    iframe.allow = 'encrypted-media';
    targeta.appendChild(iframe);
  
    return targeta;
  }
  
  function displayProducts() {
    products.forEach(product => {
      const gallery = document.getElementById(`${product.genero}-gallery`);
      const productCard = targetasGrupo(product);
      gallery.appendChild(productCard);
    });
  } 
  
  document.addEventListener('DOMContentLoaded', displayProducts);
  