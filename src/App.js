import React, { useState, useEffect } from 'react'
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "cburkett22",
    //   caption: "WOW it works",
    //   imageUrl: "https://cdn.hiconsumption.com/wp-content/uploads/2015/06/Best-Places-To-Camp-In-The-US-0-Hero.jpg"
    // },
    // {
    //   username: "michelle_1991",
    //   caption: "Check this out #awesome",
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1QjxcZiobVlFFMY9hgz58f1P90OW9evR1g&usqp=CAU"
    // },
    // {
    //   username: "Pablo_Escobar",
    //   caption: "What white stuff..?",
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcspljkYZBG_hrawz8LOP2RQsuc0PS0pb7w&usqp=CAU"
    // }
  ]);

  // useEffect -> Runs a piece of code based on specific conditions
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [posts]);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"
        />
      </div>

      {
        posts.map(post => (
          <Post username={ post.username } caption={ post.caption } imageUrl={ post.imageUrl }/>
        ))
      }

      
    </div>
  );
}

export default App;
