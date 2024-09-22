// Import necessary functions from inventory.js
import { absorbWater, updateInventory, water } from './inventory.js';

// Function to handle absorbing water
export function handleAbsorbClick(waterCount, growRootsBtn, rootCost) {
    // Call absorbWater to increment water
    absorbWater();

    // Call updateInventory to update the UI
    updateInventory(waterCount, growRootsBtn, rootCost);
}
