const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//function getUser(username) {
//  axios(APIURL + username)
//    .then((res) => console.log(res.data))
//    .catch((err) => console.log(err));
//}

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    console.log(data); //yerine
    createUserCard(data); //yazınca arama bölümünde usercard geliyor
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("this profilename is not found"); //msg parametresinin değeri string olarak girildi
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    console.log(data); //yerine
    addReposToCard(data); //yazınca arama bölümünde usercard geliyor
  } catch (err) {
    createErrorCard("prblem fetchin repos"); //msg parametresinin değeri string olarak girildi
  }
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
    <p>${msg}</p> 
    </div>
    `;
  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
      <img src="${user.avatar_url}" alt="" id="avatar">
  </div>
  <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
          <li> ${user.followers} <strong>Followers</strong></li>
          <li> ${user.following}<strong>Following</strong></li>
          <li> ${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
          
      </div>
  </div>
</div>
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Bu ne?

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
