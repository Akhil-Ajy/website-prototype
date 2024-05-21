import '../pages/Details.css'

export default function DetailsResidence() {
    document.addEventListener("DOMContentLoaded", () => {
        const buildingData = [
            {
                name: "Empire State Building",
                image: "empire-state-building.jpg",
                description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City."
            },
            {
                name: "Eiffel Tower",
                image: "eiffel-tower.jpg",
                description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
            }
        ];

        const buildingComponent = document.getElementById('buildingComponent');
        const buildingImage = document.getElementById('building-image');
        const buildingName = document.getElementById('building-name');
        const buildingDescription = document.getElementById('building-description');

        let currentBuildingIndex = 0;

        function updateBuildingInfo() {
            const building = buildingData[currentBuildingIndex];
            buildingImage.src = building.image;
            buildingName.textContent = building.name;
            buildingDescription.textContent = building.description;
        }

        updateBuildingInfo();

        buildingComponent.addEventListener('click', () => {
            currentBuildingIndex = (currentBuildingIndex + 1) % buildingData.length;
            updateBuildingInfo();
        });
    });
  return (
        <div class="building-component" id="buildingComponent">
            <div className='inner-component'>
            <img src='images/img-9.jpeg' alt="Building" width={"400px"} height={"400px"}/>
            <h2 id="building-name">Building Name</h2>
            <p id="building-description">This is a brief description of the building.</p>
            </div>
         </div>
  )
};

