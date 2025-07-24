import { db } from "@/app/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userEmail, userName } = await req.json();
   
    try {
        const docRef = doc(db, "users", userEmail);

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          
            return NextResponse.json(docSnap.data());
        } else {
            
            const data = {
                name: userName,
                email: userEmail,
                credits:10
            }
            
         await setDoc(doc(db, "users", userEmail), {
                ...data
        })
           
            return NextResponse.json(data)
        }
        
    } catch (e) {
        console.error("Firebase error:", e);
        return NextResponse.json({ error: e || "Something went wrong" }, { status: 500 });
    }
}