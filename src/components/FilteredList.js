import React from "react";

class FilteredList extends React.Component({
    filterList: function(event){
      var updatedList = this.state.initialItems;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
    },
    getInitialState: function(){
       return {
        initialItems: [
            { id: 0, "title": "It", "director": "Andy Muschietti", "duration": "135", "genre": "Horror", "releaseDate": "08/09/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children.", "trailer": "https://www.youtube.com/watch?v=FnCdOQsX5kc" },
            { id: 1, "title": "Blade runner 2049", "director": "Denis Villeneuve", "duration": "235", "genre": "Sci-Fi", "releaseDate": "06/10/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.", "trailer": "https://www.youtube.com/watch?v=gCcx85zbxz4" },
            { id: 2, "title": "Jigsaw", "director": "Michael Spierig", "duration": "185", "genre": "Horror", "releaseDate": "27/10/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDY1Njk3NV5BMl5BanBnXkFtZTgwMzQ4MjQ4MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "aboutMovie": "Bodies are turning up around the city, each having met a uniquely gruesome demise. As the investigation proceeds, evidence points to one suspect: John Kramer, the man known as Jigsaw, who has been dead for ten years.", "trailer": "https://www.youtube.com/watch?v=vPP6aIw1vgY" }
          ],
         items: []
       }
    },
    componentWillMount: function(){
      this.setState({items: this.state.initialItems})
    },
    render: function(){
      return (
        <div className="filter-list">
          <form>
          <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
          </fieldset>
          </form>
        <List items={this.state.items}/>
        </div>
      );
    }
  }),
  
  var List = React.createClass({
    render: function(){
      return (
        <ul className="list-group">
        {
          this.state.items.map(function(item) {
            return <li className="list-group-item" data-category={item.genre} key={item.id}>{item.title}</li>
          })
         }
        </ul>
      )  
    }
  });
  
  export default FilteredList;