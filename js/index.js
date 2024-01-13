
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("github-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const search = document.getElementById("search").value;

      const originalName = search.split(" ").join("");


      fetch(`https://api.github.com/users/${originalName}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

        document.getElementById("github-container").innerHTML = `
        <a target ="_blank"  href = "https://www.github.com/${originalName}">  <img src = "${data.avatar_url}"/></a>
        <p>${originalName} <br></p>
        <a target = "_blank" href = "https://www.github.com/${originalName}?tab=repositories"><p>View Repositories</p></a>
          `;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });