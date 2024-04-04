import Navbar from './components/Navbar';
import Container from './components/Container';
import Loading from './components/Loading';
import Error from './components/Error';

import { getNews } from './services/getNews';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery: 'microsoft'
      });
      console.log(res)
    }

    fetchTechNews();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Hello World!</h1>
      </Container>
    </>
  );
}

export default App;
