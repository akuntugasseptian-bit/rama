import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectDB();

        return NextResponse.json({
            success: true,
            message: "MONGODB Berhasil Terhubung",
        });
    }catch (error){
        console.error("MongoDB Error: ", error); 
        
        return NextResponse.json({
            success: false,
            message: "Gagal terhubung ke MongoDB",
        },
        {
            status: 500,
        }
    );
    }
}