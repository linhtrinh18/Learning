import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong }  from '../actions' // this action need to intergrate with connect function to handlle properly

class SongList extends Component {
    renderListOfSong () {
        return this.props.songs.map(song => {
            return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button 
                            className="ui button primary"
                            // Send the selectSong(action) to the dispatch and pass through reducers
                            onClick={() => this.props.selectSong(song)}
                            >
                            Select Song
                            </button>
                        </div>
                        <div className="content" >{song.title}</div>
                    </div>
                );
        })
    }
    
    render() {
        // console.log(this.props)
        // console.log(this.props) -- Use this.props (please remmember the 'this' keyword)
        return (<div className="ui devided list">{this.renderListOfSong()}</div>);
    }
}


//name the function by convention. you can name it evething you want (myProps, thisIsMyProps)
const mapStateToProps = (state) => {
    // you can get the state from the reducer from those below console.log(state)
    console.log(state);
    // return state;
    return { songs: state.songs} // Shorten the syntax for state.song ==> songs
}
// This is the connect before intergate actions into it
// export default connect(mapStateToProps)(SongList);


// Can use ES15 syntax to shortent selectSong 
export default connect(mapStateToProps, {
    selectSong: selectSong // This is an action (you can refer it with this.props)
})(SongList);