import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"

//FETCH All Category
export const GET=async()=>{
    try{
        const categories=await prisma.category.findMany()
          return new NextResponse(JSON.stringify(categories),{status:200})
    
    }
    catch(err){
        return new NextResponse(JSON.stringify({
            message:"Sommething Went Wrong"
        }),{status:500})
    }

  
}

export const POST=()=>{
    return new NextResponse("Hello",{status:200})
}