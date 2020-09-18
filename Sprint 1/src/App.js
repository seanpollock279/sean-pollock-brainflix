import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/info';
import Description from './Components/Description/Description';
import Videos from './Components/Video Gallery/VideoGallery';
import Comments from './Components/Comments/Comments';
import CommForm from './Components/CommForm/commForm';
import MediaPlayer from './Components/MediaPlayer/MediaPlayer';
import Video1 from './Assets/Images/video-list-0.jpg';
import Video2 from './Assets/Images/video-list-1.jpg';
import Video3 from './Assets/Images/video-list-2.jpg';
import Video4 from './Assets/Images/video-list-3.jpg';
import Video5 from './Assets/Images/video-list-4.jpg';
import Video6 from './Assets/Images/video-list-5.jpg';
import Video7 from './Assets/Images/video-list-6.jpg';
import Video8 from './Assets/Images/video-list-7.jpg';
import Video9 from './Assets/Images/video-list-8.jpg';

class App extends React.Component {
  state = { 
    comments: [
      {
        name: 'Michael Lyons',
        date: '12/18/2018',
        text: 'They Blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        id: 1
      },
      {
        name: 'Gary Wong',
        date: '12/12/2018',
        text: "Every time I see him shred I feel so motivated to get off my couch andhop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: 2
      },
      {
        name: 'Theodore Duncan',
        date: '11/15/2018',
        text: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
        id: 3
      }
    ],
    mainVideo: {
      src: Video1,
      alt: '',
      title: '',
      author: '',
      id: 10
    },
    videos: [
    {
      src: Video2,
      alt: 'video2',
      title: 'Become A Travel Pro In One Easy Lesson',
      author: 'Bernice Lambert',
      id: 1
    },
    {
      src: Video3,
      alt: 'video3',
      title: 'Les Houches The Hidden Gem Of The Chamonix',
      author: 'Bernard Patrick',
      id: 2
    },
    {
      src: Video4,
      alt: 'video4',
      title: 'Travel Health Useful Medical Information For',
      author: 'Lizzie Burton',
      id: 3
    },
    {
      src: Video5,
      alt: 'video5',
      title: 'Cheap Airline Tickets Great Ways To Save',
      author: 'Emily Harper',
      id: 4            
    },
    {
      src: Video6,
      alt: 'video6',
      title: 'Take A Romantic Break In A Boutique Hotel',
      author: 'Ethan Owen',
      id: 5
    },
    {
      src: Video7,
      alt: 'video7',
      title: 'Choose The Perfect Accomodations',
      author: 'Lydia Perez',
      id: 6
    },
    {
      src: Video8,
      alt: 'video8',
      title: 'Cruising Destination Ideas',
      author: 'Timothy Austin',
      id: 7
    },
    {
      src: Video9,
      alt: 'video9',
      title: 'Train Travel On Track For Safety',
      author: 'Scotty Cranmer',
      id: 8
    }
]}

  render() {
    return (
      <div className="App">
        <Header />
        <MediaPlayer 
          key={this.state.mainVideo.id}
          videoId={this.state.mainVideo.id}
          videoSrc={this.state.mainVideo.src}
          videoTitle={this.state.mainVideo.title}
          videoAuthor={this.state.mainVideo.author}
          altText={this.state.mainVideo.alt}
        />
        <Info />
        <Description />

        <CommForm />
        {this.state.comments.map(comment => {
          return <Comments 
            key={comment.id}
            userName={comment.name}
            userText={comment.text}
            date={comment.date}
            />
        })}
        {this.state.videos.map(video => {
          return <Videos
            key={video.id}
            videosId={video.id}
            videoSrc={video.src}
            altText={video.alt}
            videoTitle={video.title}
            videoAuthor={video.author}
            />
        })}
      </div> 
    );
  }
}
  

export default App;
