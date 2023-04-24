import Post from "./Post";

const PostList = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
        );
}

export default PostList;