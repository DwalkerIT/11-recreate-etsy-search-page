console.log(items);

let itemPrice = items.results.map(function (item) {
  //   console.log(item);
  return `<div class = "products"> 
  <img src = "${item.Images[0].url_fullxfull}" class ="product-bg">
  <p class = "title">${item.title}</p>
  <p>${item.price}</p> 
   </div>`;
});
console.log(itemPrice);
const htmlString = itemPrice.join("");
document.querySelector("#grid").innerHTML = htmlString;

const subMenu = [
  "Jewelry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Suppllies",
  "Gifts and Gift Cards",
];
const subList = subMenu
  .map((item) => {
    return `<li class ="item container">
          
          ${item}
          <div class ="bottom">
            <div>
              <ul>
                <li class="bottom-item">
                  Accessories
                  <div id="firstRight"></div>
                  </li>
                  <li class="bottom-item">
                    Bags and Purses
                    <div class="bottom-item-right">
                      <ul>
                        <li>Hats and Caps</li>
                        </ul>
                        </div>
                        </li>
                        </ul>
                        </div>
                        </div>
                        </li>`;
  })
  .join("");

function makeListItemString(arr) {
  returnarr
    .map((item) => {
      return '<li class="item">${item}</li>';
    })
    .join("");
}

const firstRightListMarkup = makeListItemString(["welcome", "so long"]);

const rightSection = `
<div class= "bottom-item-right">
<img src="http;//placehold.it/250x250" />
<ul>${firstRightListMarkup}</ul>
</div>
`;

document.querySelector("#firstRight").innerHTML = rightSection;

// function mySearchBar() {
//   let a = document.getElementById("myTopnav");
//   if (a.className === "topnav") {
//     a.className += " responsive";
//   } else {
//     a.className = "topnav";
//   }
// }

// function pagebar() {
//   var links = document.getElementById("navbar").getElementsByTagName("a");
//   var current = location.href;
//   for (var i = 0; i < links.length; i++) {
//     if (links[i].href == current) {
//       links[i].href = "";
//       links[i].className = "grayStyle";
//     }
//   }
// }
