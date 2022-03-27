import { FC, useEffect, useState } from "react";
import GameCard from "./GameCard";
import { GameBasicInfo } from "./models/Game.model";
import { HttpClient } from "./utils/http-client";

const Home:FC = ()=>{
    const [games, setGames] = useState<GameBasicInfo[]>([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState('');
    const resultsPerPage = 20;
    const numberOfPages = Math.ceil(count / resultsPerPage);
  
    useEffect(() => {
      HttpClient.getGames(currentPage, searchWord).then(response => {
        setGames(response.results)
        setCount(response.count)
      });
    }, [currentPage, searchWord]);

  const handleSearch = () => {
    const searchWord: string = (document.getElementById("searchWord") as HTMLInputElement).value;
    setSearchWord(searchWord);
  }

    return (
      <div className="bg-[#62287d]">
        <div className='px-24 opacity-80 flex justify-end h-96
        bg-no-repeat bg-center bg-cover
        bg-banner-background shadow-xl shadow-green-500'>
                <div className='text-white text-[7rem] font-bold' style={{ textShadow: '4px 5px 6px black' }}>Game</div>
                <div className='text-green-600 text-[7rem] font-black' style={{ textShadow: '4px 5px 6px black' }}>HUB</div>
        </div>
        <div className="mt-12 mx-[5.5rem] flex">
          <span className="h-[2rem] bg-green-600 inline-block">
            <input id="searchWord" type="text" className="h-full" />
          </span>
          <span onClick={handleSearch}
            className="text-white bg-green-800 h-[2rem] px-2 cursor-pointer hover:bg-green-600 transition-all leading-8 inline-block">Search games</span>
        </div>
        <div className='flex-row flex flex-wrap px-8 pt-8 justify-center'>
                {games.map((game: GameBasicInfo, index) => <GameCard game={game} key={game.id} />)}
        </div>
        <div className="text-white flex justify-center pb-16 ">
          <nav>
            <ul className="inline-flex bg-green-600 rounded-r-lg rounded-l-lg shadow-lg shadow-green-500">
              <li><button onClick={() => setCurrentPage(1)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white text-2xl rounded-l-lg">{'<'}</button></li>
              {[...Array(numberOfPages)].map( (_, pageNumber) => shouldRenderPageNumber(pageNumber+1) ?
                <li><button onClick={() => setCurrentPage(pageNumber+1)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 cursor-pointer hover:bg-green-400" style={{color: pageNumber+1===currentPage ? 'white' : 'black'}}>{pageNumber+1}</button></li> : '')}
  
  
              <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 cursor-auto">...</button></li>
  
  
              <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white">{numberOfPages}</button></li>
              <li><button onClick={() => setCurrentPage(numberOfPages)} className="h-10 px-5 text-black transition-colors duration-150 bg-green-600 hover:bg-green-400 hover:text-white text-2xl rounded-r-lg">{'>'}</button></li>
            
            </ul>
          </nav>
  
        </div>
      </div>
    );
  
    function shouldRenderPageNumber(pageNumber:number){
      return Math.abs(currentPage-pageNumber)<=1
    }
}

export default Home;