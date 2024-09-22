import { water } from './inventory.js';

export let isSprouted = false;

// Function to handle sprouting
export function handleSprout(sproutBtn, growBox) {
    if (water >= 5 && !isSprouted) {
        isSprouted = true;
        alert('You have sprouted!');
        sproutBtn.disabled = true;
        growBox.style.display = 'block'; // Show the Grow box
    }
}

// Hide completed upgrades when checkbox is toggled
export function toggleHideCompletedUpgrades(sproutBtn, hideUpgradesCheckbox) {
    hideUpgradesCheckbox.addEventListener('change', function() {
        if (hideUpgradesCheckbox.checked) {
            if (sproutBtn.disabled) {
                sproutBtn.style.display = 'none';
            }
        } else {
            sproutBtn.style.display = 'inline-block';
        }
    });
}
