import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        return <div>Songlist</div> 
    }
}


//name the function by convention. you can name it evething you want (myProps, thisIsMyProps)
const mapStateToProps = (state) => {
    // you can get the state from the reducer from those below console.log(state)
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(SongList);