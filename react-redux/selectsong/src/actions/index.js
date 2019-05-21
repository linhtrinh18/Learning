// The action is a plain function (with return)
// Be aware of export default and not default

const selectSong = (song) => {
    //Return an action
    return {
        type : 'SONG_SELECTED',
        payload: song
    }
}

export default selectSong;