import { Searchbar } from "./Searchbar"

export const AppBar = ()=>{
    return <div className="flex justify-between pt-1 p-3 ">
        <div className="text-md inline-flex items-center pb-2">
            Youtube 
        </div>
        <div>
            <Searchbar />
        </div>
        <div>
            Sign in
        </div>


    </div>

}