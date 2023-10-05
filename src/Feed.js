import React, {useEffect, useState} from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db, auth } from './firebase';
import { collection, addDoc, getDocs, onSnapshot, Timestamp} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const sortingFunc = (a, b) => {
    if(a.data().timestamp.valueOf() > b.data().timestamp.valueOf())
      return -1;
    else if(a.data().timestamp.valueOf() < b.data().timestamp.valueOf())
      return 1;
    return 0;
  }

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      console.log(snapshot.docs)
      setPosts(snapshot.docs.sort(sortingFunc).map(doc => ({
        data: doc.data(),
        id: doc.id,
        }
        )))
    });
  }, []);

  const sendPost = e => {
    e.preventDefault();
    
    addDoc(collection(db, "posts"), {
      name: "Omar Abouelkheir",
      description: "this is a test",
      message: input,
      photoUrl: '',
      timestamp: Timestamp.now(),
    });

    setInput("");
  };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title="Photo" 
              color="#70B5F9"/>
              <InputOption Icon={SubscriptionsIcon} title="Video" 
              color="#E7A33E"/>  
              <InputOption Icon={EventNoteIcon} title="Event" 
              color="#C0CBCD"/> 
              <InputOption Icon={CalendarViewDayIcon} title="Write article" 
              color="#7FC15E"/> 
            </div>
        </div>

        {/* Posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl} 
          />
        ))}
    </div>
  )
}

export default Feed