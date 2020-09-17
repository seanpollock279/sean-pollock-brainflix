import React from 'react';

function VideoGallery() {
 for(let i = 0; i < videoArr.length; i++) {
    return (
        <div className="gallery">
            <h2 className="gallery__title">NEXT VIDEO</h2>
            <div className="gallery__container">
                <div className="gallery__video">{videoArr[i].img}</div>
                <h3 className="gallery__title">{videoArr[i].title}</h3>
                <h4 className="gallery__author">{videoArr[i].author}</h4>
            </div>
        </div>
    )
 }   
};

let videoArr = [
    {
        img:'',
        title: 'Become A Travel Pro In One Easy Lesson',
        author: 'Bernice Lambert'
    },
    {
        img: '',
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        author: 'Bernard Patrick'
    },
    {
        img: '',
        title: 'Travel Health Useful Medical Information For',
        author: 'Lizzie Burton'
    },
    {
        img: '',
        title: 'Cheap Airline Tickets Great Ways To Save',
        author: 'Emily Harper'
    },
    {
        img: '',
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen'
    },
    {
        img: '',
        title: 'Choose The Perfect Accomodations',
        author: 'Lydia Perez'
    },
    {
        img: '',
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin'
    },
    {
        img: '',
        title: 'Train Travel On Track For Safety',
        author: 'Scotty Cranmer'
    },
]

export default VideoGallery;