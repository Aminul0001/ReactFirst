export default function PostItem ({post}){

    return (
        <div>
          <h3>Serial number:{post.id}</h3>
          <h2>Title: {post.title} </h2>
          <p>Details:{post.body}</p>
        </div>
    )
}