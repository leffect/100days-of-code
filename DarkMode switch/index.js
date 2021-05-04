const toggle = document.getElementById("mytoggle");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});