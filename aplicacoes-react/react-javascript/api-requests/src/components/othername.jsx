/*
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PostManagerAxios = () => {
    
    const [posts, setPosts] = useState ([]);
    const [error, setError] = useState ("");
    
    useEffect(() => {
        const axiosPosts = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                
                setPosts(response.data);
            } catch (error) {
                setError (error.message);
            }
        }

        axiosPosts();
    }, []);

    return (
        <div>
            <h2>Postagens</h2>
            {( 
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button >Editar</button>
                    </div>
                        
                ))
            )}
        </div>
    )
}

export default PostManagerAxios
*/