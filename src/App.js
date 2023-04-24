import NavBar from './components/NavBar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="container-fluid">
      <header className='bg-light'>
        <NavBar />
      </header>
      <main role='main'>
        <div className='py-3'>
          <SearchBar />
        </div>
        <div className='py-3'>
          <PostList />
        </div>
      </main>
      <footer className='text-muted'>
        <div className='container'>
          <p className='text-center'>Copyright - Jose Zuniga 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
