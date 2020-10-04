import React from 'react';
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

function Home ({ homeProps }) {
  const { heroVideo, videos } = homeProps;
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
                {videos.filter(video => video.id !== heroVideo.id)
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
        </>
      );
}

  

export default Home;