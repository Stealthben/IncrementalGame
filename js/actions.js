// actions.js
import { absorbWater, updateInventory, water } from './inventory.js';

// Function to handle absorbing water
export function handleAbsorbClick(waterCount, growRootsBtn, rootCost) {
    absorbWater();  // Increments water
    updateInventory(waterCount, growRootsBtn, rootCost);  // Update the display
}
