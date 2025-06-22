let generatedOTP = "";

function generateOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById("message").innerText = "Your OTP is: " + generatedOTP;
    document.getElementById("message").style.color = "black";
}

function verifyOTP() {
    const userInput = document.getElementById("otp-input").value.trim();
    const message = document.getElementById("message");

    if (userInput === "") {
        message.innerText = "Please enter the OTP.";
        message.style.color = "orange";
    } else if (userInput === generatedOTP) {
        message.innerText = "✅ Valid OTP";
        message.style.color = "green";
    } else {
        message.innerText = "❌ Invalid OTP";
        message.style.color = "red";
    }
}
