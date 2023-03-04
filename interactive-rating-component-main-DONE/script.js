const ratingBtn = document.querySelector(".ratings");
const submitBtn = document.querySelector(".submit-btn");
const ratingSelectBox = document.querySelector(".rating");
const thankYouBox = document.querySelector(".thank-you");
const result = document.querySelector(".result");
const error = document.querySelector(".error");



const ratingSelection = ()=>{
    let click = false;
    ratingBtn.addEventListener("click",event => {
        click = true;
        let rate = event.target.innerHTML;
        result.innerHTML = `You selected ${rate} out of 5`;
    });
    submitBtn.addEventListener("click",()=>{
        if(click == false) {
            error.style.display = "block";
            setTimeout(()=>{
                error.style.display = "none";
            }, 5000);
        } else {
            ratingSelectBox.classList.toggle("inactive");
            thankYouBox.classList.toggle("inactive");
        }

    });
}

ratingSelection();