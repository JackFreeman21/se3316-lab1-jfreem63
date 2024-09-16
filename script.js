
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
  document.addEventListener('DOMContentLoaded', function() {
    let search = document.getElementById('searchButtonPlant');
   
    let provinceSelect = document.getElementById('provinceSelect'); // Add 
    search.addEventListener('click', function() {
      let searchInput = document.getElementById('searchPlant').value;
      let true_Input = searchInput.replace(/[^a-zA-Z]/g, '').substring(0, 20);
  
      let Allmatches = plantsWithLocations.filter(plant => 
        plant.Name.toLowerCase().startsWith(true_Input.toLowerCase())
      );
  
      console.log(true_Input);
  
      if (Allmatches.length > 0) {
        let PlantNames = Allmatches.slice(0, 5).map(plant => plant.Name).join('\n');
        alert("Matching Plants:\n" + PlantNames);
      } else {
        alert('No matches found.');
      }
    });
    provinceSelect.addEventListener('change', function() {
        let selectedProvince = this.value
        //checks to see if there is a selected province the filters the plants in province array with all the plants that include the selected province
        if (selectedProvince) {
            let plantsWithInProvince = plantsWithLocations.filter(plant => 
                plant.Locations.includes(selectedProvince)
            );
                //if there is at least 1 plant for the province, then we show the plant names seperate with /n for a tidy list
            if (plantsWithInProvince.length > 0) {
                let names = plantsWithInProvince.map(plant => plant.Name).join('\n');
                alert(`Plants found in ${selectedProvince}:\n\n${names}`);
            } else {
                alert(`No plants found in ${selectedProvince}.`);
            }
        }
    });
    
  });
//directly calls the province select item on the change function

