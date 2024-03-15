import { useEffect, useState } from "react"
import PostItem from "./PostItem"
export default function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])
    return (

        <div>
            <h3>Posts:{posts.length} </h3>
            {
                posts.map(post => (
                    <PostItem post={post}></PostItem>
                ))
            }


        </div>
    )
}  