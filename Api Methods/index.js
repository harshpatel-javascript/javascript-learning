const data = document.querySelector(".data");
const btn = document.querySelector("#btn");
const tbody = document.querySelector(".tbody");

let url = "https://jsonplaceholder.typicode.com/posts/1/comments";

// function showData(url) {
//   fetch(url)  // fetching the data from the url
//     .then((response) => response.json())  // read response body and parse as JSON
//     .then((data) => {
//       let tab = "";
//       for (let i = 0; i < data.length; i++) {
//         tab += `<tr>
//               <td>${data[i].id}</td>
//               <td>${data[i].name}</td>
//               <td>${data[i].body}</td>
//               <td>${data[i].email}</td>
//             </tr>`;
//         //console.log(data[i]); //shows data
//         tbody.innerHTML = tab;
//       }
//     });
// }
btn.addEventListener("click", () => showData(url));
//above code using the async/await
async function showData(url) {
  let response = await fetch(url);  // fetching the data from given url
  if (response.status == 200) {
    let data = await response.json();  // read response body and parse as JSON
    let tab = "";
    for (let i = 0; i < data.length; i++) {
      tab += `<tr>
              <td>${data[i].id}</td>
              <td>${data[i].name}</td>
              <td>${data[i].body}</td>
              <td>${data[i].email}</td>
            </tr>`;
      console.log(data[i]); //shows data
      tbody.innerHTML = tab;  // assigning the tab to the tbody 
    }
  }
}