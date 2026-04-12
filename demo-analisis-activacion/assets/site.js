document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll("[data-form-type]");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formType = form.getAttribute("data-form-type");
      var message =
        form.getAttribute("data-success-message") || "Hemos recibido tu solicitud.";

      window.dataLayer = window.dataLayer || [];
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
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "product_interest",
        product_name: link.getAttribute("data-product-name"),
        placement: link.getAttribute("data-placement") || "unspecified",
        page_path: window.location.pathname
      });
    });
  });
});
