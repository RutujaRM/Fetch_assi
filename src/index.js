import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Fetch Assignment!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// a()

const button = document.getElementById("btn");
button.style.backgroundColor = "crimson";
button.style.color = "white";
button.style.height = "3rem";
button.style.width = "15rem";
button.style.borderRadius = "2rem";
button.style.fontWeight = "bold";
button.style.fontSize = "1.2rem";
button.style.margin = "5rem 0rem 0rem 10rem";

button.addEventListener("click", (_) => {
  const games = fetch("https://reqres.in/api/users");

  games.then((Response) => {
    // console.log(Response);
    let response_data = Response.json();
    response_data.then((data) => {
      user(data);
    });
  });
});

//To show Data in table format on webpge
const user = (info) => {
  let table = info.data;

  let row = document.getElementById("tr");
  row.style.backgroundColor = "purple";
  row.style.height = "5rem";
  row.style.width = "5rem";
  row.style.fontSize = "1.5rem";
  row.style.color = "white";

  row.innerHTML = " ";

  table.forEach((e) => {
    let new_row = document.createElement("tr");
    new_row.innerText = `${e.first_name} ${e.last_name} ${e.email}`;
    row.appendChild(new_row);
  });
};
