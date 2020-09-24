import React from 'react';
import axios from 'axios';
import './App.css';
import './app.scss';
import Header from './Components/Header/Header';
import Info from './Components/Info/info';
import Description from './Components/Description/Description';
import Videos from './Components/Video Gallery/VideoGallery';
import Comments from './Components/Comments/Comments';
import CommForm from './Components/CommForm/commForm';
import MediaPlayer from './Components/MediaPlayer/MediaPlayer';
import NextVideo from './Components/NextVideo/NextVideo';
import Uploader from './Components/Uploader/Uploader';
// import Video1 from './Assets/Images/video-list-0.jpg';
// import Video2 from './Assets/Images/video-list-1.jpg';
// import Video3 from './Assets/Images/video-list-2.jpg';
// import Video4 from './Assets/Images/video-list-3.jpg';
// import Video5 from './Assets/Images/video-list-4.jpg';
// import Video6 from './Assets/Images/video-list-5.jpg';
// import Video7 from './Assets/Images/video-list-6.jpg';
// import Video8 from './Assets/Images/video-list-7.jpg';
// import Video9 from './Assets/Images/video-list-8.jpg';


let comments_url ='https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=';
let api_key = '<fcdda4b1-8a54-4bbe-9edd-7df54c290151>';
let commAccess = comments_url + api_key;

class App extends React.Component {
  state = [{
      videos: { 
      video: '',
      title: '',
      id: '',
      channel: '',
      timestamp: '',
      description: '',
      likes: '',
      views: '',
      duration: '',
    },
    mainVideo: {
      video: '',
      title: '',
      id: '',
      channel: '',
      timestamp: '',
      description: '',
      likes: '',
      views: '',
      duration: '',
    },
    comments : {
      comment: '',
      name: '',
      commId: '',
      timestamp: '',
    }
  }]

  componentDidMount() {
    axios.get(commAccess)
    .then(res => {
      this.setState({
        video: res.data.image,
        id: res.data.id,
        title: res.data.title,
        channel: res.data.channel,
        description: res.data.description,
        duration: res.data.duration,
        likes: res.data.likes,
        views: res.data.views,
        timestamp: res.data.timestamp,
        comment: res.data.comments.comment,
        commId: res.data.comments.id,
        name: res.data.comments.name,
        timestamp: res.data.comments.timestamp,
      })
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
    

  render() {
    return (
      <div className="App">
        <Header />
        <MediaPlayer 
          key={this.state.videos.id}
          videoId={this.state.videos.id}
          videoSrc={this.state.videos.src}
          videoTitle={this.state.videos.title}
          videoAuthor={this.state.videos.channel}
          altText={this.state.mainVideos.title}
        />
        <div className="container">
          <div className="container__left">
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
          </div>
          <div className="container__right">
            <NextVideo />
            {this.state.videos.filter(video => video.id !== this.state.mainVideo.id)
            .map(video => {
              return <Videos
                key={video.id}
                videosId={video.id}
                videoSrc={video.src}
                altText={video.title}
                videoTitle={video.title}
                videoAuthor={video.channel}
                />
            })}
          </div>
        </div>
        <Uploader />
      </div> 
    );
  }
}
  

export default App;
