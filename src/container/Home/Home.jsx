import React, {Component} from 'react';
import YoutubeComponent from '../../common/YoutubeComponent/YoutubeComponent';

class Home extends React.Component{
    render(){
        return (
            <div>
            <p>Youtube Component</p>
            <hr/>
            <YoutubeComponent
                time="7.15"
                title="Tutorial React JS #1"
                desc="10x ditonton. 2 hari yang lalu"
                />
            <YoutubeComponent
                time="3.43"
                title="Tutorial React JS #2"
                desc="200x ditonton. 6 hari yang lalu"
                />
            <YoutubeComponent
                time="2.33"
                title="Tutorial React JS #3"
                desc="142x ditonton. 3 hari yang lalu"
                />
            <YoutubeComponent
                time="10.00"
                title="Tutorial React JS #4"
                desc="200x ditonton. 10 hari yang lalu"
                />
            <YoutubeComponent />
            </div>
        )
    }
}

export default Home;