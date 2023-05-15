"use strict";
let popup = document.querySelector(".popup");
let input = document.querySelector(".city");
input.addEventListener("focus", function () {
  popup.classList.remove("hidden");
});

input.addEventListener("blur", function () {
  popup.classList.add("hidden");
});

input.addEventListener("input", async function () {
  console.log("fdgdfg");
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}&count=10&language=ru&format=json`
  );
  const data = await res.json();
  let list = document.querySelector(".list");
  list.innerHTML = "";
  for (const raw of data.results) {
    const li = document.createElement("li");
    li.textContent = raw.name;
    list.appendChild(li);
  }
  // Другой вариант промиса

  // fetch(
  //   `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}&count=10&language=ru&format=json`
  // )
  //   .then(function (res) {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     let list = document.querySelector(".list");
  //     list.innerHTML = "";
  //     for (const raw of data.results) {
  //       const li = document.createElement("li");
  //       li.textContent = raw.name;
  //       list.appendChild(li);
  //     }
  //     console.log(data);
  //   });
});
