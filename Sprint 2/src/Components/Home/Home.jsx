import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../../App.css';
import '../../Home.scss';
import Header from '../Header/Header';
import Info from '../Info/info';
import Description from '../Description/Description';
import Videos from '../Video Gallery/VideoGallery';
import Comments from '../Comments/Comments';
import CommForm from '../CommForm/commForm';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import NextVideo from '../NextVideo/NextVideo';


let comments_url ='https://project-2-api.herokuapp.com/videos/?api_key=';
let api_key = '<fcdda4b1-8a54-4bbe-9edd-7df54c290151>';
let commAccess = comments_url + api_key;

class Home extends React.Component {
  state = {
      videos: [],
      heroVideo: []
  }
  
  componentDidMount() {
    axios.get(commAccess)
      .then(res => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${res.data[0].id}/?api_key=` + api_key)
          .then(response => {
              this.setState({
                videos: res.data,
                heroVideo: response.data
              });
            })
            .catch(err => {
              console.log(err);
            });
      }
     
    )
  }
  
  render() {
    
    let hero = this.state.heroVideo;

    if (this.state.heroVideo.hasOwnProperty('comments')) {
      return (
        <div className="App">
          <Header />
          <MediaPlayer 
              key={hero.id}
              videoId={hero.id}
              videoSrc={hero.video}
              videoTitle={hero.title}
              videoAuthor={hero.channel}
              altText={hero.title}
            />
            <div className="container">
              <div className="container__left">
                <Info />
                <Description />
                <CommForm />
                {this.state.videos.map(video => {
                  video.comments.map(comm => {
                    return <Comments
                    key={comm.commId}
                    userName={comm.name}
                    userText={comm.comment}
                    date={comm.timestamp}
                    />
                    })
                  })
                } 
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
        </div>
      );
    }
}

  

export default Home;