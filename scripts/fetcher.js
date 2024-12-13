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
  li.id = contest.contest_provider;
  li.dataset.starttime = contest.contest_start;
  li.dataset.duration = contest.duration;
  /// Create a link element for the contest
  const anchor = document.createElement("a");
  anchor.href = contest.url;
  anchor.textContent = contest.contest_name;
  anchor.classList.add("contest-url");
  anchor.style.color = "white"; // Change the color to white
  anchor.style.textDecoration = "none"; // Remove underline
  anchor.addEventListener("mouseover", () => {
    anchor.style.color = "yellow"; // Change color on hover
  });
  anchor.addEventListener("mouseout", () => {
    anchor.style.color = "white"; // Revert color when not hovering
  });
  li.appendChild(anchor);
  li.appendChild(document.createElement("br"));

  // Create a span element for the duration
  const durationSpan = document.createElement("span");
  durationSpan.classList.add("contest-duration");
  durationSpan.textContent = ` (${contest.duration})`;

  // Decode the start time from Unix timestamp
  const startTime = new Date(contest.contest_start * 1000).toLocaleString(
    "ro-RO"
  );

  // Create a span element for the start time
  const startTimeSpan = document.createElement("span");
  startTimeSpan.classList.add("contest-start-time");
  startTimeSpan.textContent = `\u00A0\u00A0\u00A0(Starts at: ${startTime})`;

  li.appendChild(startTimeSpan);
  li.appendChild(durationSpan);
  ol.appendChild(li);
}
