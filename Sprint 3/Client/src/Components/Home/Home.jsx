import React from 'react';
import axios from 'axios';
import {withRouter, Route, Switch} from 'react-router-dom';
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
import Uploader from '../Uploader/Uploader';

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
    axios.get('/video')
      .then(res => {
        console.log(res);
          this.setState({
            videos: res.data.videos,
            heroVideo: res.data.heroVideo
          });
        })
        .catch(err => {
          console.log(err);
        });
  }

  addVideo = (e) => {
    e.preventDefault()
    let newVideo = {
      title: e.target.title.value,
      description: e.target.decription.value,
      video: e.target.video.value,
      likes: 5000,
      views: 1000,
      duration: '2:00',
      channel: 'BrainStation Ed',
      id: 'newVideo001'
    }

    axios.post('/video', newVideo)
    .then(res => {
      this.setState({videos: res.data.videos})
    })
  }

  componentDidUpdate(prevState, prevProps) {
    const videoId = this.props.match.params.videoId;
    if (prevProps.videoId !== videoId) {
    axios.get('/video/' + videoId)
      .then(res => {
        this.setState({
          videos: res.data,
          heroVideo: res.data.find(video => video.id === videoId)
        });
    })
    .catch(err => {
      console.log(err);
    });
  }
  }  
  
  render() {
    const { heroVideo } = this.state;
      return (
        heroVideo !== undefined &&
        <>
        <div className="App">
          <Header />
          <MediaPlayer 
              videoSrc={heroVideo.image}
              altText={heroVideo.title}
              videoLength={heroVideo.duration}
            />
            <div className="container">
              <div className="container__left">
                <Info 
                videoTitle={heroVideo.title}
                videoChannel={heroVideo.channel}
                videoLikes={heroVideo.likes}
                videoViews={heroVideo.views}
                videoDate={heroVideo.timestamp}
                />
                <Description 
                altText={heroVideo.description}/>
                <CommForm />
                {heroVideo.comments.map(comm => 
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
                {this.state.videos.filter(video => video.id !== heroVideo.id)
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
        <Switch>
          <Route path="/uploader" addVideo={this.addVideo} component={Uploader} />
        </Switch>
        </>
      );
  }
}

  

export default withRouter(Home);