import { FC, ReactElement } from "react";
import { FaDesktop, FaLinux, FaPlaystation, FaXbox, FaApple, FaAppStoreIos } from 'react-icons/fa';
import { SiNintendo3Ds } from 'react-icons/si'
import {DiAndroid} from 'react-icons/di'
import { GameBasicInfo } from "./models/Game.model";

const GameCard: FC<{ game: GameBasicInfo }> = ({ game }) => {
    const platformIconSize = 19;
    const platformIconColor = '#49c96b'
    const platforms: { [key: string]: ReactElement } = {
        "xbox": <FaXbox size={platformIconSize} color={platformIconColor}/>,
        "playstation": <FaPlaystation size={platformIconSize} color={platformIconColor} />,
        "pc": <FaDesktop size={platformIconSize} color={platformIconColor}/>,
        "nintendo": <SiNintendo3Ds size={platformIconSize} color={platformIconColor}/>,
        "linux": <FaLinux size={platformIconSize} color={platformIconColor}/>,
        "mac": <FaApple size={platformIconSize} color={platformIconColor}/>,
        "android": <DiAndroid size={platformIconSize} color={platformIconColor}/>,
        "ios": <FaAppStoreIos size={platformIconSize} color={platformIconColor}/>
    }

    return (
        <div onClick={()=>document.location="/game/"+game.id} className="text-white w-1/5 m-7 mb-20 bg-gray-800 h-80 rounded-xl overflow-hidden
        shadow-xl shadow-yellow-700
        hover:scale-105 hover:shadow-yellow-500
        transition-all cursor-pointer">
            <div className="h-1/2">
                <img src={game.background_image} className="h-full w-full object-cover" alt="" />


            </div>
            <div className="flex justify-end flex-col h-1/2 p-3">
                <div className="text-white text-2xl font-semibold break-normal">{game.name}</div>
                <div className="p-1 text-sm">
                    <div className="flex justify-start my-3">
                        {game.parent_platforms.map((platform) =>
                            <div className="mr-2">
                                {platforms[platform.platform.slug]}
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;