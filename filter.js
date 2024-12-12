var contest = document.getElementById("contest-select");

if (contest) {
  contest.addEventListener("change", function () {
    var selected_id = contest.selectedIndex;
    var listItems = document.querySelectorAll("ol li");
    listItems.forEach(function (item) {
      if (selected_id == 1) {
        if (item.id == "Codeforces") {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      } else if (selected_id == 2) {
        if (item.id == "LeetCode") {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      } else if (selected_id == 3) {
        if (item.id == "AtCoder") {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      } else if (selected_id == 0) {
        item.style.display = "list-item";
      }
    });
    console.log(selected_id);
  });
} else {
  console.error("Element with id 'contest-select' not found.");
}
