import nodemailer from 'nodemailer';

export async function POST(req: any, res: any) {

    const data = await req.json()

    const { email, name, message } = data;

    console.log('line5', email, name, message);


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
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email,
    };


    try {
        const res = await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!', status: 200 }))
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send message.', status: 500 }))
    }



    // return new Response(JSON.stringify({ message: `Hello, world`, status: 200 }))

}