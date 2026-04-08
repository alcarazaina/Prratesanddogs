async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error("Error cargando componente:", file);
  }
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");