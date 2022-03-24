import { clientGet } from "../../services/URLApi"


export const getMovie = async (movieKey?: number) => {
    return await clientGet(`movieApi${movieKey ? `/${movieKey}` : ""}`);
}