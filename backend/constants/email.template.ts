const getVerificationCodeTemplate = (code: string) => `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
      background: #f4f4f4;
      text-align: center;
      padding: 20px;
    }

    .logo {
      font-size: 36px;
      font-weight: bold;
      line-height: 1;
    }

    .logo .x {
      color: #007BFF;
      font-size: 48px;
    }

    .logo .a {
      color: #FF0000;
      font-size: 48px;
      position: relative;
      bottom: -10px;
    }

    .content {
      padding: 20px;
      text-align: center;
    }

    .content h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    .content p {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }

    .verification-code {
      display: inline-block;
      padding: 10px 20px;
      font-size: 18px;
      color: #ffffff;
      background-color: #007BFF;
      width: fit-content;
      border-radius: 5px;
      text-decoration: none;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin: auto;
    }

    .footer {
      background: #f4f4f4;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        <span class="x">X</span>Inst<span class="a">a</span>
      </div>
    </div>
    <div class="content">
      <h2>Verify Your Email Address</h2>
      <p>Thank you for signing up with Xinsta! Use the verification code below to complete your registration:</p>
      <div class="verification-code">${code}</div>
      <p>If you did not request this code, please ignore this email.</p>
    </div>
    <div class="footer">
      &copy; 2024 devsuvam.xyz. All rights reserved.
    </div>
  </div>
</body>

</html>`;

const getResetPasswordTemplate = (link: string) => `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
      background: #f4f4f4;
      text-align: center;
      padding: 20px;
    }

    .logo {
      font-size: 36px;
      font-weight: bold;
      line-height: 1;
    }

    .logo .x {
      color: #007BFF;
      font-size: 48px;
    }

    .logo .a {
      color: #FF0000;
      font-size: 48px;
      position: relative;
      bottom: -10px;
    }

    .content {
      padding: 20px;
      text-align: center;
    }

    .content h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    .content p {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }

    .reset-link {
      display: inline-block;
      padding: 10px 20px;
      font-size: 18px;
      color: #ffffff;
      background-color: #007BFF;
      border-radius: 5px;
      text-decoration: none;
      margin: 10px 0;
    }

    .footer {
      background: #f4f4f4;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        <span class="x">X</span>Inst<span class="a">a</span>
      </div>
    </div>
    <div class="content">
      <h2>Reset Your Password</h2>
      <p>We received a request to reset your password. Click the button below to reset it:</p>
      <a href="${link}" class="reset-link">Reset Password</a>
      <p>If you did not request this, please ignore this email or contact our support team.</p>
    </div>
    <div class="footer">
      &copy; 2024 devsuvam.xyz. All rights reserved.
    </div>
  </div>
</body>

</html>`;

const getWelcomeEmail = ({
  username,
  email,
  fullname,
}: {
  username: string;
  email: string;
  fullname: string;
}) => `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid #eaeaea;
    }

    .header {
      background: linear-gradient(90deg, #007BFF, #FF0000);
      text-align: center;
      padding: 30px 20px;
      color: #ffffff;
    }

    .header .logo {
      font-size: 36px;
      font-weight: bold;
      line-height: 1;
    }

    .header .logo .x {
      color: #ffffff;
      font-size: 48px;
    }

    .header .logo .a {
      color: #FF0000;
      font-size: 48px;
      position: relative;
      bottom: -10px;
    }

    .content {
      padding: 30px 20px;
      text-align: center;
    }

    .content h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 15px;
    }

    .content p {
      font-size: 16px;
      color: #555;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .details {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      text-align: left;
      margin: 20px auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .details p {
      font-size: 16px;
      color: #333;
      margin: 5px 0;
    }

    .action-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 25px;
      font-size: 16px;
      color: #ffffff;
      background-color: #007BFF;
      border-radius: 5px;
      text-decoration: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }

    .action-button:hover {
      background-color: #0056b3;
    }

    .footer {
      background: #f4f4f4;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #999;
      border-top: 1px solid #eaeaea;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        <span class="x">X</span>Inst<span class="a">a</span>
      </div>
      <p>Welcome to the future of connectivity and creativity!</p>
    </div>
    <div class="content">
      <h2>Welcome to Xinsta, ${fullname}!</h2>
      <p>We are absolutely thrilled to have you join our community. At Xinsta, we are dedicated to bringing you an
        innovative and seamless experience. Here are your account details:</p>
      <div class="details">
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <a href="https://xinsta.vercel.app" class="action-button">Get Started</a>
      </div>
      <p>If you have any questions or need assistance, feel free to reach out to our support team. We're here to help!
      </p>
    </div>
    <div class="footer">
      &copy; 2024 Xinsta. All rights reserved.<br>
      <a href="#" style="color: #007BFF; text-decoration: none;">Terms of Service</a> | <a
        href="#" style="color: #007BFF; text-decoration: none;">Privacy Policy</a>
    </div>
  </div>
</body>

</html>`;

