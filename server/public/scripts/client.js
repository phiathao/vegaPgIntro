$( document ).ready( readyNow );

function addSong(){
    const objectToSend = {
        artist: $('#artistIn').val(),
        artist: $('#publishedIn').val(),
        artist: $('#rankIn').val(),
        artist: $('#trackIn').val(),
    }
    $.ajax({
        method: 'POST',
        url: '/songs',
        data: objectToSend
    }).then(function(response){
        console.log('back from POST', response);
    }).catch(function(err){
        console.log('error with POST', err);
    })
}

function getSong(){
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then(function(response){
        console.log('back from get', response);
    }).catch(function(error){
        console.log('error', error);
    });
}
function readyNow(){
    console.log( 'JQ' );
    $('#addSongButton').on('click', addSong);
} // end readynow