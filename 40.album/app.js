"use strict";
//define the make_album
function make_album(artist_name, album_tittle, tracks) {
    let albuml = {
        artist: artist_name,
        title: album_tittle,
    };
    if (tracks) {
        albuml.tracks = tracks;
    }
    return albuml;
}
let album1 = make_album("Hamad", "album tittle1");
let album2 = make_album("Nazia", "album tittle2");
let album3 = make_album("junade", "album tittle3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
