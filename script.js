
  const plantsWithLocations = [
    {
      Name: "Aplectrum",
      Locations: ["Ontario"]
    },
    {
        Name: "Triphora trianthophora",
        Locations: ["Ontario"]
      },
    {
      Name: "Platanthera blephariglottis",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec"]
    },
    {
      Name: "Listera borealis",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Manitoba", "Saskatchewan", "Yukon", "Northwest Territories"]
    },
    {
      Name: "Spiranthes romanzoffiana",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Manitoba", "Saskatchewan", "Yukon", "Northwest Territories", "British Columbia", "Alberta"]
    },
    {
      Name: "Piperia maritima",
      Locations: ["British Columbia"]
    },
    {
      Name: "Malaxis unifolia",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Manitoba"]
    },
    {
      Name: "Spiranthes cernua",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Prince Edward Island"]
    },
    {
      Name: "Spiranthes casei",
      Locations: ["Ontario", "Nova Scotia", "Quebec"]
    },
    {
      Name: "Platanthera psycodes",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Prince Edward Island"]
    },
    {
      Name: "Platanthera hookeri",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Prince Edward Island", "Manitoba"]
    },
    {
      Name: "Platanthera leucophaea",
      Locations: ["Nova Scotia"]
    },
    {
      Name: "Pogonia ophioglossoides",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Prince Edward Island"]
    },
    {
      Name: "Goodyera pubescens",
      Locations: ["Ontario", "Quebec"]
    },
    {
      Name: "Goodyera tesselata",
      Locations: ["Ontario", "Newfoundland", "Nova Scotia", "New Brunswick", "Quebec", "Prince Edward Island", "Manitoba"]
    }
  ];
  //test
  document.addEventListener('DOMContentLoaded', function() {
    let search = document.getElementById('searchButtonPlant');
   
    //Selected all the provinces that are checked
   

    search.addEventListener('click', function() {
      const checkedProvinces = Array.from(document.querySelectorAll('.province-list input[type="checkbox"]:checked')) .map(checkbox => checkbox.nextElementSibling.textContent); // The Map gets the label
      console.log(checkedProvinces)
      let searchInput = document.getElementById('searchPlant').value;
      let true_Input = searchInput.replace(/[^a-zA-Z\s]/g, '').substring(0, 20);
  //Filter by search
      let Allmatches1 = plantsWithLocations.filter(plant => 
        plant.Name.toLowerCase().startsWith(true_Input.toLowerCase()))
        //Filters by location
        let Allmatches2 = Allmatches1.filter(plant => 
            plant.Locations.some(location => checkedProvinces.includes(location))
        );
  
      console.log(true_Input);
  
      if (Allmatches2.length > 0) {
        let PlantNames = Allmatches2.slice(0, 5).map(plant => plant.Name).join('\n');
        alert("Matching Plants:\n" + PlantNames);
      } else {
        alert('No matches found.');
      }
    });
    
  });
  //Event when the search box is changed
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchPlant").addEventListener('input',LoadNewList);
    LoadNewList(); 
});
document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.province-list input[type="checkbox"]');

  // Loop through each checkbox and attach a 'change' event listener
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', LoadNewList); // Pass function reference without parentheses
  });

  // Initial load of the list when the page is first loaded
  LoadNewList(); 
});
/*
document.addEventListener("DOMContentLoaded", function() {
  const childNodes = document.getElementById("plant-info2").childNodes;
  const listItems = [];

  // Loop through child nodes and filter for list elements
  for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
     

      // Check if the node is an element and has the tag name 'li'
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'li') {
          listItems.push(node); // Add the list item to the array
          console.log(node.childNodes)
          console.log(node.childNodes[1].innerText)
      }
      
      //console.log(node.childNodes)
  }
  const plantInfo1 = document.getElementById("plant-info1");
  listItems.forEach(item => {
    const clonedItem = item.cloneNode(true); // Deep clone the list item
      plantInfo1.appendChild(clonedItem); // Append each filtered <li> to plant-info1
  });
  console.log(plantInfo1)

  //console.log(listItems); // Logs only the <li> elements
});
*/
function LoadNewList() {
  let inputfieldvalue = document.getElementById("searchPlant").value;
  // Gets an array of the current provinces that are checked
  const checkedProvinces = Array.from(document.querySelectorAll('.province-list input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.nextElementSibling.textContent); // The Map gets the label
      console.log(checkedProvinces)
  // Filter by search
  let true_Input = inputfieldvalue.replace(/[^a-zA-Z\s]/g, '').substring(0, 20);
  let Allmatches1 = plantsWithLocations.filter(plant =>
      plant.Name.toLowerCase().startsWith(true_Input.toLowerCase()));

  // Filters by location
  let Allmatches2 = Allmatches1.filter(plant =>
      plant.Locations.some(location => checkedProvinces.includes(location))
  );
  

  // Clear previous items in plant-info1 to avoid duplicates
  const plantInfo1 = document.getElementById("plant-info1");
  plantInfo1.innerHTML = ''; // Clear existing content

  // Here we get all of the elements from the current list
  const childNodes = document.getElementById("plant-info2").childNodes;
  const listItems = [];

  // Loop through child nodes and filter for list elements
  for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      // Check if the node is an element and has the tag name 'li'
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'li'
          && Allmatches2.some(plant => plant.Name === node.childNodes[1].innerText.trim()
        )) {
           
          listItems.push(node); // Add the list item to the array
      }


  }

  // Now append each list to plantInfo1
  listItems.forEach(item => {
      const clonedItem = item.cloneNode(true); // Deep clone the list item
      plantInfo1.appendChild(clonedItem); // Append each filtered <li> to plant-info1
  });
  
  //console.log(plantInfo1); // Logs the updated plant-info1
}