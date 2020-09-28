import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import '../../App.css';
import '../../Home.scss';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Description from '../Description/Description';
import Videos from '../Video Gallery/VideoGallery';
import Comments from '../Comments/Comments';
import CommForm from '../CommForm/CommForm';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import NextVideo from '../NextVideo/NextVideo';

let videos_url ='https://project-2-api.herokuapp.com/videos/?api_key=';
let api_key = '<fcdda4b1-8a54-4bbe-9edd-7df54c290151>';
let videosAccess = videos_url + api_key;

class Home extends React.Component {
  state = {
      videos: [
        "Loading..."
      ],
      heroVideo: {
        comments: ['Loading...']
      }
  }
  
  componentDidMount() {
    axios.get(videosAccess)
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
  componentDidUpdate(prevState, prevProps) {
    const videoId = this.props.match.params.videoId;
    axios.get(videosAccess)
      .then(res => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=` + api_key)
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
      return (
        <div className="App">
          <Header />
          <MediaPlayer 
              videoSrc={hero.image}
              altText={hero.title}
              videoLength={hero.duration}
            />
            <div className="container">
              <div className="container__left">
                <Info 
                videoTitle={hero.title}
                videoChannel={hero.channel}
                videoLikes={hero.likes}
                videoViews={hero.views}
                videoDate={hero.timestamp}
                />
                <Description 
                altText={hero.description}/>
                <CommForm />
                {hero.comments.map(comm => 
                  <Comments
                  key={comm.commId}
                  userName={comm.name}
                  userText={comm.comment}
                  date={comm.timestamp}
                  />
                )}
              </div>  
              <div className="container__right">
                <NextVideo />
                {this.state.videos.filter(video => video.id !== hero.id)
                .map(video => {
                  return <Videos
                    key={video.id}
                    videoId={video.id}
                    videoSrc={video.image}
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

  

export default withRouter(Home);