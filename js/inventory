// inventory.js
export let water = 0;

// Function to update inventory display
export function updateInventory(waterCount, growRootsBtn, rootCost) {
    waterCount.textContent = `Water: ${water}`;
    
    // Enable root growth if water >= rootCost
    if (water >= rootCost) {
        growRootsBtn.classList.remove('disabled');
    } else {
        growRootsBtn.classList.add('disabled');
    }
}

export function absorbWater() {
    water++;  // This function increments the water count
}
