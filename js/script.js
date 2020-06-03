var usuarios = [{
        nombre: 'Lucy',
        genero: 'F',
        hobby: 'mascotas',
        avatar: 'avatar1.png'
    },
    {
        nombre: 'Maria',
        genero: 'F',
        hobby: 'mascotas',
        avatar: 'avatar2.png'
    },
    {
        nombre: 'Carlos',
        genero: 'M',
        hobby: 'musica',
        avatar: 'avatar3.png'
    },
    {
        nombre: 'Juan',
        genero: 'M',
        hobby: 'deportes',
        avatar: 'avatar4.png'
    },
    {
        nombre: 'Ana',
        genero: 'F',
        hobby: 'musica',
        avatar: 'avatar5.png'
    },
    {
        nombre: 'Esteban',
        genero: 'M',
        hobby: 'deportes',
        avatar: 'avatar6.png'
    },
    {
        nombre: 'Martin',
        genero: 'M',
        hobby: 'deportes',
        avatar: 'avatar7.png'
    }
]
window.addEventListener('load', function () {

    function buscar() {

        var campo_hobby = document.getElementById('hobby');
        var hobby = campo_hobby.value;

        var genero_campo = document.getElementById('genero');
        var selected = genero_campo.selectedIndex;
        var genero = genero_campo.options[selected].value;
        console.log(genero);

        // ejemplo1:
        // var resultadoshtml = '';
        // var numerousuarios = usuarios.length;

        // for (var i = 0; i < numerousuarios; i++) {
        //      resultadoshtml = resultadoshtml + ' ' + usuarios[i].nombre;            
        // }

        // resultados.innerHTML = resultadoshtml;

        var resultadoshtml = '';
        var usuariosnum = usuarios.length;

        for (var i = 0; i < usuariosnum; i++) {
            
            if (genero == 'T' || genero == usuarios[i].genero) {

                if (hobby == '' || hobby == usuarios[i].hobby) {
                    resultadoshtml += '<div class="box"><img src="/images/' + usuarios[i].avatar + '"><div class="texto"><h2> ' + usuarios[i].nombre + ' </h2><p> ' + usuarios[i].hobby + ' </p></div><button class="boton">Agregar amigo</button> </div>';                    
                }                
            }
        }

        resultados.innerHTML = resultadoshtml;

    };

    var resultados = document.getElementById('resultados');
    var boton_genero = document.getElementById('buscarbtn');
    boton_genero.addEventListener('click', buscar);
    buscar();
});