  const modeBtn = document.getElementById("mode-button");
  const modeDiv = document.getElementById("mode-change-div");
  const modeChangeBtns = document.querySelectorAll(".mode-change-button");
  const themeLink = document.getElementById("theme-link");
  const modeBtnImg = document.getElementById("mode-button-img");

  const shareicon = document.querySelectorAll(".shareicon");




  // Show the div when main button is clicked
  modeBtn.addEventListener("click", () => {
    modeDiv.style.display = "block";
  });

  // Hide the div when any inner button is clicked
  modeChangeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let t = e.target.textContent;
          if (t === "Light") {
            shareicon[0].setAttribute("src","icons/share-black.png");
            shareicon[1].setAttribute("src","icons/clg-black.png");
            shareicon[2].setAttribute("src","icons/certificateCode-black.png");
            shareicon[3].setAttribute("src","icons/experience-black.png");
            let i = 4;
            while(i <= 8) {
               shareicon[i].setAttribute("src","icons/calendar-black.png");
               i++;
            }
shareicon[9].setAttribute("src","icons/call.png"); 
shareicon[10].setAttribute("src","icons/email-black.png"); 
            modeBtnImg.setAttribute("src","icons/brightness.png");
            themeLink.setAttribute("href", "Light.css");
      } else if (t === "Dark") {
        shareicon[0].setAttribute("src","icons/share.png");
        shareicon[1].setAttribute("src","icons/clg.png");
        shareicon[2].setAttribute("src","icons/certificateCode.png");
        shareicon[3].setAttribute("src","icons/experience.png");
        


         let i = 4;
            while(i <= 8) {
               shareicon[i].setAttribute("src","icons/calendar.png");
               i++;
            }
          shareicon[9].setAttribute("src","icons/call-white.png");   
            shareicon[10].setAttribute("src","icons/email.png");  
        modeBtnImg.setAttribute("src","icons/night-mode.png");
        themeLink.setAttribute("href", "Dark.css");
      }
      modeDiv.style.display = "none";
    });
  });

    function copyPageLink() {
    // Copy your portfolio link
    navigator.clipboard.writeText("https://bikrambasantra.github.io/BikramPortfolio/main.html#")
        .then(() => {
            alert("Page link copied!");
        })
        .catch(err => {
            console.error("Error copying link: ", err);
        });
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (fname.length < 2) {
    alert("First name must be at least 2 characters.");
    return;
  }
  if (lname.length < 2) {
    alert("Last name must be at least 2 characters.");
    return;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (message.length < 5) {
    alert("Message should be at least 5 characters long.");
    return;
  }

  alert("Currently Working on this app but still Thank You For Your Message");
  this.reset();
});



