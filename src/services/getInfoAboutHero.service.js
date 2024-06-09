import axios from "axios";
export async function getInfoAboutHeroes(url){
    try{
        const responce = await axios.get(url);  
        return responce.data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
export async function getInfoAboutPage(url){

}