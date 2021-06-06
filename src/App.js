import {useState, useEffect} from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent';
import axios from 'axios';

function App() {

  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const apikey = "adec0741ccdd4ff7912918a55b9d0c1f"

  const newsAPI = async () => {
      try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }
      catch(err){
        console.log(err);
      }
    };
    
  useEffect(() => {
    newsAPI();
  }, [newsResults, category])

  return (
    <div className="App">
      <Navinshorts setCategory = {setCategory}/>
      <NewsContent newsArray ={newsArray} newsResults = {newsResults}/>
    </div>
  );
}

export default App;
