const menuLink = document.querySelectorAll(".nav__link");
const menuBtn = document.querySelector(".header__btn");
const menu = document.querySelector(".nav");
const сurrency = document.querySelectorAll(".tariff__сurrency");
const tariffPrice = document.querySelectorAll(".tariff__value");
const tariffDate = document.querySelectorAll(".tariff__date");

const showMenu = () => {
  menu.classList.toggle("active-menu");
  menuBtn.classList.toggle("active-btn");
};

const hideMenu = () => {
  menu.classList.remove("active-menu");
  menuBtn.classList.remove("active-btn");
};

const conversionRuble = () => {
  tariffPrice.forEach((el) => {
    const value = Math.round(el.innerText * 2);
    el.innerText = value;
  });
};

const conversionEuro = () => {
  tariffPrice.forEach((el) => {
    const value = Math.round(el.innerText / 3);
    el.innerText = value;
  });
};

const conversionDollar = () => {
  tariffPrice.forEach((el) => {
    const value = Math.round(el.innerText * 1.5);
    el.innerText = value;
  });
};

const editCurrency = (e) => {
  if (e.target.innerText === "$") {
    conversionRuble();
    return сurrency.forEach((el) => {
      el.innerHTML = "₽";
    });
  }

  if (e.target.innerText === "₽") {
    conversionEuro();
    return сurrency.forEach((el) => {
      el.innerHTML = "€";
    });
  }

  if (e.target.innerText === "€") {
    conversionDollar();
    return сurrency.forEach((el) => {
      el.innerHTML = "$";
    });
  }
};
const editDate = (e) => {
  if (e.target.innerText === "/Month") {
    tariffPrice.forEach((p) => {
      const value = Math.round(p.innerText / 30);
      p.innerText = value;
    });
    return tariffDate.forEach((d) => {
      d.innerText = "/Day";
    });
  } else {
    tariffPrice.forEach((p) => {
      const value = Math.round(p.innerText * 30);
      p.innerText = value;
    });
    return tariffDate.forEach((d) => {
      d.innerText = "/Month";
    });
  }
};

menuBtn.addEventListener("click", showMenu);
menuLink.forEach((l) => {
  l.addEventListener("click", hideMenu);
});
сurrency.forEach((el) => {
  el.addEventListener("click", editCurrency);
});
tariffDate.forEach((el) => {
  el.addEventListener("click", editDate);
});
