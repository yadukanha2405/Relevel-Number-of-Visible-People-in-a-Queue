import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function seePeopleCOunt(arr) {
  let n = arr.length;
  let seePeople = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (j - 1 == i) {
        seePeople[i]++;
      } else if (arr[j] > arr[j - 1] && arr[j - 1] < arr[i]) {
        seePeople[i]++;
      }
    }
  }
  return seePeople;
}

let people = [11, 6, 7, 5, 11, 11];
// let people = [5, 1, 2, 3, 10];

let result = seePeopleCOunt(people);
console.log(result);
