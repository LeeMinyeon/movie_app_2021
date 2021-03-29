import React from "react";
import "./Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;

        if(location.state===undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
            <div className="movie_detail">
                 <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                <div className="movie_detail__data">
                    <h2 className="movie__title">{location.state.title}</h2>
                    <h5 className="movie__year">{location.state.year}</h5>
                    <span className="movie__genres">{location.state.genres}</span>
                    <p className="movie__summary">{location.state.summary}</p>
                </div>
            </div>)
        }else{
            return null;
        }
    }
}

export default Detail;