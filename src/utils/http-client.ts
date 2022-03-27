import { GameBasicInfo, GameDetails } from "../models/Game.model";

export class HttpClient {
  public static apiKey: string = "fced4ea393524a4d871cbcd4c9859db5";
  public static baseURL: string = "https://api.rawg.io/api/games";
  static async getGames(page?: number, searchWord?: string) {
    let url = new URL(this.baseURL);
    url.searchParams.append("key", this.apiKey);
    url.searchParams.append("page", page ? page.toString() : "1");
    if (searchWord) url.searchParams.append("search", searchWord);
    const response = await fetch(url.toString());
    const responseData: { results: GameBasicInfo[]; count: number } =
      await response.json();
    return responseData;
  }

  public static async getGameDetails(gameId: string) {
    //query game basic info
    let url = new URL(this.baseURL + "/" + gameId);
    url.searchParams.append("key", this.apiKey);
    let response = await fetch(url.toString());
    let responseData: GameDetails = await response.json();

    //query game trailers
    url = new URL(this.baseURL + "/" + gameId + "/movies");
    url.searchParams.append("key", this.apiKey);
    response = await fetch(url.toString());
    responseData.movies = (await response.json())["results"];

    //query game screenshots
    url = new URL(this.baseURL + "/" + gameId + "/screenshots");
    url.searchParams.append("key", this.apiKey);
    response = await fetch(url.toString());
    responseData.screenshots = (await response.json())["results"];

    return responseData;
  }
}
