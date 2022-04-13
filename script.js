const navListGroup = document.getElementById('nav-list-group');
const menuBarIcon = document.getElementById('menuBarIcon');
const closeMenu = document.getElementById('closeMenuIcon');
const navbarLink = document.querySelectorAll('.page-links');

//handleBodyOverflow

const handleBodyScroll = (status) => {
  const pageBody = status === true ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden')
  return pageBody;
}

//Menu actions

menuBarIcon.addEventListener('click', () => {
  navListGroup.style.transform = 'translateX(0)';
  handleBodyScroll(false)

});
closeMenu.addEventListener('click', () => {
  navListGroup.style.transform = 'translateX(-100%)';
  handleBodyScroll(true)
});
navbarLink.forEach((Link) => {
  Link.addEventListener('click', () => {
    navListGroup.style.transform = 'translateX(-100%)';
    handleBodyScroll(true)
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) navListGroup.style.transform = '';
})

// program data

const programData = [{
      id: 1,
      image: "./assets/images/lecture.png",
      title: "Lecture",
      details: "In-person workshops - June 13-15. Remote workshops - during the whole June."
    },
    {
      id: 2,
      image: "./assets/images/exhibition.png",
      title: "Exhibition",
      details: "Join us in Amsterdam or watch online. There will be lots of hybrid networking and inclusive interactivity!"
    },
    {
      id: 3,
      image: "./assets/images/forum.png",
      title: "Forum",
      details: "Experience Amsterdam with new & old friends during our boat and walking tours!"
    },
    {
      id: 4,
      image: "./assets/images/workshop.png",
      title: "Workshop",
      details: "Streaming of both tracks, speaker QnA's, discussion rooms and one more afterparty!"
    },
    {
      id: 5,
      image: "./assets/images/ignite.png",
      title: "Network",
      details: "Get training from the best instructors at our workshops on React Advanced, TypeScript and more!"
    }
  ]
  //Speakers data

const speakersData = [{
    id: 1,
    name: "Kent C. Dodds",
    title: "Trainer, USA",
    details: "Kent C. Dodds is a world renowned speaker, teacher, and trainer and he's actively involved in the open source community as a maintainer and contributor of hundreds of popular npm packages. Kent is the creator of TestingJavaScript.com and he's an instructor on egghead.io and Frontend Masters. He's also a Google Developer Expert. Kent is happily married and the father of four kids. He likes his family, code, JavaScript, and React.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/8HarhhMS6OPV6qWV9VIY"
  },
  {
    id: 2,
    name: "Ben Ilegbodu",
    title: "Stitch Fix, USA",
    details: "Ben is a Christian, husband, and father of 3, with 15 years of professional experience developing user interfaces for the Web. He currently is a Principal Frontend Engineer at Stitch Fix on their Frontend Platform team, helping architect their Design System. Ben also is a Google Developer Expert, Microsoft MVP, and enjoys playing basketball, DIY, watching movies, and tweeting (@benmvp) / blogging (benmvp.com) about his experiences with new web technologies.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/vy4IpVYBSnijF65EiDkB"
  },
  {
    id: 3,
    name: "Max Stoiber",
    title: "Gatsby, Austria",
    details: "Max Stoiber is a Staff Software Engineer at Gatsby, inventing the future of web development. Previously he worked at GitHub, who acquired the startup he co-founded, Spectrum. He is well known for making styled-components, react-boilerplate, and a wide variety of other open source projects in the React ecosystem.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/2jqu4t6TSlKDcqRFP6zT"
  },
  {
    id: 4,
    name: "Jen Luker",
    title: "Gremlin, USA",
    details: "Jen Luker is a Sr. Frontend Engineer, conference speaker, and BookBytes podcast co-host. She has spent the majority of her career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for frontend technologies. She is an advocate for both accessibility, and processes that make doing the right thing easy and the wrong thing hard. When she's not exploring solutions, learning new technologies, or reading, Jen's spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. She is also fascinated by all things space, antique cars, and IoT.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/XUqQlycTXS46JG02Q2Fl"
  },
  {
    id: 5,
    name: "Pariss Athena",
    title: "G2i, USA",
    details: "Pariss is a front-end developer who works for G2i as a Hiring Team Member, vetting React and React Native engineers for remote contract roles. She is also creator of #BlackTechTwitter and Founder of Black Tech Pipeline.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/xKLOnyetTjJm7IJx9l2a"
  },
  {
    id: 4,
    name: "Michel Weststrate",
    title: "Facebook, UK",
    details: "Jen Luker is a Sr. Frontend Engineer, conference speaker, and BookBytes podcast co-host. She has spent the majority of her career as a full-stack developer using PHP, Javascript, and CSS, but has a particular fondness for frontend technologies. She is an advocate for both accessibility, and processes that make doing the right thing easy and the wrong thing hard. When she's not exploring solutions, learning new technologies, or reading, Jen's spare time is spent spinning yarn from raw wool and knitting; she's even been known to 3D print her own tools for the job. She is also fascinated by all things space, antique cars, and IoT.",
    image: "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/QlY3D49T5iDadzDF7ZXw"
  }
]

//partners data
const partners = [
  "./assets/images/mozilla.png",
  "./assets/images/google.png",
  "./assets/images/naver.png",
  "./assets/images/daum.png",
  "./assets/images/airbnb.png"
]

//Past summit data

const pastSummitData = [{
    id: 1,
    image: "https://media.graphassets.com/F1gbwjbjSiy1IrX7ksek",
    year: "2015",
    name: "Workshops free and pro"
  },
  {
    id: 2,
    image: "https://media.graphassets.com/wcElx5k9QBWnFwqpok8f",
    year: "2019",
    name: "Workshops free and pro"
  }
]



//program actions

const getProgramData = () => {
  const programContainer = document.querySelector(".program-cards-container")
  if (!programContainer) return;
  const newProgramData = programData.map(program => {
    const div = document.createElement('div');
    div.classList = "program-card";
    div.innerHTML =
      ` <img src=${program.image} alt="icon" class="program-card-img">
        <h3 class="program-card-header">${program.title}</h3>
        <p class="program-card-paragraph">${program.details}</p>
       `
    const outPut = programContainer.appendChild(div)
    return outPut;
  })
  return newProgramData;
}

//speakers popup

const handlePopup = (speakerIndex) => {
    if (speakerIndex === null) return
    if (speakerIndex === false) {
      const div = document.querySelector(".speakers-popup-section")
      document.body.removeChild(div)
      handleBodyScroll(true)
    } else {
      const newSpeaker = speakersData[speakerIndex];
      const div = document.createElement('div');
      div.classList = "speakers-popup-section";
      div.innerHTML =
        `<div class="speakers-popup-cont">
        <i class="fa-solid fa-xmark" id="close-popup" onclick="handlePopup(${false})" ></i>
      <img src=${newSpeaker.image} alt="speaker" class="popup-img">
      <div class="popup-description">
        <h3 class="popup-description-name">${newSpeaker.name}</h3>
        <h5 class="popup-description-title">${newSpeaker.title}</h5>
         <p class="popup-description-paragraph">${newSpeaker.details}</p>
      </div>
  </div>`
      document.body.appendChild(div)
      handleBodyScroll(false)
    }
  }
  //speakers actions
const speakersContainer = document.querySelector(".speaker-card-container")

const getSpeakersData = () => {
  if (!speakersContainer) return;
  const speakers = speakersData.map((speaker, index) => {
    const div = document.createElement('div');
    div.classList = "speaker-card";
    div.innerHTML =
      ` <div class="speaker-image-cont">
          <img src=${speaker.image} alt="speakers" class="speaker-image"/>
        </div>
        <div class="speakers-description">
          <h3 class="speakers-name">${speaker.name}</h3>
          <h5 class="speakers-title">${speaker.title}</h5>
          <hr class="speaker-line" />
          <p class="speakers-paragraph">${speaker.details.slice(0, 100)} <span class="program-more-details"
           onclick="handlePopup(${index})">More Details</span></p>
        </div>`
    const outPut = speakersContainer.appendChild(div)
    return outPut;
  })
  return speakers;
}
const showMore = document.getElementById('showMore')
const showLess = document.getElementById('showLess')
showMore.addEventListener('click', () => {
  speakersContainer.style.height = "auto"
  showMore.style.display = 'none'
  showLess.style.display = 'flex'
})
showLess.addEventListener('click', () => {
  speakersContainer.style.height = "100vh"
  showLess.style.display = 'none'
  showMore.style.display = 'flex'

})
//Partners Actions

const getPartners = () => {
    const partnersContainer = document.querySelector(".partners-logo")
    const newPartners = partners.map(logo => {
      const img = document.createElement('img');
      img.classList = "partners-img-logo";
      img.src = logo
      const outPut = partnersContainer.appendChild(img)
      return outPut;
    })
    return newPartners;
  }
  //Past summit actions

const getPastSummit = () => {
  const pastSummitContainer = document.querySelector(".past-summit-cards-container")
  if (!pastSummitContainer) return;
  const newSummit = pastSummitData.map(summit => {
    const div = document.createElement('div');
    div.classList = "past-summit-cards";
    div.innerHTML =
      `<img src=${summit.image} alt=" past summit" class="past-summit-image">
        <div class="past-summit-overlay">
          <h1 class="past-summit-overlay-title">${summit.year}</h1>
          <p class="past-summit-overlay-paragraph">${summit.name}</p>
        </div>`
    const outPut = pastSummitContainer.appendChild(div)
    return outPut;
  })
  return newSummit;
}

window.addEventListener('load', () => {
  getPartners();
  getSpeakersData();
  getProgramData();
  getPastSummit();
})