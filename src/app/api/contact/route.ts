import { NextRequest, NextFetchEvent } from 'next/server';
import nodemailer from 'nodemailer';



export async function POST(req: NextRequest, res: any) {

    // !In case of sending formData in body, no need to use req.json(); it will give error. Retrieve data using req.formData()
    const data: any = await req.formData();

    const emailData: any = {};


    for (const key of data.keys()) {
        emailData[key] = data.get(key);
    }

    const { email, name, message, interestedIn, file } = emailData;


    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rigved.shrivastava232@gmail.com', // Replace with your Gmail address
            pass: 'pczf ikbx scpd jcxe', // Replace with your App Password
        },
    });

    // Configure the email options
    const mailOptions = {
        from: email,
        to: 'rigved.shrivastava232@gmail.com', // Replace with your email
        subject: 'New Contact Us Message',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\nInterested in:\n${interestedIn}`,
        replyTo: email,
    };


    try {
        const res = await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!', status: 200 }))
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send message.', status: 500 }))
    }



}