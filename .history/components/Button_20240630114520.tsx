import Link from "next/link"


export const CreateButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px]" href="/contacts/create">
            
        </Link>
    )
}