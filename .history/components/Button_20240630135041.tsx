import Link from "next/link"
import { IoPencil } from "react-icons/io5"


export const CreateButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[10px] rounded-sm text-sm" href="/contacts/create">
            CREATE
        </Link>
    )
}

export const EditButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 p-1 rounded-sm text-sm" href="/contacts/create">
            <IoPencil/>
        </Link>
    )
}