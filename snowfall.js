document.addEventListener("DOMContentLoaded", function () {
    const snowfallContainer = document.getElementById("snowfall");

    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";

        const size = Math.random() * 3 + 10; // Adjusted size to make it 3 times bigger
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`;

        snowfallContainer.appendChild(snowflake);

        // Random animation duration for variety
        const animationDuration = Math.random() * 2 + 2;
        snowflake.style.animationDuration = `${animationDuration}s`;

        // Random start delay to stagger the snowflakes
        const animationDelay = Math.random() * 2;
        snowflake.style.animationDelay = `-${animationDelay}s`;

        // Remove the snowflake after it falls out of view
        snowflake.addEventListener("animationiteration", () => {
            snowflake.style.left = `${Math.random() * 100}vw`;
        });
    }
});