const resetSuccessfullPage = () => `<html>
<head>
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #333;
    }

    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      text-align: center;
    }

    h2 {
      color: #4CAF50;
    }

    p {
      margin: 20px 0;
      font-size: 16px;
    }

    a {
      color: #007BFF;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 20px;
      background-color: #007BFF;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      text-align: center;
    }

    .button:hover {
      background-color: #0056b3;
    }

    /* Circle background for checkmark */
    .success-icon-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #4CAF50;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 20px auto;
      animation: pulse 1.5s ease-in-out infinite;
    }

    /* Checkmark icon */
    .success-icon {
      width: 40px;
      height: 40px;
      stroke: #fff;
      animation: checkmark 0.6s ease-out forwards;
    }

    /* Animation for checkmark */
    @keyframes checkmark {
      0% {
        stroke-dasharray: 0, 100;
      }

      100% {
        stroke-dasharray: 100, 0;
      }
    }

    /* Animation for the circle */
    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- Circle background with animation -->
    <div class="success-icon-wrapper">
      <!-- Green checkmark SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" class="success-icon" viewBox="0 0 24 24" fill="none" stroke="#fff"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </div>
    <h2>Password Reset Successful</h2>
    <p>Your password has been successfully updated. You can now log in with your new password.</p>
  </div>
</body>

</html>`;

const getResetPasswordPage = ({ token }: { token: string }) => ` <html>
        <head>
          <title>Reset Password</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f7f9fc;
              padding: 0;
              margin: 0;
              color: #333;
            }
            .container {
              max-width: 450px;
              margin: 50px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            h2 {
              color: #4a90e2;
              font-size: 24px;
              margin-bottom: 20px;
            }
            .header {
              background: #f4f4f4;
              text-align: center;
              padding: 20px;
            }
            .logo {
              font-size: 36px;
              font-weight: bold;
              line-height: 1;
            }
            .logo .x {
              color: #007BFF;
              font-size: 48px;
            }
            .logo .a {
              color: #FF0000;
              font-size: 48px;
              position: relative;
              bottom: -10px;
            }
            input {
              width: 90%;
              padding: 12px;
              margin: 10px 0;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
            }
            button {
              width: 100%;
              padding: 12px;
              background-color: #4a90e2;
              color: white;
              border: none;
              border-radius: 4px;
              font-size: 16px;
              cursor: pointer;
              transition: background-color 0.3s;
            }
            button:hover {
              background-color: #357ab7;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #888;
            }
            #form{
              display: flex;
              flex-direction: column;
              justify-content:center ;
              /* align-items: center; */

            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <span class="x">X</span>Inst<span class="a">a</span>
              </div>
            </div>
            <h2>Reset Your Password</h2>
            <p>Enter a new password to reset your account password.</p>
            <form id="form" action="/api/v1/auth/reset-password/${token}" method="POST">
              <div>
                <label for="password">New Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div>
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
              </div>
              <button type="submit">Update Password</button>
            </form>
            <div class="footer">
              <p>If you didn't request a password reset, please ignore this email.</p>
            </div>
          </div>
        </body>
      </html>`;

export {
  getVerificationCodeTemplate,
  getResetPasswordTemplate,
  getWelcomeEmail,
  resetSuccessfullPage,
  getResetPasswordPage,
};
