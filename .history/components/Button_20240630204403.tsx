"use client"

import Link from "next/link"
import { IoPencil, IoTrashBinOutline } from "react-icons/io5"
import { useFormStatus } from "react-dom"

export const CreateButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[10px] rounded-sm text-sm" href="/contacts/create">
            CREATE
        </Link>
    )
}

export const EditButton = () =>{
    return(
        <Link className="rounded-sm border p-1 hover:bg-gray-100" href="/contacts/edit">
            <IoPencil size={20}/>
        </Link>
    )
}

export const DeleteButton = () =>{
    return(
        <Link className="rounded-sm border p-1 hover:bg-gray-100" href="/contacts/delete">
            <IoTrashBinOutline size={20}/>
        </Link>
    )
}

export const SubmitButton = ({label}: {label:string}) => {
    const { pending } = useFormStatus();
    return (

        <button type='submit' className='text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-sm text-sm w-full py-3 px-5' disabled={pending}>

            {label === "Submit" ? (
                <span>{pending ? "Saving ..." : "Save"}</span>
            ):(
                <span>{pending ? "Updating ..." : "Update"}</span>
            )}

        </button>
    )
}