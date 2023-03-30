const butInstall = document.getElementById("buttonInstall");

// Event listener for install event
window.addEventListener("beforeinstallprompt", (event) => {
  // store the events triggered by install
  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

//
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  // Show the prompt for click event
  if (!promptEvent) {
    return;
  }
  // resets prompt
  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Clears prompt
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});

//THIS PAGE IS COMPLETE
