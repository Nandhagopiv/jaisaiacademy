const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Multer storage for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Define the folder to save uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique filenames
  }
});

const upload = multer({ storage: storage });

// Set up Nodemailer transporter with Gmail (or any other email service)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaisaipvtltd@gmail.com', // Your email address
    pass: 'pudb owik hbdq oorn', // App-specific password (if 2FA is enabled on Gmail)
  },
});

// Handle job application submissions with file upload
app.post('/applying', upload.single('resume'), async (req, res) => {
  const { name, email, mobile, jobRole, presentAddress, preferredLocation, willingToRelocate, currentSalary, expectedSalary } = req.body;
  
  const resume = req.file ? req.file : null;

  const mailOptions = {
    from: 'jaisaipvtltd@gmail.com',
    to: 'nandhagopy@gmail.com',
    subject: `Job Application from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Job Role:</strong> ${jobRole}</p>
      <p><strong>Present Address:</strong> ${presentAddress}</p>
      <p><strong>Preferred Location:</strong> ${preferredLocation}</p>
      <p><strong>Willing to Relocate:</strong> ${willingToRelocate}</p>
      <p><strong>Current Salary:</strong> ${currentSalary}</p>
      <p><strong>Expected Salary:</strong> ${expectedSalary}</p>
    `,
    attachments: [
      {
        filename: resume ? resume.originalname : 'No resume uploaded',
        path: resume ? resume.path : null,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Application submitted successfully');
    }
  });
});

app.post('/sendingmessage',(req,res)=>{

  const {name,email,message} = req.body

  const mailOptions = {
    from: 'jaisaipvtltd@gmail.com',
    to: 'nandhagopy@gmail.com',
    subject: `Message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  // Send email with application details and resume
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Application submitted successfully');
    }
  });
})

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
