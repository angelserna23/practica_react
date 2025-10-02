import React from 'react';
import "./Song.css";
import disc from "../../assets/img/disc.gif";
import mixingIcon from "../../assets/img/mixing.svg";
import backIcon from "../../assets/img/back.svg";
import playIcon from "../../assets/img/play.svg";
import nextIcon from "../../assets/img/next.svg";
import repeatIcon from "../../assets/img/repeat.svg";
import addIcon from "../../assets/img/add.svg";

const Song = ({ title, artist, duration, onAdd }) => {
    return(
        <div className="song__card">
            <h2 className='card__title'>{title}</h2>
            <img className='disc' src={disc}/>
            <div className='song__add'>
                <img 
                    className='card__add' 
                    src={addIcon}
                    alt='add'
                    onClick={onAdd}
                />
            </div>
            <div className='play'>
                <img className='mixing__img' src={mixingIcon}/>
                <img className='back__img' src= {backIcon}/>
                <img className='play__img' src= {playIcon}/>
                <img className='next__img' src= {nextIcon}/>
                <img className='repeat__img' src= {repeatIcon}/>
            </div>
            <p className='card__artist'><strong>Artist: </strong>{artist}</p>
            <p className='card__duration'><strong>Duration: </strong>{duration}</p>
        </div>
    )
};

export default Song;