var contest = document.getElementById("contest-select");

//filter
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

//search
var search = document.getElementById("Search");

if (search) {
  search.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var searchText = search.value.toLowerCase();
      var listItems = document.querySelectorAll("ol li");
      listItems.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(searchText)) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
} else {
  console.error("Element with id 'Search' not found.");
}

//BUTTONS startime
var start = document.getElementById("Start");

if (start) {
  var index = 0;

  start.addEventListener("click", function () {
    var listItems = Array.from(document.querySelectorAll("ol li"));
    if (index == 0) {
      start.style.backgroundColor = "green";
      console.log("clicked first");
      listItems.sort(function (a, b) {
        var startTimeA = new Date(parseInt(a.dataset.starttime) * 1000);
        var startTimeB = new Date(parseInt(b.dataset.starttime) * 1000);
        return startTimeA - startTimeB;
      });
      index = 1;
    } else if (index == 1) {
      start.style.backgroundColor = "red";
      console.log("clicked second");
      listItems.sort(function (a, b) {
        var startTimeA = new Date(parseInt(a.dataset.starttime) * 1000);
        var startTimeB = new Date(parseInt(b.dataset.starttime) * 1000);
        return startTimeB - startTimeA;
      });
      index = 0;
    }
    var ol = document.querySelector("ol");
    ol.innerHTML = "";
    listItems.forEach(function (item) {
      ol.appendChild(item);
    });
  });
} else {
  console.error("Element with id 'Start' not found.");
}

//BUTTONS duration

var duration = document.getElementById("Duration");

if (duration) {
  var index1 = 0;

  duration.addEventListener("click", function () {
    var listItems = Array.from(document.querySelectorAll("ol li"));
    if (index1 == 0) {
      duration.style.backgroundColor = "green";
      console.log("clicked first");
      listItems.sort(function (a, b) {
        var durationA = parseInt(a.dataset.duration);
        var durationB = parseInt(b.dataset.duration);
        return durationA - durationB;
      });
      index1 = 1;
    } else if (index1 == 1) {
      duration.style.backgroundColor = "red";
      console.log("clicked second");
      listItems.sort(function (a, b) {
        var durationA = parseInt(a.dataset.duration);
        var durationB = parseInt(b.dataset.duration);
        return durationB - durationA;
      });
      index1 = 0;
    }
    var ol = document.querySelector("ol");
    ol.innerHTML = "";
    listItems.forEach(function (item) {
      ol.appendChild(item);
    });
  });
} else {
  console.error("Element with id 'Duration' not found.");
}
