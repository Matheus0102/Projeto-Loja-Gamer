$('#button').on('click', mudarFonte)

function mudarFonte(){
    $('body').css({'font-size': '23px'})
    $('body').fadeOut('2000').fadeIn('2000')
}