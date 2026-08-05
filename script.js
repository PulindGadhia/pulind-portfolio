// Initialize EmailJS
emailjs.init({
    publicKey: "AlyAeKpEaYUbpuvCZ",
});

const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = "TRANSMITTING...";

    try {

        await emailjs.sendForm(
            "service_ebsb3cf",
            "template_smhq02l",
            form
        );

        // Keep your same design
        form.innerHTML = `
            <div class="py-20 text-center">
                <i class="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i>

                <h3 class="text-2xl font-black uppercase">
                    Transmission Received
                </h3>

                <p class="font-mono text-sm mt-2">
                    System response initialized.<br>
                    I will reach out shortly.
                </p>
            </div>
        `;

    } catch (error) {

    console.error("EmailJS Error:", error);
    console.log("Status:", error.status);
    console.log("Text:", error.text);
    console.log("Full Error:", JSON.stringify(error));

    button.disabled = false;
    button.innerHTML = originalText;

    alert(error.text || "Unknown EmailJS error");
}

});