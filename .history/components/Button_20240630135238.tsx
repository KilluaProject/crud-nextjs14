import Link from "next/link"
import { IoPencil, IoTrashBinOutline } from "react-icons/io5"


export const CreateButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[10px] rounded-sm text-sm" href="/contacts/create">
            CREATE
        </Link>
    )
}

export const EditButton = () =>{
    return(
        <Link className="rounded-sm border p-1 hover:bg-gray-100" href="/contacts/create">
            <IoPencil size={20}/>
        </Link>
    )
}

export const DeleteButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 p-1 rounded-sm text-sm" href="/contacts/create">
            <IoTrashBinOutline size={20}/>
        </Link>
    )
}