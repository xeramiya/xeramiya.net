const headerChanger = () => {
  console.log("にっこにっこにー");
  const dynamicNaviTrigger = document.querySelector("#navi-will-change");

  if (dynamicNaviTrigger) {
    const toggleClass = (
      element: HTMLElement,
      toBeAdded: string,
      toBeRemoved: string
    ) => {
      element.classList.add(toBeAdded);
      element.classList.remove(toBeRemoved);
      return;
    };

    const dynamicNaviIndex = document.querySelector(
      ".dynamic-navi > .index"
    ) as HTMLElement;
    const dynamicNaviIndexTrigger = document.querySelector(
      ".dynamic-navi > .index-trigger"
    ) as HTMLElement;
    const dynamicNaviInfoAddress = document.querySelector(
      ".dynamic-navi > .info > .address"
    ) as HTMLElement;
    const menuIcon = document.querySelector("#MenuIcon") as HTMLElement;
    const header = document.querySelector("header") as HTMLElement;
    const headerHeight = header.offsetHeight;
    let dynamicNaviFocusMode = false;

    window.addEventListener(
      "scroll",
      () => {
        let underDynamicNaviTrigger =
          dynamicNaviTrigger.getBoundingClientRect().top < headerHeight;

        if (underDynamicNaviTrigger && !dynamicNaviFocusMode) {
          dynamicNaviFocusMode = true;
          toggleClass(dynamicNaviIndex, "hide", "show");
          toggleClass(dynamicNaviIndexTrigger, "show", "hide");
          toggleClass(dynamicNaviInfoAddress, "show", "hide");
          toggleClass(dynamicNaviIndex, "list-vertical", "list-horizontal");
        }
        if (!underDynamicNaviTrigger && dynamicNaviFocusMode) {
          dynamicNaviFocusMode = false;
          toggleClass(dynamicNaviIndex, "show", "hide");
          toggleClass(dynamicNaviIndexTrigger, "hide", "show");
          toggleClass(dynamicNaviInfoAddress, "hide", "show");
          toggleClass(menuIcon, "menu-open", "menu-close");
          toggleClass(dynamicNaviIndex, "list-horizontal", "list-vertical");
          header.classList.remove("dynamic-navi-backdrop");
        }
      },
      false
    );

    header.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        if (dynamicNaviFocusMode) {
          dynamicNaviIndexTrigger.click();
        }
      },
      false
    );

    dynamicNaviIndexTrigger.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        if (menuIcon.classList.contains("menu-open")) {
          toggleClass(menuIcon, "menu-close", "menu-open");
          toggleClass(dynamicNaviIndex, "show", "hide");
          header.classList.add("dynamic-navi-backdrop");
        } else {
          toggleClass(menuIcon, "menu-open", "menu-close");
          toggleClass(dynamicNaviIndex, "hide", "show");
          header.classList.remove("dynamic-navi-backdrop");
        }
      },
      false
    );
  }
};
export default headerChanger;
