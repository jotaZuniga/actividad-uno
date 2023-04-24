import { Post } from './Models/Post';
import { Profile } from './Models/Profile';
import { Loading } from './components/Loading';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { Profile as Info } from './components/Profile';
import { randomId } from './helpers/libs';
import { mockPost } from './helpers/mock';
import { useEffect, useState, useMemo } from 'react';
import { login } from './services/loginService';
import { Login } from './components/Login';

const App = () => {
  const [search, setSearch] = useState('');
  const [section, setSection] = useState('home');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isLocalStorageSet = localStorage.getItem('login') !== '0';
  const [loginOk, setLoginOk] = useState(isLocalStorageSet);
  const [statusCode, setStatusCode] = useState(200);

  const User = useMemo(() => new Profile(randomId()), []);

  const today = new Date();
  const year = today.getUTCFullYear();

  const loadData = () => {
    const list = [];
    mockPost.forEach(item => {
      const id = randomId();
      const itemPost = new Post(id);
      itemPost.setImage(item.image).setCreatedAt(item.date).setAuthor(item.author).setText(item.text).setComments(item.comments).setLikes(item.likes);
      list.push(itemPost);
    });
    setPosts(list);
  }

  const handleSearch = (event) => {
    const text = event.target.value
    setSearch(text);

    if (text.length) {
      applyFilter(search);
    } else {
      setPosts([]);
      loadData();
    }
  }

  const handleLogoClick = (event) => {
    event.preventDefault();
    setSection('home');
  }
  
  const handleProfileClick = (event) => {
    event.preventDefault();
    setSection('profile');
  }

  const applyFilter = (text) => {
    const filteredData = posts.filter( (post) => post.text.includes(text));

    if (filteredData) setPosts(filteredData);
  }

  const handleLoginSubmit = (user, password) => {
    try {
      const response = login({user, password});
      response.then(data => {
        if(data.status === 200) {
          
          localStorage.setItem('login', data.data.token);
          setLoginOk(true);
          setStatusCode(data.status);
        }
      }, () => setStatusCode(401)); 
    } catch (error) {
      setLoginOk(false);
    }
  }


  useEffect(() => {
    User.setAvatar('https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png');
    User.setName('Jose Zuniga');
    User.setBio('Lorem ipsum dolor sit amet, eu fabulas docendi eum, molestie complectitur est cu, his odio facilisis no. Ius corrumpit imperdiet delicatissimi ex, mei viderer nostrud propriae eu. Pri velit percipit pertinacia cu, cum idque postea albucius te, sed tota perpetua scribentur et. Habemus necessitatibus his te, quo ex wisi ridens facilisis, cum et placerat probatus. Vis vidit liber mollis at, expetenda hendrerit pro ne, ne inermis explicari cum. Nec cu veritus assueverit, sea lorem viris dolor ne.');
  }, [User]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const initData = () => {
      if (mockPost.length) {
        loadData();
      }
    }

    initData();
  },[]);

  return (
    <div className="container-fluid">
      <header className={`bg-light ${loginOk ? 'd-block' : 'd-none'}`}>
        <NavBar onLogoClick={handleLogoClick} onProfileClick={handleProfileClick}/>
      </header>
      <main role='main'>
        {loginOk ? (
          <>
            <div className={`py-3 ${section === 'home' ? 'd-flex' : 'd-none'}`}>
              <SearchBar value={search} onSearch={handleSearch} />
            </div>
            <div className={`py-3 ${section === 'home' ? 'd-flex' : 'd-none'}`}>
              {isLoading ? (<Loading />) : (<PostList posts={posts} />)}
            </div>
            <div className={`py-3 ${section === 'profile' ? 'd-flex justify-content-center align-items-center' : 'd-none'}`}>
              <Info avatar={User.getAvatar()} bio={User.getBio()} username={User.getName()} />
            </div>
          </>
        ) : <Login onLoginComplete={handleLoginSubmit} code={statusCode}/> }

      </main>
      <footer className='text-muted'>
        <div className='container'>
          <p className='text-center'>Copyright - Jose Zuniga {year}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
