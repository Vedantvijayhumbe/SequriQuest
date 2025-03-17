import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
    const filePath = path.join(process.cwd(), "public", "challenge4_secret.txt"); 
    const fileContent = fs.readFileSync(filePath);

    return new NextResponse(fileContent, {
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="challenge4_secret.txt"`,
        },
    });
}