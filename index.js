let greyBlock = document.querySelector('.greyBox');
let violetBlock = document.querySelector('.violetBox');

let movePixel = 1;

// onclick event of blocks
violetBlock.onclick = box2;
greyBlock.onclick = box1;

window.addEventListener('load',() => {

    //initial properties of grey block
    greyBlock.style.position = 'absolute';
    greyBlock.style.left = 0;
    greyBlock.style.top = 0;

    //initial properties of violet block
    violetBlock.style.position = 'absolute';
    violetBlock.style.left = 10;
    violetBlock.style.top = 10;
    
})

function box1()
{
    window.addEventListener('keyup',(e) => {
        
        switch(e.key)
        {
            case 'ArrowUp' : 
                greyBlock.style.top = parseInt(greyBlock.style.top) - movePixel + 'px';
                break;
            case 'ArrowDown' : 
                greyBlock.style.top = parseInt(greyBlock.style.top) + movePixel + 'px';
                break;
            case 'ArrowLeft' : 
                greyBlock.style.left = parseInt(greyBlock.style.left) - movePixel + 'px';
                break;
            case 'ArrowRight' : 
                greyBlock.style.left = parseInt(greyBlock.style.left) + movePixel + 'px';
                break;
        }
    });

}

function box2()
{
    
    window.addEventListener('keyup',(event) => {
        
        switch(event.key)
        {
            case 'ArrowUp' : 
                violetBlock.style.top = parseInt(violetBlock.style.top) - movePixel + 'px';
                break;
            case 'ArrowDown' : 
                violetBlock.style.top = parseInt(violetBlock.style.top) + movePixel + 'px';
                break;
            case 'ArrowLeft' : 
                violetBlock.style.left = parseInt(violetBlock.style.left) - movePixel + 'px';
                break;
            case 'ArrowRight' : 
                violetBlock.style.left = parseInt(violetBlock.style.left) + movePixel + 'px';
                break;
        }
        
    });
}