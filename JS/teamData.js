const data = [
  {
    id: 1,
    name: "Sofia lerner",
    images: {
      img: "../images/staff4.png",
      alt: "team_1",
    },
    about: "Ceo jevacrism Group of Companies.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
  {
    id: 2,
    name: "Evans Sitibekiso",
    images: {
      img: "../images/staff3.png",
      alt: "team_2",
    },
    about: "Ceo Dana Oil.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
  {
    id: 3,
    name: "Sofia lerner",
    images: {
      img: "../images/staff3.png",
      alt: "team_3",
    },
    about: "Global Entrepreneur.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
  {
    id: 4,
    name: "Patricia jackson",
    images: {
      img: "../images/staff4.png",
      alt: "team_4",
    },
    about: "Global Speaker.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
  {
    id: 5,
    name: "Marry Korey",
    images: {
      img: "../images/staff5.png",
      alt: "team_3",
    },
    about: "Ceo Chena Oil Campany.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
  {
    id: 6,
    name: "Eric yen",
    images: {
      img: "../images/staff6.png",
      alt: "team_6",
    },
    about: "Global Speaker.",
    work: "Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.",
  },
];

const teamContainer = document.querySelector("#Team .teams");

// Flex card dynamically

function createCard(dataInfo) {
  const li = document.createElement("li");
  li.className = "card d-flex";
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});

// Flex card dynamically

const teamList = document.querySelectorAll("#Team .teams li");
const moreBtn = document.querySelector("#Team button");
const btnSpan = document.querySelector("#Team button span");
const btnIcon = document.querySelector("#Team button i");

let state = false;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = "flex";
    });
    btnSpan.textContent = "LESS";
    btnIcon.classList.remove("fa", "fa-chevron-down");
    btnIcon.classList.add("fa", "fa-chevron-up");

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = "none";
    });
    teamList[0].style.display = "flex";
    teamList[1].style.display = "flex";

    btnSpan.textContent = "MORE";
    btnIcon.classList.remove("fa", "fa-chevron-up");
    btnIcon.classList.add("fa", "fa-chevron-down");

    state = false;
  }
}

moreBtn.addEventListener("click", displayMore);
