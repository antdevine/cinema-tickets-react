import React from 'react';


class MovieInformaton extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://www.daemondesigns.co.uk/jsondata/movies.json')
        .then((Response) => Response.json())
        .then((findresponse) =>
        {
            this.setState({
                data:findresponse.movies,
            })
            console.log(findresponse.movies)
        })
    }


    render() {
        return (
        <div>
            {
                this.state.data.map((dynamicData, key) =>
                <div key={dynamicData.title}>
                    <span>{dynamicData.title} </span>
                    <span>{dynamicData.director} </span>
                    <span>{dynamicData.duration} </span>
                    <span>{dynamicData.genre} </span>
                    <span>{dynamicData.releaseDate} </span>
                    <span><img src={dynamicData.poster} alt={dynamicData.title} /> </span>
                    <span>{dynamicData.aboutMovie} </span>
                </div>
                )
            }
        </div>
        )
    }


   


    
}

export default MovieInformaton;