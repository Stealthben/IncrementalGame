import { water, updateInventory } from './inventory.js';

export let rootLevel = 0;
export let rootCost = 10;
export let rootsAbsorbRate = 0.1;

export function handleGrowRootsClick(rootLevelDisplay, growRootsBtn, waterCount) {
    if (water >= rootCost) {
        water -= rootCost;
        rootLevel++;
        rootCost = Math.floor(10 + rootLevel * 1.2); // Calculate next cost
        rootLevelDisplay.textContent = `Roots Level: ${rootLevel}`;
        growRootsBtn.textContent = `Grow Roots (Cost: ${rootCost} Water)`;

        // Automatically absorb water at 0.1 water per second
        setInterval(function() {
            water += rootsAbsorbRate;
            updateInventory(waterCount, growRootsBtn, rootCost);
        }, 1000);
    }
}
