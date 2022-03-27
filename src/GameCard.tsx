import { FC, ReactElement } from "react";
import { FaDesktop, FaLinux, FaPlaystation, FaXbox, FaApple, FaAppStoreIos } from 'react-icons/fa';
import { SiNintendo3Ds } from 'react-icons/si'
import {DiAndroid} from 'react-icons/di'
import { GameBasicInfo } from "./models/Game.model";

const GameCard: FC<{ game: GameBasicInfo }> = ({ game }) => {

    return (
        <div onClick={()=>document.location="/game/"+game.id} className="text-white w-1/3 m-7 mb-20 bg-gray-800 h-80 rounded-xl overflow-hidden
        shadow-xl shadow-yellow-700
        hover:scale-105 hover:shadow-yellow-500
        transition-all cursor-pointer">
            <div className="h-2/3">
                <img src={game.background_image} className="h-full w-full object-cover" alt="" />


            </div>
            <div className="flex justify-end flex-col h-1/3 p-3">
                <div className="text-white text-2xl font-semibold break-normal">{game.name}</div>
                <div className="p-1 text-sm">
                </div>
            </div>
        </div>
    );
}

export default GameCard;