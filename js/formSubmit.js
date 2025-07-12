const form = document.getElementById("newsletterForm");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showToast("Dziękujemy! E-mail zapisany. Gdy ruszymy, otrzymasz wiadomość ze zniżką.", "success");
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    const msg = data["errors"].map(error => error["message"]).join(", ");
                    showToast(msg, "error");
                } else {
                    showToast("Ups! Coś poszło nie tak. Spróbuj ponownie.", "error");
                }
            });
        }
    }).catch(error => {
        showToast("Ups! Nie udało się wysłać formularza.", "error");
    });
}

form.addEventListener("submit", handleSubmit)