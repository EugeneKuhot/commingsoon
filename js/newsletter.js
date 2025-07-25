document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const container = document.getElementById("toast-container");
  const submitBtn = document.querySelector("#submit-btn");

  if (!form || !container) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    submitBtn.disabled = true;
    try {
      const res = await emailjs.sendForm(
          "service_ublo17q",
          "template_ixc2zpc",
          form
      );

      showToast("Dziękujemy! Otrzymasz e-mail z kodem rabatowym.", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showToast("Ups! Nie udało się wysłać formularza.", "error");
    }
    submitBtn.disabled = false;
  });

  function showToast(msg, type = "success", duration = 6000) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${msg}</span>
      <button class="close-btn" aria-label="Zamknij">&times;</button>
      <div class="timeline" style="animation: shrink ${duration}ms linear forwards;"></div>
    `;

    toast.querySelector(".close-btn").onclick = () => removeToast(toast);
    container.appendChild(toast);
    setTimeout(() => removeToast(toast), duration);
  }

  const removeToast = (toast) => {
    toast.style.animation = "toastOut 0.4s ease-in forwards";
    setTimeout(() => toast.remove(), 400);
  };
});
