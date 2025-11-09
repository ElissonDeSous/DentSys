// AJUSTAR MENU LATERAL
    function ajustarLayout() {
        const mainContent = document.getElementById("mainContent");
        if (window.innerWidth >= 768) {
          mainContent.style.marginLeft = "270px";
          mainContent.style.marginTop = "0";
        } else {
          mainContent.style.marginLeft = "0";
          mainContent.style.marginTop = "56px";
        }
      }
      window.addEventListener("resize", ajustarLayout);
      ajustarLayout();
// BOTÃO MENU
        const toggleSidebarBtn = document.getElementById("toggleSidebar");
      const sidebarMenu = document.getElementById("sidebarMenu");

      if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener("click", () => {
          sidebarMenu.classList.toggle("minimized");

          // TROCA O ÍCONE DO BOTÃO
          const icon = toggleSidebarBtn.querySelector("i");
          if (sidebarMenu.classList.contains("minimized")) {
            icon.classList.replace("bi-chevron-left", "bi-chevron-right");
          } else {
            icon.classList.replace("bi-chevron-right", "bi-chevron-left");
          }
        });
      }
