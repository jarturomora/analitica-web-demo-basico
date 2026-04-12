document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var pageType = body.getAttribute("data-page-type");
  var pageProductName = body.getAttribute("data-product-name");
  var forms = document.querySelectorAll("[data-form-type]");

  window.dataLayer = window.dataLayer || [];

  if (pageType === "catalog") {
    window.dataLayer.push({
      event: "view_catalog",
      page_path: window.location.pathname
    });
  }

  if (pageType === "about") {
    window.dataLayer.push({
      event: "about_view",
      page_path: window.location.pathname
    });
  }

  if (pageType === "contact") {
    window.dataLayer.push({
      event: "view_contact",
      page_path: window.location.pathname
    });
  }

  if (pageType === "product" && pageProductName) {
    window.dataLayer.push({
      event: "view_product",
      product_name: pageProductName,
      page_path: window.location.pathname
    });
  }

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

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formType = form.getAttribute("data-form-type");
      var message =
        form.getAttribute("data-success-message") || "Hemos recibido tu solicitud.";

      window.dataLayer.push({
        event: "form_submit",
        form_type: formType,
        page_path: window.location.pathname
      });

      alert(message);
      form.reset();
    });
  });

  var productLinks = document.querySelectorAll("[data-product-name]");
  productLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      window.dataLayer.push({
        event: "product_interest",
        product_name: link.getAttribute("data-product-name"),
        placement: link.getAttribute("data-placement") || "unspecified",
        page_path: window.location.pathname
      });
    });
  });
});
