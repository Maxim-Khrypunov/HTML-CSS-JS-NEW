import { sleep } from "../utils/sleep.js";
const res =document.querySelector(".video-player")
const video =document.querySelector(".video")
const submitButton =document.querySelector(`.submit`);
const seconds = document.getElementById("Video-playback-time");



export function event()
{
submitButton.addEventListener("click", function ()
{
    video.style.display = 'block';
    res.style.display = 'block';
    video.play();
    fun()
    result(".video-player");
})
}

const fun = async () =>
{           
await sleep(seconds.value*1000);
seconds.value="";
video.pause()
video.style.display = 'none';
res.style.display = 'none';
};

function result (parentClass)
{
const parentElement = document.querySelector(parentClass);
parentElement.innerHTML = `<div class="result">You will be shown a video lasting ${seconds.value} seconds
</div>`;
}
