// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
    //sort array
    let sortedArr = arr.sort();
    //song count and playlist time variables
    let songCount = 0;
    let playlistTime = 60;
    //loop through songs in sortedArr
    for (let i = 0; i < sortedArr.length; i++) {
        let song = sortedArr[i]
        //if next song would make playlist go past 60 minutes, return
        if (playlistTime - song < 0) {
            return songCount;
        }
        //otherwise, subtract song length from playlistTime, and add 1 to songCount
        else {
            songCount++;
            playlistTime -= song;
        } 
    }
    //if out of songs, return
    return songCount;
};

//* a bit tricky
