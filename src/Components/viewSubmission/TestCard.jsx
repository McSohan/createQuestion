import React, {useState} from "react";

export default function TestTile(props)
{
    //props.tistID also passed

    //always put these inside a section with className="cards"

    function renderTest (event)
    {
        //redirect to the test page using props.testID
        ;
    }
    return (
        <div className="card">
            <h4 className="card__title">{props.course}</h4>
            <div>
                <div className="card__content">
                    On {props.date}
                    <p>Starts @ {props.time}</p>
                    <div>For {props.duration} minutes</div>
                </div>
                <div className="card__info">
          <p>Max Score: {props.score}</p>
          <button className="btn card__button" onClick={renderTest}>
            Attempt Test
          </button>
        </div>
            </div>
        </div>
    );
}