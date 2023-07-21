var webName = document.getElementById("webName");
var webUrl = document.getElementById("webUrl");
var submitButton = document.querySelector(".submit");
var tableData = document.getElementById("dataDisplay");
var feedbacks = document.querySelectorAll(".feedback");
var webSites = [];

webName.addEventListener("keyup", function (e) {
  checkValid(
    checkWebName(),
    e.target,
    0,
    "Looks Good!",
    "WebSite Name Must Be At Least 3 Characters Starts With A Letter & Not Including (.com, .org, .eg, etc)"
  );
});

webName.addEventListener("blur", function () {
  if (webName.value == "") {
    webName.classList.remove("is-invalid");
    feedbacks[0].classList.add("d-none");
  }
});
webUrl.addEventListener("keyup", function (e) {
  checkValid(
    checkUrl(),
    e.target,
    1,
    "Looks Good!",
    'Please Enter Valid URL Choose From The Below Examples<br>"example.com"<br>"https://example.com"<br>"www.example.com"<br>"https://www.example.com"<br>All TLD Are Supported {.com, .org, .eg, .org, etc.}'
  );
});
webUrl.addEventListener("blur", function () {
  if (webUrl.value == "") {
    webUrl.classList.remove("is-invalid");
    feedbacks[1].classList.add("d-none");
  }
});
submitButton.addEventListener("click", addWebSite);

if (localStorage.getItem("webSites") != null) {
  webSites = JSON.parse(localStorage.getItem("webSites"));
  displayWebSites(webSites);
}

function clearform() {
  webName.value = "";
  webUrl.value = "";
}

function foundName() {
  var result;
  for (var i = 0; i < webSites.length; i++) {
    if (webName.value.toLowerCase() == webSites[i].name) {
      return true;
    }
  }
  return false;
}

function addWebSite() {
  if (checkWebName() && checkUrl()) {
    var webSite = {
      name: webName.value.toLowerCase(),
      url: webUrl.value.toLowerCase(),
    };
    if (webSite.url.includes("https://") != true) {
      webSite.url = "https://" + webUrl.value;
    }
    if (foundName() != true) {
      webSites.push(webSite);
      displayWebSites(webSites);
      localPush(webSites);
      clearform();
      removeValid();
      Swal.fire({
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        text: "Bookmark Added Successfully",
        showClass: {
          popup: "swal2-show",
        },
        hideClass: {
          popup: "swal2-hide",
        },
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        text: "Bookmark Name Already Stored",
        showClass: {
          popup: "swal2-show",
        },
        hideClass: {
          popup: "swal2-hide",
        },
        icon: "warning",
      });
    }
  } else {
    Swal.fire({
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      text: "Please Enter Valid WebSite Name or URL",
      showClass: {
        popup: "swal2-show",
      },
      hideClass: {
        popup: "swal2-hide",
      },
      icon: "error",
    });
  }
}

function localPush(arr) {
  localStorage.setItem("webSites", JSON.stringify(arr));
}

function displayWebSites(arr) {
  var table = "";
  for (var i = 0; i < arr.length; i++) {
    table += `<tr>
        <td>${i + 1}</td>
        <td>${arr[i].name}</td>
        <td>
            <a href="${arr[i].url}" class="btn btn-success" target="_blank">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
            </a>
        </td>
        <td>
            <button onclick="deleteUrl(${i})" class="btn btn-danger">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
    </tr>`;
  }
  tableData.innerHTML = table;
}

function deleteUrl(i) {
  webSites.splice(i, 1);
  displayWebSites(webSites);
  localPush(webSites);
}

// ? =======================> regex Function
var webSiteRegex = /^[a-zA-z][a-zA-z0-9]{2,15}$/;
var urlRegex =
  /^((https:\/\/)?(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;

function checkWebName() {
  return webSiteRegex.test(webName.value);
}

function checkUrl() {
  return urlRegex.test(webUrl.value);
}

function checkValid(
  checkFunctionName,
  target,
  index,
  greenMessage,
  errorMessage
) {
  if (checkFunctionName) {
    target.classList.add("is-valid");
    target.classList.remove("is-invalid");
    feedbacks[index].classList.add("d-block");
    feedbacks[index].classList.remove("d-none");
    feedbacks[index].classList.add("valid-feedback");
    feedbacks[index].classList.remove("invalid-feedback");
    feedbacks[index].innerHTML = greenMessage;
  } else {
    target.classList.add("is-invalid");
    target.classList.remove("is-valid");
    feedbacks[index].classList.add("d-block");
    feedbacks[index].classList.remove("d-none");
    feedbacks[index].classList.add("invalid-feedback");
    feedbacks[index].classList.remove("valid-feedback");
    feedbacks[index].innerHTML = errorMessage;
  }
}

function removeValid() {
  webName.classList.remove("is-valid");
  webUrl.classList.remove("is-valid");
  feedbacks[0].classList.add("d-none");
  feedbacks[0].classList.remove("d-block");
  feedbacks[1].classList.add("d-none");
  feedbacks[1].classList.remove("d-block");
}
