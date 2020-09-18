import React from 'react';

class VideoGallery extends React.Component {
    state = { vidArr: [
        {
            img:'',
            title: 'Become A Travel Pro In One Easy Lesson',
            author: 'Bernice Lambert',
            id: 1
        },
        {
            img: '',
            title: 'Les Houches The Hidden Gem Of The Chamonix',
            author: 'Bernard Patrick',
            id: 2
        },
        {
            img: '',
            title: 'Travel Health Useful Medical Information For',
            author: 'Lizzie Burton',
            id: 3
        },
        {
            img: '',
            title: 'Cheap Airline Tickets Great Ways To Save',
            author: 'Emily Harper',
            id: 4            
        },
        {
            img: '',
            title: 'Take A Romantic Break In A Boutique Hotel',
            author: 'Ethan Owen',
            id: 5
        },
        {
            img: '',
            title: 'Choose The Perfect Accomodations',
            author: 'Lydia Perez',
            id: 6
        },
        {
            img: '',
            title: 'Cruising Destination Ideas',
            author: 'Timothy Austin',
            id: 7
        },
        {
            img: '',
            title: 'Train Travel On Track For Safety',
            author: 'Scotty Cranmer',
            id: 8
        },
    ]}
        render() {
            return (
                this.state.vidArr.map((item) => {
                    return(
                        <div key={item.id} className="gallery">
                            <h2 className="gallery__title">NEXT VIDEO</h2>
                            <div className="gallery__container">
                                <div className="gallery__video">{item.img}</div>
                                <h3 className="gallery__title">{item.title}</h3>
                                <h4 className="gallery__author">{item.author}</h4>
                            </div>
                        </div>
                    )
                })
            );
        }
};  


export default VideoGallery;