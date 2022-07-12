function ThemeToggle() {
    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    ThemeSet();
}

function ThemeSet() {
    if (localStorage.getItem("theme") === "light") {
        $("body").removeClass("backg-dark");
        $("nav")
            .removeClass("navbar-dark bg-dark")
            .addClass("navbar-light bg-light");
        $(".text").removeClass("col-gray-white");
        $(".pbar").removeClass("pbar-bg");
        $(".card").removeClass("card-dark");
    } else {
        $("body").addClass("backg-dark");
        $("nav")
            .addClass("navbar-dark bg-dark")
            .removeClass("navbar-light bg-light");
        $(".text").addClass("col-gray-white");
        $(".pbar").addClass("pbar-bg");
        $(".card").addClass("card-dark");
    }
}
ThemeSet();
