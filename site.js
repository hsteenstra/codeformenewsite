/* =========================================================
   CODE FOR ME SITE JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


  /* -------------------------------------------------------
     MOBILE MENU
  ------------------------------------------------------- */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

  }


  /* -------------------------------------------------------
     CLOSE MOBILE MENU WHEN LINK IS CLICKED
  ------------------------------------------------------- */

  document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

      if (mainNav) {
        mainNav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  });


  /* -------------------------------------------------------
     AUGUST NEWSLETTER POPUP
  ------------------------------------------------------- */

  const newsletterModal =
    document.getElementById("newsletterModal");

  const closeModalButtons =
    document.querySelectorAll("[data-close-modal]");

  const dismissNewsletter =
    document.getElementById("dismissNewsletter");


  if (newsletterModal) {

    const alreadyDismissed =
      localStorage.getItem("cfmAugustNewsletterDismissed");


    /*
      Show the popup after a short delay.

      It only appears once unless the user clears
      their browser storage.
    */

    if (!alreadyDismissed) {

      setTimeout(() => {

        newsletterModal.classList.add("active");

      }, 3500);

    }


    /* CLOSE BUTTON */

    closeModalButtons.forEach(button => {

      button.addEventListener("click", () => {

        newsletterModal.classList.remove("active");

      });

    });


    /* DON'T SHOW AGAIN */

    if (dismissNewsletter) {

      dismissNewsletter.addEventListener("click", () => {

        localStorage.setItem(
          "cfmAugustNewsletterDismissed",
          "true"
        );

        newsletterModal.classList.remove("active");

      });

    }


    /* CLICK OUTSIDE */

    newsletterModal.addEventListener("click", event => {

      if (event.target === newsletterModal) {

        newsletterModal.classList.remove("active");

      }

    });

  }


  /* -------------------------------------------------------
     ESCAPE KEY CLOSES MODALS
  ------------------------------------------------------- */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      document
        .querySelectorAll(".modal-overlay.active")
        .forEach(modal => {

          modal.classList.remove("active");

        });

    }

  });


});
