function showToast(message, type = 'success', duration = 4000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button class="close-btn" aria-label="Закрыть тост">&times;</button>
        <div class="timeline" style="animation: shrink ${duration}ms linear forwards;"></div>
      `;

    const closeBtn = toast.querySelector('.close-btn');
    const removeToast = () => {
        toast.style.animation = 'toastOut 0.4s ease-in forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    };

    closeBtn.addEventListener('click', removeToast);
    container.appendChild(toast);
    setTimeout(removeToast, duration);
}