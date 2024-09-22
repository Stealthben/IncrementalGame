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
    
    // Event listeners for actions
    absorbBtn.addEventListener('click', function() {
        handleAbsorbClick(waterCount, growRootsBtn, rootCost);
    });

    sproutBtn.addEventListener('click', function() {
        handleSprout(sproutBtn, growBox);
    });

    growRootsBtn.addEventListener('click', function() {
        handleGrowRootsClick(rootLevelDisplay, growRootsBtn, waterCount);
    });

    toggleHideCompletedUpgrades(sproutBtn, hideUpgradesCheckbox);

    // Initial state update (sets up the UI on page load)
    updateInventory(waterCount, growRootsBtn, rootCost);
});
