
import { videoConfig } from "../../config/video_config.js";
import {sleep} from "../utils/sleep.js";


export class DataForm
{
    #parentVideoElement;
    #videoElement;
   
    constructor(parentClassforinput)
    {
    const parentElementforinput = document.querySelector(parentClassforinput);
    parentElementforinput.innerHTML=`
    <div class="form-select-group"><label>Select video</label><select name="video" id="select-video" class="form-select"><option value="uuuu"></option></select><input type="number" id="Video-playback-time" placeholder="Video playback time (seconds)"><button class = "submit" type="submit">Submit</button>`;  
    this.setVideosSelect();
    }
    setVideosSelect() 
    {
        this.#videoElement = document.getElementById("select-video");
        this.#videoElement.innerHTML = videoConfig.videoLinks.map((video, index) =>
        `<option id = "link${index}" value="${video}">Link-${index+1}</option>`)
    }
    addHandle()
    {
    const submitButton =document.querySelector(".submit");
    submitButton.addEventListener("click", function ()
    {
    const parentElementforvideo = document.querySelector(".video-player");
    parentElementforvideo.innerHTML=`<video class=video src="" controls width="600" height="400"></video>`;
    let link = document.getElementById("#link");
    video.src=link.value;
    video.style.display = 'block';
    video.play();
    fun()
    }) }
}

const fun = async () =>
{
const video =document.querySelector(".video")
const seconds = document.getElementById("Video-playback-time");           
await sleep(seconds.value*1000);
video.pause()
video.style.display = 'none';
};








