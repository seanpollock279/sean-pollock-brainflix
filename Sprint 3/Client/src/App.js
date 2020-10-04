import React from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import './App.css';
import Uploader from './Components/Uploader/Uploader';
import Home from './Components/Home/Home';
import Router from './Components/Router/Router';
import axios from 'axios';

class App extends React.Component {
  state = {
    videos: [
      "Loading..."
    ],
    heroVideo: {
      id: '1',
      comments: ['Loading...']
    },
    newVideo: {
      title: '',
      description: '',
      video: ''
    }
  }

  componentDidMount() {
    axios.get('/video')
      .then(res => {
          this.setState({
            videos: res.data.videos,
            heroVideo: res.data.heroVideo
          });
        })
        .catch(err => {
          console.log(err);
        });
  }

  onChange = (e) => {
    this.setState({newVideo: {...this.state.newVideo, [e.target.name]:e.target.value}})
  }

  addVideo = () => {
    // e.preventDefault()
    let newVideo = {
      title: this.state.newVideo.title,
      description: this.state.newVideo.description,
      image: this.state.newVideo.video,
      likes: 5000,
      views: 1000,
      timestamp: 1545162149000,
      duration: '2:00',
      channel: 'BrainStation Ed',
      id: 'newVideo001',
      comments: [
        {
          "name": "Micheal Lyons",
          "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          "likes": 0,
          "timestamp": 1545162149000
        },
        {
          "name": "Gary Wong",
          "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          "likes": 0,
          "timestamp": 1544595784046
        },
        {
          "name": "Theodore Duncan",
          "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
          "likes": 0,
          "timestamp": 1542262984046
        }]
    }
    axios.post('http://localhost:8080/video', newVideo)
    .then(res => {
      this.setState({videos: res.data.videos})
      this.props.history.push('/');
      window.location.reload();
    })

  }

  updateState = () => {
    const videoId = this.props.location.pathname;
    axios.get('http://localhost:8080/video/' + videoId.slice(7))
          .then(res => {
            this.setState({
              videos: res.data,
              heroVideo: res.data.find(video => video.id === videoId.slice(7))
            });
        })
        .catch(err => {
          console.log(err);
        });
  }
  
  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.location.pathname;
      if (prevProps.location.pathname !== videoId) {
        this.updateState();
      }
  }  

  render() {
    console.log(this.state)
    return (
      <Router state={this.state} addVideo={this.addVideo} onChange={this.onChange} appProps={this.props}/>
    )
  }
}
  
export default withRouter(App);
