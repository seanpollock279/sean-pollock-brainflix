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


let comments_url ='https://project-2-api.herokuapp.com/videos/?api_key=';
let api_key = '<fcdda4b1-8a54-4bbe-9edd-7df54c290151>';
let commAccess = comments_url + api_key;

class App extends React.Component {
  state = {
      videos: [],
      comments: []
  }
  componentDidMount() {
    axios.get(commAccess)
    .then(res => {
      res.data.map(info => {
        let videos = {
          video: info.image,
          id: info.id,
          title: info.title,
          channel: info.channel,
          description: info.description,
          duration: info.duration,
          likes: info.likes,
          views: info.views,
          timestamp: info.timestamp,
        }
        return this.setState({ videos: [...this.state.videos, videos] });
      })
        let vidId = "/" + '1af0jruup5gu';
        axios.get(`https://project-2-api.herokuapp.com/videos${vidId}/?api_key=` + api_key)
        .then(response => {
          response.data.comments.map(comm => {
              let comment = {
              comment: comm.comment,
              commId: comm.id,
              name: comm.name,
              timestamp: comm.timestamp,
              }
              console.log(comment);
              return this.setState({ comments: [...this.state.comments, comment] })
            })
            
          })
        })
    .catch(err => {
      console.log(err);
    })
  }


    

  render() {
    return (
      <div className="App">
        <Header />
        {/* <MediaPlayer 
          key={this.state.videos.id[0]}
          videoId={this.state.videos.id[0]}
          videoSrc={this.state.videos.video[0]}
          videoTitle={this.state.videos.title[0]}
          videoAuthor={this.state.videos.channel[0]}
          altText={this.state.videos.title[0]}
        /> */}
        <div className="container">
          <div className="container__left">
            <Info />
            <Description />

            <CommForm />
            {this.state.comments.map(comment => {
              return <Comments 
                key={comment.commId}
                userName={comment.name}
                userText={comment.comment}
                date={comment.timestamp}
                />
            })}
          </div>
          <div className="container__right">
            <NextVideo />
            {this.state.videos
            // might need to add a filter here first
            .map(video => {
              return <Videos
                key={video.id}
                videosId={video.id}
                videoSrc={video.video}
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
