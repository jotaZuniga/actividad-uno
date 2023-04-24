export const Profile = ({avatar, username, bio}) => {
    return (
            <div className="d-flex">
                <div className="card" style={{width: '18rem'}}>
                    <img src={avatar} className="card-img-top" alt="profile avatar" />
                    <div className="card-body">
                        <h6 className="card-title">{username}</h6>
                        <p className="card-text">{bio}</p>
                    </div>
                </div>
            </div>   
    );
}