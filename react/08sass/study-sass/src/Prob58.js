import { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
// import './styles/App.css';
import Sass from './Sass';

const Prob58 = () => {
  const [posts, setPosts] = useState([]);

  // 10개의 post 정보를 갖도록 posts state 설정
  const getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(res.data);
    setPosts(res.data.slice(0, 20));
  };

  // 컴포넌트가 Mount 된 시점에
  useEffect(() => {
    // 2초 기다렸다가 getPosts 함수 실행
    // setTimeout(() => {
    //   getPosts();
    // }, 2000);

    getPosts();
  }, []);

  const dataLoaded = posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });

  return (
    <div className="Prob58">
      <header>🎁 Post List</header>
      {posts.length > 0 ? dataLoaded : <h2>Loading...</h2>}
    </div>
  );
};

export default Prob58;