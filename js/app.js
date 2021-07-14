//Change header size on scroll, return back to normal size at top of page
function headerSize() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('header');
    if (scrollPosition > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}
//Runs the headerSize function on scroll
window.addEventListener('scroll', headerSize);

//invert the colors of the buttons and background upon click.
function invertListColors() {
    var buttons = document.querySelectorAll('button');
    var background = document.getElementById('listOfPlaces');

    //The end of this statement is a shorthand for the if statement.
    background.style.backgroundColor = background.style.backgroundColor === 'brown' ? 'burlywood' : 'brown';

    //Loops through all buttons so they all change together along with background.
    for(var i=0; i<buttons.length; i++) {
        buttons[i].style.backgroundColor = buttons[i].style.backgroundColor === 'burlywood' ? 'brown' : 'burlywood';
    }
}

//create new element
var newElement = document.createElement('img');
    newElement.setAttribute("class", "galImgs");
    newElement.setAttribute('src', 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80');
    newElement.setAttribute("alt", "New York");
    document.getElementById('imageGallery').appendChild(newElement);

//Remove appended image
var imageGalleryList = document.getElementsByClassName('galImgs');
imageGalleryList[6].remove();

//gets element by tag name and adds class to all images
var allImgs = document.getElementsByTagName('img');
allImgs[0].classList.toggle('logoImgClass');
