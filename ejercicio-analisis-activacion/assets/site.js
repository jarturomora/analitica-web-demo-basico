document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var pageType = body.getAttribute("data-page-type");
  var forms = document.querySelectorAll("[data-form-type]");
  var ctas = document.querySelectorAll("[data-cta-name]");

  window.dataLayer = window.dataLayer || [];

  if (pageType === "specs") {
    window.dataLayer.push({
      event: "view_specs",
      page_path: window.location.pathname
    });
  }

  if (pageType === "waitlist") {
    window.dataLayer.push({
      event: "view_waitlist",
      page_path: window.location.pathname
    });
  }

  ctas.forEach(function (cta) {
    cta.addEventListener("click", function () {
      window.dataLayer.push({
        event: "cta_click",
        cta_name: cta.getAttribute("data-cta-name"),
        cta_location: cta.getAttribute("data-cta-location") || "unspecified",
        page_path: window.location.pathname
      });
    });
  });

  forms.forEach(function (form) {
    var started = false;
    var startFields = form.querySelectorAll("input, select, textarea");

    startFields.forEach(function (field) {
      field.addEventListener("focus", function () {
        if (started) {
          return;
        }

        started = true;
        window.dataLayer.push({
          event: "form_start",
          form_type: form.getAttribute("data-form-type"),
          page_path: window.location.pathname
        });
      });
    });

    var reason = form.querySelector("[name='interes']");
    if (reason) {
      reason.addEventListener("change", function () {
        window.dataLayer.push({
          event: "select_waitlist_interest",
          selected_interest: reason.value,
          form_type: form.getAttribute("data-form-type"),
          page_path: window.location.pathname
        });
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      window.dataLayer.push({
        event: "form_submit",
        form_type: form.getAttribute("data-form-type"),
        page_path: window.location.pathname
      });

      alert(
        form.getAttribute("data-success-message") ||
          "Gracias. Hemos recibido tu solicitud."
      );
      form.reset();
      started = false;
    });
  });
});
