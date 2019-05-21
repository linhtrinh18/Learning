import React from 'react';
import { connect } from 'react-redux';

// Use function is enough

const songDetail = ({song}) => { // Use destructure the props use (props) ==> {song }
    console.log(song)
    if (!song) {
        return <div>Select whatever song you like</div>
    }
    return (
    <div>
        <h3>Detail for</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
    
    </div>
    );
}


const mapStateToProps = (state) => {
    return { song: state.selectedSong}
}


//Do not forget to export any functional or class components
export default connect(mapStateToProps)(songDetail);  