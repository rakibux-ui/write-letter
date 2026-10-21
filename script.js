// ===============================
// PAGE NAVIGATION
// ===============================

const home = document.getElementById("home");
const writePage = document.getElementById("writePage");
const successPage = document.getElementById("successPage");


function showPage(page) {

  home.classList.remove("active");
  writePage.classList.remove("active");
  successPage.classList.remove("active");

  page.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Page 1 → Page 2

document
  .getElementById("startBtn")
  .addEventListener("click", () => {

    showPage(writePage);

  });


// Page 2 → Page 1

document
  .getElementById("homeBtn")
  .addEventListener("click", () => {

    showPage(home);

  });



// ===============================
// CHARACTER COUNTER
// ===============================

const message =
  document.getElementById("message");

const count =
  document.getElementById("count");


message.addEventListener("input", () => {

  count.textContent =
    message.value.length;

});



// ===============================
// FORM
// ===============================

const form =
  document.getElementById("letterForm");

const sendBtn =
  document.getElementById("sendBtn");

const error =
  document.getElementById("error");


form.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    error.classList.add("d-none");


    // Check endpoint

    if (
      form.action.includes(
        "YOUR_FORMSPREE_ENDPOINT"
      )
    ) {

      error.textContent =
        "Please connect your Formspree endpoint first.";

      error.classList.remove(
        "d-none"
      );

      return;
    }


    sendBtn.disabled = true;

    sendBtn.textContent =
      "Sending your letter... 💌";


    try {

      const response =
        await fetch(
          form.action,
          {
            method: "POST",

            body:
              new FormData(form),

            headers: {
              "Accept":
                "application/json"
            }
          }
        );


      if (!response.ok) {

        throw new Error(
          "Sending failed"
        );

      }


      // Go to success page

      showPage(successPage);


      // Reset form

      form.reset();

      count.textContent = "0";


    } catch (err) {

      error.textContent =
        "Something went wrong. Please try again.";

      error.classList.remove(
        "d-none"
      );

    }


    sendBtn.disabled = false;

    sendBtn.textContent =
      "Send My Letter 💌";

  }
);



// ===============================
// WRITE ANOTHER
// ===============================

document
  .getElementById("anotherBtn")
  .addEventListener("click", () => {

    showPage(writePage);

  });
