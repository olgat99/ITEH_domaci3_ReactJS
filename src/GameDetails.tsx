import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameDetails as GameDetailsModel } from "./models/Game.model";
import { HttpClient } from "./utils/http-client";

const GameDetails: FC = () => {
    const { id: gameId } = useParams();
    const [gameDetails, setGameDetails] = useState<GameDetailsModel>()
    useEffect(() => {
        HttpClient.getGameDetails(gameId!).then((response: GameDetailsModel) => {
            setGameDetails(response);
        });
    }, [gameId]);
    return (
        <div>
            {gameDetails &&
                <div className="bg-[#62287d]">
                    <img className="w-screen absolute h-[60vh] object-cover object-top blur-sm shadow-xl shadow-yellow-500" src={gameDetails.background_image} alt="" />
                    <div className="text-7xl text-white relative z-10 text-center font-bold pt-[20%]" style={{ textShadow: '4px 5px 6px black' }}>{gameDetails.name}</div>
                    <div className="text-3xl text-white relative z-10 text-center font-semibold" style={{ textShadow: '4px 5px 6px black' }}> {gameDetails.released}</div>
                    <div className=" bg-purple-800/[.6] relative text-white p-4 w-[50vw] min-w-[1200px] mx-auto">
                        <div className="py-2 text-center font-bold bg-yellow-800">Game Overview</div>
                        <div className="pb-2 text-center my-2 border-b-2 border-yellow">
                            Can be used on {gameDetails.platforms.map((platform: any, index: number) => <span>{platform.platform.name}{gameDetails.platforms.length - 1 !== index ? ',' : ''} </span>)}
                        </div>
                        <div className="pb-2 text-center my-2 border-b-2 border-yellow">
                            Published by: <span className="font-bold">{gameDetails.publishers[0].name}</span>
                            <br />
                            WebSite: <a className="underline" target="_blank" href={gameDetails.website}>{gameDetails.website}</a>
                        </div>
                        <div className="pb-2 text-center my-2 border-b-2 border-yellow">
                            Genres: {gameDetails.genres.map((genre: any, index: number) => <span className="font-bold">{genre.name}{gameDetails.genres.length - 1 !== index ? ',' : ''} </span>)}
                        </div>
                        <div className="pb-2 text-center my-2 border-b-2 border-yellow">
                            Description: <div className="content" dangerouslySetInnerHTML={{ __html: gameDetails.description }}></div>
                        </div>
                        <div className="py-2 text-center bg-purple-800">Gallery</div>
                        {gameDetails.screenshots.map((screenshot: any) => <div className="pb-2 text-sm my-2 border-b-2 border-yellow "><img className="mx-auto" src={screenshot.image} alt="" /></div>)}
                    </div>
                </div>
            }

        </div>
    );
}

export default GameDetails;