import { useState } from 'react';
import { formatDate } from '../helpers/libs';

const Post = ({info}) => {
    const [likes, setLikes] = useState(info.likes || 0);

    const handleLikesClick = (event) => {
        event.preventDefault();
        setLikes(likes+1);
    }

    return (
        <div className="col d-flex justify-content-center">
            <div className="card mb-4 shadow-sm" style={{ width: '18rem'}}>
                <img src={info.image} className="card-img-top img-fluid" alt="post" />
                <div className="card-body">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <p className="card-text"><small className="text-muted">{formatDate(info.createdAt)}</small></p>
                            </div>
                            <div className='col d-flex justify-content-end'>
                                <button type="button" className="btn btn-danger btn-sm" onClick={handleLikesClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                    <span className='ms-1'>{likes}</span>
                                </button>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col'>
                                <h6 className="card-title">{info.author}</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <p>{info.text}</p>
                        </div>
                        <a href="#" className="card-link text-muted text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                            </svg>
                            <span className='ms-1'>Comments ({info.comments})</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>     
    );
}

export default Post;