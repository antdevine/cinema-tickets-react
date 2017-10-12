import React from 'react';


class MovieInformaton extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/antdevine/cinema-tickets-react/master/src/movies.json')
        .then((Response) => Response.json())
        .then((findresponse) =>
        {
            this.setState({
                data:findresponse.someitem,
            })
            console.log(findresponse.someitem)
        })
    }


    render() {
        return (
        <div>
            {
                this.state.data.map((dynamicData, key) =>
                <div key={dynamicData.thesearecool.neat}>
                    <span>{dynamicData.thesearecool.neat}: </span>
                </div>
                )
            }
        </div>
        )
    }


   


    
}

export default MovieInformaton;