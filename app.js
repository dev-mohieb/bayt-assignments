import profilesData from "./data/profilesData.js";
import workData from "./data/workData.js";
import socialData from "./data/socialData.js";

const menuBtn = document.querySelector(".nav--menu-btn");
const navList = document.querySelector(".nav--list-container");
const dropdownBtn = document.querySelector(".nav--dropdown");
const dropdownList = document.querySelector(".nav--dropdown-list");
const teamProfilesSection = document.querySelector(".team--profiles");
const workSection = document.querySelector(".work");
const socialSection = document.querySelector(".footer--social-container");
const footerArrowToTop = document.querySelector(".footer--arrow-top");

let profilesDataHTML = "";
let workDataHTML = "";
let socialDataHTML = "";

menuBtn.addEventListener("click", () =>
  navList.classList.toggle("show-nav--list")
);
dropdownBtn.addEventListener("mouseover", () =>
  dropdownList.classList.add("show-dropdown-list")
);
dropdownBtn.addEventListener("mouseout", () =>
  dropdownList.classList.remove("show-dropdown-list")
);
footerArrowToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
profilesData.forEach((profile) => {
  const { image, alt, name, job } = profile;
  profilesDataHTML += `
          <article class="team--profiles-profile">
            ${
              image
                ? `<img width="150" height="150" src="${image} alt=${alt}" />`
                : `
                <div class="team--profiles-profile-pfp"></div>
                `
            }
            <p class="team--profiles-profile-name">${name}</p>
            <p class="team--profiles-profile-job">${job}</p>
          </article>
  `;
});
teamProfilesSection.innerHTML = profilesDataHTML;

workData.forEach((item, i) => {
  const { arrayOfThings, name, trade } = item;
  let listItems = "";
  arrayOfThings.forEach((item) => (listItems += `<li>${item}</li>`));
  workDataHTML += `
  <article class="work--column">
    <div class="work--column-image"></div>
    <div class="work--column-info">
      <h3>
        ${name} ${++i}
      </h3>
      <h4>
        ${trade}
      </h4>
      <ul class="work--column-list">
        ${listItems}
      </ul>
    </div>
  </article>
  `;
});
workSection.innerHTML += workDataHTML;

socialData.forEach((item) => {
  const { href, name, icon } = item;
  socialDataHTML += `
  <a href="${href} id="${name}">
    ${icon}
  </a>
  `;
});
socialSection.innerHTML = socialDataHTML;
