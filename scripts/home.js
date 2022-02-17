const showNavbar = document.querySelector(".showNavbar");
const navbarMetaData = ` <nav id="navbar">
        <input type="checkbox" id="show-menu" />
        <label for="show-menu" class="menu-icon"
          ><i class="fas fa-bars"></i
        ></label>
        <div class="content">
          <ul class="links">
            <label for="show-menu" class="menu-icon"
              ><i class="far fa-times-circle"></i
            ></label>
            <li><a href="../../index.html">Home</a></li>
            <li>
              <a href="#" class="desktop-link"
                >Research <i class="fas fa-angle-right"></i></a>
              <input type="checkbox" id="researchNavItem" />
              <label for="researchNavItem"
                >Research <i class="fas fa-angle-right"></i
              ></label>
              <ul>
                <li><a href="./components/research/research.html">Research</a></li>
                <li><a href="./components/research/expirementalSetupRigs.html">Experimental Setup And Rigs</a></li>
                <li><a href="./components/research/techniques/techniques.html">Techniques</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-link"
                >Publication <i class="fas fa-angle-right"></i
              ></a>
              <input type="checkbox" id="publicationNavItem" />
              <label for="publicationNavItem"
                >Publication<i class="fas fa-angle-right"></i
              ></label>
              <ul>
                <li><a href="./components/publications/publications.html">Publication</a></li>
                <li><a href="./components/publications/peerReviewed.html">Peer Reviewed Journals Publication</a></li>
                <li><a href="./components/publications/contributionToChapters.html">Contribution To Chapters</a></li>
                <li><a href="./components/publications/peerReviewedProceed.html">Peer Reviewed Proceeeding</a></li>
                <li><a href="./components/publications/nonPeerReviewd.html">Non Peer Reviewed Publication</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-link"
                >Members <i class="fas fa-angle-right"></i
              ></a>
              <input type="checkbox" id="show-services" />
              <label for="show-services"
                >Members <i class="fas fa-angle-right"></i
              ></label>
              <ul>
                <li><a href="./components/members/members.html">Members</a></li>
                <li><a href="./components/members/currentStudents.html">Current Students</a></li>
                <li id="hideSubMenu">
                  <a href="#" class="desktop-link"
                    >Alumni <i class="fas fa-angle-right"></i
                  ></a>
                  <input type="checkbox" id="show-items" />
                  <label for="show-items"
                    >Alumni <i class="fas fa-angle-right"></i
                  ></label>
                  <ul id="subMenu">
                    <li class="missouriSTNavLink">
                      <a href="./components/members/missouriST.html">Missouri S&T</a>
                    </li>
                    <li><a href="./components/members/washUniAdvisor.html">Washington University-Advisor</a></li>
                    <li><a href="./components/members/washUniCoAdvisor.html">Washington University Co Advisor</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="./components/grants/grants.html">Grants</a></li>
            <li>
              <a href="#" class="desktop-link"
                >Activities <i class="fas fa-angle-right"></i
              ></a>
              <input type="checkbox" id="activitiesNavItem" />
              <label for="activitiesNavItem"
                >Activities <i class="fas fa-angle-right"></i
              ></label>
              <ul>
                
                <li><a href="./components/activities/technical_Education.html">Technical And Educational Interactions With Academia And Research Centers</a></li>
                <li>
                  <a href="./components/activities/technicalInteraction.html"
                    >Technical Interactions With National Laboratories</a
                  >
                </li>
                <li><a href="./components/activities/invitedTalks.html">Invited Talks</a></li>
                <li><a href="./components/activities/news_media.html">News And the Meida</a></li>
              </ul>
            </li>
            <li><a href="./components/collaborators/collaborators.html">Collaborators</a></li>
            <li>
              <a href="#" class="desktop-link"
                >Awards <i class="fas fa-angle-right"></i
              ></a>
              <input type="checkbox" id="awardsNavItem" />
              <label for="awardsNavItem"
                >Awards & Honors <i class="fas fa-angle-right"></i
              ></label>
              <ul>
                
                <li><a href="./components/awards_honors/selectedAwards.html">Selected Awards</a></li>
                <li>
                  <a href="./components/awards_honors/selectedHonors.html">Selected Honors And Recognitions</a>
                </li>
                <li>
                  <a href="./components/awards_honors/selectedRecognition.html"
                    >Selected Recognitions By Iraqi Universities And Higher
                    Education</a
                  >
                </li>
                <li><a href="./components/awards_honors/selectedRecentTechnicalReports.html">Selected Recent Technical Reports</a></li>
              </ul>
            </li>
            <li><a href="./components/contactUs/contactUs.html">Contact Us</a></li>
          </ul>
        </div>
      </nav>`;
showNavbar.innerHTML = navbarMetaData;
