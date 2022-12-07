import React from "react";
import memesData from '../memesData'
function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return(
        <div className="form">
            <form className="memeform">
                <input type="text" placeholder="topText" id="topText"/>
                <input type="text" placeholder="bottomText" id="bottomText"/>
            </form>
                <button type="submit" className="submitmeme" onClick={getMemeImage}>Get a new meme image</button>
        </div>
    )
}

export default Meme;