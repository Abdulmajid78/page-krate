const portfolioFiles = [
    {
        image: 'images/portfolio/img1.jpg',
        title: 'Galaxia Branding',
        linkTitle: 'View case study',
        linkUrl: 'portfolio-detail.html'
    },
    {
        image: 'images/portfolio/img2.jpg',
        title: 'Nayzak Patterns',
        linkTitle: 'View case study',
        linkUrl: 'portfolio-detail.html'
    },
    {
        image: 'images/portfolio/img3.jpg',
        title: 'Crave Chips',
        linkTitle: 'View case study',
        linkUrl: 'portfolio-detail.html'
    },
    {
        image: 'images/portfolio/img4.jpg',
        title: 'John Mayer NYC',
        linkTitle: 'View all work',
        linkUrl: 'portfolio-detail.html'
    },
]
const blogsArr = [
    {
        image: 'images/blogs/blog1.png',
        date: 'October 12, 2024',
        title: 'How to create SVG-ready icon symbols in Sketch',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog2.png',
        date: 'October 12, 2024',
        title: 'Cinema 4D Visual Explorations by David Milan',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog3.png',
        date: 'October 12, 2024',
        title: 'Mental models for designers',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog4.png',
        date: 'October 12, 2024',
        title: 'How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog5.png',
        date: 'October 12, 2024',
        title: 'Blueprint fidelity: between paper prototype and finished product',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog6.png',
        date: 'October 12, 2024',
        title: 'Introducing: A brand new Dribbble',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog7.png',
        date: 'October 12, 2024',
        title: 'Design critiques at Figma',
        blogUrl: 'blog-detail.html'
    },
    {
        image: 'images/blogs/blog8.png',
        date: 'October 12, 2024',
        title: '20 psychological principles applied to product design',
        blogUrl: 'blog-detail.html'
    },

]
const teamInfo = [
    {
        image: 'images/team/team1.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
    {
        image: 'images/team/team2.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
    {
        image: 'images/team/team3.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
    {
        image: 'images/team/team4.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
    {
        image: 'images/team/team5.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
    {
        image: 'images/team/team6.png',
        fullName: 'Jocelyn Schleifer',
        job: 'Managing Director',
    },
]
// const teamInfo2 = [
//     {
//         image: 'images/team/team7.png',
//         fullName: 'Jason Schleifer',
//         job: 'Managing Director',
//     },
//     {
//         image: 'images/team/team8.png',
//         fullName: 'Jason Schleifer',
//         job: 'Managing Director',
//     },
//     {
//         image: 'images/team/team9.png',
//         fullName: 'Jason Schleifer',
//         job: 'Managing Director',
//     },
//     {
//         image: 'images/team/team10.png',
//         fullName: 'Jason Schleifer',
//         job: 'Managing Director',
//     },
//     {
//         image: 'images/team/team11.png',
//         fullName: 'Jason Schleifer',
//         job: 'Managing Director',
//     }
// ]


let navbarSec = document.querySelector('body .nav-section')
let cta = document.querySelector('body .cta')
let footer = document.querySelector('body .footer-sec')

// drawing sections
function drawNavbar() {
    navbarSec.innerHTML = `
                <div class="container">
            <div class="row">
                <div class="col-2 logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="">
                </a>
                </div>
                <div class="col-10 menu p-0">
                    <div class="menu-upper col-12">
                        <div class="col-01 col-10">
                            <div class="links">
                                <div class="link-items">
                                    <a href="#recent-works">Projects</a>
                                    <a href="about-us.html">About</a>
                                    <a href="team.html">Team</a>
                                    <a href="contact.html">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-02 col-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="56" viewBox="0 0 232 56"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M80 20H152V20.7895H80V20ZM80 27.1052H152V27.8948H80V27.1052ZM152 34.2105H80V35H152V34.2105Z"
                                      fill="#BDBDBD"/>
                            </svg>
                        </div>
                    </div>
                    <div class="menu-lower col-12">
                        <div class="col-01 col-6">
                            <a href="blog.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12.541 2.75368C11.7795 2.75368 11.0492 3.05619 10.5107 3.59467L9.76069 4.34467L2.63569 11.4697C2.49503 11.6103 2.41602 11.8011 2.41602 12V15C2.41602 15.4142 2.7518 15.75 3.16602 15.75H6.16602C6.36493 15.75 6.55569 15.671 6.69635 15.5303L13.82 8.40666C13.8205 8.40622 13.8209 8.40578 13.8213 8.40533C13.8218 8.40489 13.8222 8.40444 13.8227 8.40399L14.5713 7.65533C15.1098 7.11685 15.4123 6.38652 15.4123 5.625C15.4123 4.86348 15.1098 4.13315 14.5713 3.59467C14.0329 3.05619 13.3025 2.75368 12.541 2.75368ZM13.291 6.81434L13.5107 6.59467C13.7679 6.3375 13.9123 5.9887 13.9123 5.625C13.9123 5.2613 13.7679 4.9125 13.5107 4.65533C13.2535 4.39816 12.9047 4.25368 12.541 4.25368C12.1773 4.25368 11.8285 4.39816 11.5713 4.65533L11.3517 4.875L13.291 6.81434ZM10.291 5.93566L3.91602 12.3107V14.25H5.85535L12.2304 7.875L10.291 5.93566Z"
                                          fill="#D0D5DD"/>
                                </svg>
                                Blog
                            </a>
                        </div>
                        <div class="col-02 col-6">
                            <a href="">
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                     viewBox="0 0 18 18"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12.3984 2.25C12.3984 1.83579 12.0627 1.5 11.6484 1.5C11.2342 1.5 10.8984 1.83579 10.8984 2.25V3H6.39844V2.25C6.39844 1.83579 6.06265 1.5 5.64844 1.5C5.23422 1.5 4.89844 1.83579 4.89844 2.25V3H4.14844C2.9058 3 1.89844 4.00736 1.89844 5.25V8.25V14.25C1.89844 15.4926 2.9058 16.5 4.14844 16.5H13.1484C14.3911 16.5 15.3984 15.4926 15.3984 14.25V8.25V5.25C15.3984 4.00736 14.3911 3 13.1484 3H12.3984V2.25ZM13.8984 7.5V5.25C13.8984 4.83579 13.5627 4.5 13.1484 4.5H12.3984V5.25C12.3984 5.66421 12.0627 6 11.6484 6C11.2342 6 10.8984 5.66421 10.8984 5.25V4.5H6.39844V5.25C6.39844 5.66421 6.06265 6 5.64844 6C5.23422 6 4.89844 5.66421 4.89844 5.25V4.5H4.14844C3.73422 4.5 3.39844 4.83579 3.39844 5.25V7.5H13.8984ZM3.39844 9H13.8984V14.25C13.8984 14.6642 13.5627 15 13.1484 15H4.14844C3.73422 15 3.39844 14.6642 3.39844 14.25V9Z"
                                          fill="#BDBDBD"/>
                                </svg>
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    `

}

drawNavbar()

function drawCTA() {
    cta.innerHTML = `
    <div class="container">
            <div class="row">
                <div class="background">
                    <h1>Have an idea? Let’s talk.</h1>
                    <p>Visually attractive design from concept to final result. We create solutions that are bold and
                        forward-looking.</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.1934 2.5C14.1934 2.08579 13.8576 1.75 13.4434 1.75C13.0291 1.75 12.6934 2.08579 12.6934 2.5V3.41667H7.52669V2.5C7.52669 2.08579 7.19091 1.75 6.77669 1.75C6.36248 1.75 6.02669 2.08579 6.02669 2.5V3.41667H5.11003C3.77534 3.41667 2.69336 4.49865 2.69336 5.83333V9.16667V15.8333C2.69336 17.168 3.77534 18.25 5.11003 18.25H15.11C16.4447 18.25 17.5267 17.168 17.5267 15.8333V9.16667V5.83333C17.5267 4.49865 16.4447 3.41667 15.11 3.41667H14.1934V2.5ZM16.0267 8.41667V5.83333C16.0267 5.32707 15.6163 4.91667 15.11 4.91667H14.1934V5.83333C14.1934 6.24755 13.8576 6.58333 13.4434 6.58333C13.0291 6.58333 12.6934 6.24755 12.6934 5.83333V4.91667H7.52669V5.83333C7.52669 6.24755 7.19091 6.58333 6.77669 6.58333C6.36248 6.58333 6.02669 6.24755 6.02669 5.83333V4.91667H5.11003C4.60377 4.91667 4.19336 5.32707 4.19336 5.83333V8.41667H16.0267ZM4.19336 9.91667H16.0267V15.8333C16.0267 16.3396 15.6163 16.75 15.11 16.75H5.11003C4.60377 16.75 4.19336 16.3396 4.19336 15.8333V9.91667Z"
                                  fill="#282828"/>
                        </svg>
                        Free Consultation
                    </button>
                </div>
            </div>
        </div>
    `
}

drawCTA()

function drawFooter() {
    footer.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-3 logo">
            <a href="index.html">
                <img src="images/branding.png" alt="">
            </a>
            </div>
            <div class="col-9 menu p-0">
                <div class="menu-upper col-12 d-flex">
                    <div class="col-01 col-6">
                        <div class="links">
                            <a href="#recent-works">Projects</a>
                            <a href="about-us.html">About</a>
                            <a href="team.html">Team</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                    <div class="col-02 col-6">
                        <a href="mailto:abduaij@mail.com">hello@clonify.io</a>
                    </div>
                </div>
                <div class="menu-lower col-12">
                    <div class="col-01 col-4">
                        <a href="blog.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12.541 2.75368C11.7795 2.75368 11.0492 3.05619 10.5107 3.59467L9.76069 4.34467L2.63569 11.4697C2.49503 11.6103 2.41602 11.8011 2.41602 12V15C2.41602 15.4142 2.7518 15.75 3.16602 15.75H6.16602C6.36493 15.75 6.55569 15.671 6.69635 15.5303L13.82 8.40666C13.8205 8.40622 13.8209 8.40578 13.8213 8.40533C13.8218 8.40489 13.8222 8.40444 13.8227 8.40399L14.5713 7.65533C15.1098 7.11685 15.4123 6.38652 15.4123 5.625C15.4123 4.86348 15.1098 4.13315 14.5713 3.59467C14.0329 3.05619 13.3025 2.75368 12.541 2.75368ZM13.291 6.81434L13.5107 6.59467C13.7679 6.3375 13.9123 5.9887 13.9123 5.625C13.9123 5.2613 13.7679 4.9125 13.5107 4.65533C13.2535 4.39816 12.9047 4.25368 12.541 4.25368C12.1773 4.25368 11.8285 4.39816 11.5713 4.65533L11.3517 4.875L13.291 6.81434ZM10.291 5.93566L3.91602 12.3107V14.25H5.85535L12.2304 7.875L10.291 5.93566Z"
                                      fill="#D0D5DD"/>
                            </svg>
                            Blog
                        </a>
                    </div>
                    <div class="col-02 col-4">
                        <div class="socials">
                            <a href="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="none">
                                        <path d="M4.9375 7.46102V10.461H7.1875V15.711H10.1875V10.461H12.4375L13.1875 7.46102H10.1875V5.96102C10.1875 5.76211 10.2665 5.57134 10.4072 5.43069C10.5478 5.29004 10.7386 5.21102 10.9375 5.21102H13.1875V2.21102H10.9375C9.94294 2.21102 8.98911 2.60611 8.28585 3.30937C7.58259 4.01263 7.1875 4.96646 7.1875 5.96102V7.46102H4.9375Z"
                                              stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </a> <!--facebook-->
                            <a href="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.24414 3.711C5.0015 3.711 3.99414 4.71836 3.99414 5.961V11.961C3.99414 13.2036 5.0015 14.211 6.24414 14.211H12.2441C13.4868 14.211 14.4941 13.2036 14.4941 11.961V5.961C14.4941 4.71836 13.4868 3.711 12.2441 3.711H6.24414ZM2.49414 5.961C2.49414 3.88993 4.17307 2.211 6.24414 2.211H12.2441C14.3152 2.211 15.9941 3.88993 15.9941 5.961V11.961C15.9941 14.0321 14.3152 15.711 12.2441 15.711H6.24414C4.17307 15.711 2.49414 14.0321 2.49414 11.961V5.961ZM9.24414 7.461C8.41571 7.461 7.74414 8.13257 7.74414 8.961C7.74414 9.78943 8.41571 10.461 9.24414 10.461C10.0726 10.461 10.7441 9.78943 10.7441 8.961C10.7441 8.13257 10.0726 7.461 9.24414 7.461ZM6.24414 8.961C6.24414 7.30415 7.58729 5.961 9.24414 5.961C10.901 5.961 12.2441 7.30415 12.2441 8.961C12.2441 10.6179 10.901 11.961 9.24414 11.961C7.58729 11.961 6.24414 10.6179 6.24414 8.961ZM13.3691 5.586C13.3691 5.17179 13.0334 4.836 12.6191 4.836C12.2049 4.836 11.8691 5.17179 11.8691 5.586V5.58675C11.8691 6.00096 12.2049 6.33675 12.6191 6.33675C13.0334 6.33675 13.3691 6.00096 13.3691 5.58675V5.586Z"
                                              fill="#BDBDBD"/>
                                    </svg>
                                </div>
                            </a> <!--instagram-->
                            <a href="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="none">
                                        <path d="M16.2266 2.92954C15.4766 3.29704 14.7416 3.44629 13.9766 3.67204C13.1358 2.72329 11.8893 2.67079 10.6916 3.11929C9.49381 3.56779 8.70931 4.66429 8.72656 5.92204V6.67204C6.29281 6.73429 4.12531 5.62579 2.72656 3.67204C2.72656 3.67204 -0.409938 9.24679 5.72656 11.922C4.32256 12.8573 2.92231 13.488 1.22656 13.422C3.70756 14.7743 6.41131 15.2393 8.75206 14.5598C11.4371 13.7798 13.6436 11.7675 14.4903 8.75329C14.7429 7.83655 14.8683 6.88944 14.8631 5.93854C14.8616 5.75179 15.9956 3.85954 16.2266 2.92879V2.92954Z"
                                              stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </a> <!--twitter-->
                            <a href="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.28922 4.8267C3.41416 4.58627 3.66548 4.42204 3.95516 4.42204H14.4552C14.7448 4.42204 14.9962 4.58627 15.1211 4.8267L9.20516 8.77066L3.28922 4.8267ZM1.7052 5.15767C1.70505 5.16588 1.70504 5.17409 1.70516 5.1823V12.672C1.70516 13.9147 2.71252 14.922 3.95516 14.922H14.4552C15.6978 14.922 16.7052 13.9147 16.7052 12.672V5.18232M15.2052 6.57343V12.672C15.2052 13.0863 14.8694 13.422 14.4552 13.422H3.95516C3.54094 13.422 3.20516 13.0863 3.20516 12.672V6.57343L8.78913 10.2961C9.04106 10.464 9.36926 10.464 9.62118 10.2961L15.2052 6.57343ZM16.7051 5.15765C16.6974 3.92163 15.693 2.92204 14.4552 2.92204H3.95516C2.71731 2.92204 1.71294 3.92164 1.7052 5.15767"
                                              fill="#BDBDBD"/>
                                    </svg>
                                </div>
                            </a> <!--email-->
                        </div>
                    </div>
                    <div class="col-03 col-4">
                        <h1>© 2024 Abdulmajid Design</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

drawFooter()

// drawing array items

let portfolio = document.querySelector('#portfolio .list-works .row')
let members = document.querySelector('.team .members')
let blogSec = document.querySelector('.blogs .row1')


function drawPortfolio() {
    if (portfolio !== null) {
        for (let i = 0; i < portfolioFiles.length; i++) {
            portfolio.innerHTML += `
                        <div class="col-xl-12 mb-3 px-0 mx-0 pb-2">
                            <div class="card">
                                <img src="${portfolioFiles[i].image}" alt="">
                                <div class="black-box">
                                    <h4>${portfolioFiles[i].title}</h4>
                                    <a href="${portfolioFiles[i].linkUrl}">${portfolioFiles[i].linkTitle}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                             viewBox="0 0 28 28" fill="none">
                                            <path d="M19.8337 8.1665L8.16699 19.8332" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.33301 8.1665H19.833V18.6665" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
    `
        }
    } else {
        console.error('portfolio funksiyasi bu pageda ishlatilinmagan')
    }
}

drawPortfolio()

function drawMembers() {
    if (members !== null) {
    const isTeamPage = window.location.pathname.includes('/team.html');

    if (isTeamPage) {
        // buyoda tepada {teamInfo2 obj arrayim bor} ishlamaganiga shunaqa qilindi push bn
        teamInfo.push(
            {
                image: 'images/team/team7.png',
                fullName: 'Jason Schleifer',
                job: 'Managing Director',
            },
            {
                image: 'images/team/team8.png',
                fullName: 'Jason Schleifer',
                job: 'Managing Director',
            },
            {
                image: 'images/team/team9.png',
                fullName: 'Jason Schleifer',
                job: 'Managing Director',
            },
            {
                image: 'images/team/team10.png',
                fullName: 'Jason Schleifer',
                job: 'Managing Director',
            },
            {
                image: 'images/team/team11.png',
                fullName: 'Jason Schleifer',
                job: 'Managing Director',
            }
        );
    }

    members.innerHTML += '';

        teamInfo.forEach((item) => {
            members.innerHTML += `
                <div class="col-xl-3 mb-3 pb-2">
                    <div class="card">
                        <div class="card-header">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="card-body">
                            <h5>${item.fullName}</h5>
                            <h6>${item.job}</h6>
                        </div>
                    </div>
                </div>
    `
        })
    } else {
        console.error('members funksiyasi bu yerda yoq! (ishlatilinmagan)')
    }
}

drawMembers()

function drawBlogs() {
    if (blogSec !== null) {
    blogsArr.forEach((item) => {
        blogSec.innerHTML += `
                <div class="col-xl-6 mt-5">
                    <img src="${item.image}" alt="">
                    <p>${item.date}</p>
                    <div class="col-10">
                        <a href="${item.blogUrl}">${item.title}</a>
                    </div>
                </div>
    `
    })
    } else {
        console.error('blogs pageda emassiz malumotlarni bu yerga chaqirishni iloji yoq')
    }
}

drawBlogs()
