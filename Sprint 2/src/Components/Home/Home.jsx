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
        axios.get(`https://project-2-api.herokuapp.com/videos/${videos.id}/?api_key=` + api_key)
          .then(response => {
            this.state.comments = response.data.comments.map(comm => {
              return {
              comment: comm.comment,
              commId: comm.id,
              name: comm.name,
              timestamp: comm.timestamp
            }
          })
        this.setState({ videos: [...this.state.videos, videos] });
        })
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <MediaPlayer 
          key={this.state.videos[0].id}
          videoId={this.state.videos[0].id}
          videoSrc={this.state.videos[0].video}
          videoTitle={this.state.videos[0].title}
          videoAuthor={this.state.videos[0].channel}
          altText={this.state.videos[0].title}
        /> */}
        <div className="container">
          <div className="container__left">
            <Info />
            <Description />

            <CommForm />
            {this.state.comments.map(comm => {
                console.log(comm);
                return <Comments
                key={comm.commId}
                userName={comm.name}
                userText={comm.comment}
                date={comm.timestamp}
                />
              })
              
            }
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
      </div> 
    );
  }
}
  

export default Home;