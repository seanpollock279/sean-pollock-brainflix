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
    axios.get('/data')
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

  // addVideo = (e) => {
  //   e.preventDefault()
  //   let newVideo = {
  //     title: e.target.title.value,
  //     description: e.target.decription.value,
  //     video: e.target.video.value,
  //     likes: 5000,
  //     views: 1000,
  //     duration: '2:00',
  //     channel: 'BrainStation Ed'
  //   }

  //   axios.post('/data', newVideo)
  //   .then(res => {
  //     this.setState({videos: res.data})
  //   })
  // }
  componentDidUpdate(prevState, prevProps) {
    const videoId = this.props.match.params.videoId;
    axios.get('/data')
      .then(res => {
        let newHero = res.data.videos.filter(video => video['id'] === videoId);
        this.setState({
          videos: res.data,
          heroVideo: newHero
        });
    })
    .catch(err => {
      console.log(err);
    });
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