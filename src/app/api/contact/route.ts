import { NextResponse } from "next/server";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    // Honeypot: legitimate users should not complete this field.
    if (body.website) return NextResponse.json({ok:true});
    if (!name || name.length > 100 || !EMAIL.test(email) || email.length > 254 || !message || message.length > 4000) {
      return NextResponse.json({error:"Please check your details and try again."},{status:400});
    }
    const key = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!key || !from) return NextResponse.json({error:"Email delivery is not configured yet. Please use the email link instead."},{status:503});
    const response = await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"},
      body:JSON.stringify({from,to:["rizvinazneen896@gmail.com"],reply_to:email,subject:"Portfolio enquiry from "+name,text:"Name: "+name+"\nEmail: "+email+"\n\n"+message})
    });
    if(!response.ok) return NextResponse.json({error:"Email could not be sent. Please use the email link instead."},{status:502});
    return NextResponse.json({ok:true});
  } catch {
    return NextResponse.json({error:"Unable to submit this message. Please try again."},{status:500});
  }
}
