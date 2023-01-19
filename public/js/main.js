// Homepage slide show
$(window).on("load", function () {
  // home section slideshow
  let slideIndex = $(".slideshow.active").index();
  const slideLen = $(".slideshow").length;
  function slideShow() {
    // console.log(slideIndex);
    $(".slideshow").removeClass("active").eq(slideIndex).addClass("active");
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();
});

// Fixed header
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

// NavToggler
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
		this.classList.toggle("accordion-active");
		this.classList.toggle("accord-p");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// filtering doctor images
const filterContainer = document.querySelector(".department-filter");
filterOptions = filterContainer.children;
totalFilterBtn = filterOptions.length;
doctors = document.querySelectorAll(".doctor");
totalDoctors = doctors.length;

 for (let i = 0; i < totalFilterBtn; i++) {
	filterContainer.addEventListener("change", (e) => {
		const filterValue = e.target.value;
		console.log(filterValue);
		for(let k=0; k < totalDoctors; k++){
				if(filterValue === doctors[k].getAttribute("data-category")){
						doctors[k].classList.remove("hide");
						doctors[k].classList.add("show")
				} 
				else{
						doctors[k].classList.remove("show");
						doctors[k].classList.add("hide");
				}
				if (filterValue === "all") {
						doctors[k].classList.remove("hide");
						doctors[k].classList.add("show")
						console.log("Add")
				}
		}
	})
}
// 