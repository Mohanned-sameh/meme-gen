import React , {useState} from "react";
import memesData from '../memesData'
function Meme() {
    const [image, setimage] = useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setimage(prevImage => url)
    }
    return(
        <div className="form">
            <form className="memeform">
                <input type="text" placeholder="topText" id="topText"/>
                <input type="text" placeholder="bottomText" id="bottomText"/>
            </form>
                <button type="submit" className="submitmeme" onClick={getMemeImage}>Get a new meme image</button>
                <div className="img-div">
                    <img src={image}/>
                </div>
        </div>
    )
}

export default Meme;