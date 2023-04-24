import Post from "./Post";

const PostList = ({posts}) => {
    return posts.length ? (
        <div className="container-fluid">
            <div className="row">
                {posts.map((post) => <Post info={post} key={`post-${post.id}`}/>)}
            </div>
        </div>
        ): <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '18rem'}}><h4 className="text-center">No Post found</h4></div>;
}

export default PostList;