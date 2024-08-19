document.getElementById("loveButton").addEventListener("click", function() {
    const lovePage = window.open("", "", "width=600,height=600");

    lovePage.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                    position: relative;
                }
                .love-counter {
                    font-size: 100px; /* বড় ❤️ ইমোজির জন্য সাইজ */
                    color: red;
                }
                .text {
                    font-size: 24px; /* আরো স্পষ্ট এবং সুন্দর লেখার জন্য সাইজ বাড়ানো হয়েছে */
                    color: #333;
                    margin-top: 20px;
                }
                @keyframes fallingHearts {
                    from {
                        top: -10%; /* স্ক্রিনের উপরের অংশ থেকে শুরু */
                    }
                    to {
                        top: 110%; /* স্ক্রিনের নিচের অংশ পর্যন্ত পড়া */
                    }
                }
                .falling-heart {
                    position: absolute;
                    font-size: 50px;
                    animation: fallingHearts 5s linear infinite;
                    opacity: 0.7;
                }
                .falling-heart:nth-child(1) { left: 5%; animation-duration: 3s; }
                .falling-heart:nth-child(2) { left: 15%; animation-duration: 4s; }
                .falling-heart:nth-child(3) { left: 25%; animation-duration: 5s; }
                .falling-heart:nth-child(4) { left: 35%; animation-duration: 3.5s; }
                .falling-heart:nth-child(5) { left: 45%; animation-duration: 4.5s; }
                .falling-heart:nth-child(6) { left: 55%; animation-duration: 5.5s; }
                .falling-heart:nth-child(7) { left: 65%; animation-duration: 3.2s; }
                .falling-heart:nth-child(8) { left: 75%; animation-duration: 4.2s; }
                .falling-heart:nth-child(9) { left: 85%; animation-duration: 3.8s; }
                .falling-heart:nth-child(10) { left: 95%; animation-duration: 5s; }
            </style>
        </head>
        <body>
            <div class="love-counter">❤️</div>
            <div class="text">Ami Tomay Unlimited Valobashi Ela</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <script>
                let counter = 1;
                setInterval(() => {
                    document.querySelector('.love-counter').innerText = "❤️ " + counter;
                    counter += 10; // সংখ্যা বৃদ্ধির গতি ১০ গুণ বৃদ্ধি করা হয়েছে
                }, 5); // প্রতি 5 মিলিসেকেন্ডে সংখ্যা বাড়বে
            </script>
        </body>
        </html>
    `);
});
