const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

// console.log(document.cookie);
// HTTP only -> 서버에서만 쿠키에 액세스 할 수 있음 (추가 보안 메커니즘)

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(";");
  cookieData.map((i) => {
    return i.trim();
  });
  //   console.log(data[1].split("=")[1]); // user value
  console.log(data.includes("").split("=")[1]);
});
