// Fetch the JSON data
fetch("contests.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((contest) => {
      updateContests(contest);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function updateContests(contest) {
  const ol = document.querySelector(".lists ol");
  const li = document.createElement("li");
  li.classList.add("Contest_List_item");
  li.textContent = contest.contest_name; // Assuming the contest has a 'name' property
  ol.appendChild(li);
}
