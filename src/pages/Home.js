
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';
import Card from './Card.js';


const Home = ()=>{

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:5000/api/getItems').then(res => setPosts(res.data));
    },[])


    return(
        <div className="App">
            <div className='flex flex-wrap mr-1 ml-1 mt-10 justify-center items-center gap-5'>
            {posts.map((e)=>{
                return(
                    <Card src={e.url} Prize={e.prize}/>
                )
            })}
            </div>
        </div>
    )
}

export default Home;
