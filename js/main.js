import { water, updateInventory } from './inventory.js';
import { handleAbsorbClick } from './actions.js';
import { handleSprout, toggleHideCompletedUpgrades } from './upgrades.js';
import { handleGrowRootsClick, rootCost } from './growth.js';

// DOMContentLoaded ensures that the JS runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const waterCount = document.getElementById('water-count');
    const absorbBtn = document.getElementById('absorb-btn');
    const sproutBtn = document.getElementById('sprout-btn');
    const growBox = document.getElementById('grow-box');
    const growRootsBtn = document.getElementById('grow-roots-btn');
    const rootLevelDisplay = document.getElementById('root-level');
    const hideUpgradesCheckbox = document.getElementById('hide-upgrades-checkbox');
    const upgradesBox = document.getElementById('upgrades');  // Upgrades section

    // Event listeners for actions
    absorbBtn.addEventListener('click', function() {
        handleAbsorbClick(waterCount, growRootsBtn, rootCost);

        // Show the Upgrades box when water reaches 5
        if (water >= 5 && upgradesBox.style.visibility === 'hidden') {
            upgradesBox.style.visibility = 'visible';  // Unlock upgrades
        }
    });

    // Sprout button event (also reveals the Grow box)
    sproutBtn.addEventListener('click', function() {
        handleSprout(sproutBtn, growBox);
    });

    // Grow Roots button event
    growRootsBtn.addEventListener('click', function() {
        handleGrowRootsClick(rootLevelDisplay, growRootsBtn, waterCount);
    });

    // Hide completed upgrades
    toggleHideCompletedUpgrades(sproutBtn, hideUpgradesCheckbox);

    // Initial state update (sets up the UI on page load)
    updateInventory(waterCount, growRootsBtn, rootCost);
});
