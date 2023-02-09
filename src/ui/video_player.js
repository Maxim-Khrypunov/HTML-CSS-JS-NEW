export class VideoPlayer
{
    constructor(parentClassforvideo)
    {
    const parentElementforvideo = document.querySelector(parentClassforvideo);
    parentElementforvideo.innerHTML=`<video class=video src="" controls width="600" height="400"></video>`;
    }
}