import React, { useEffect, useRef } from "react";
import "../Css/StarfieldBackground.css";

function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star configuration with varied colors
    const stars = [];
    const numStars = 400;

    // Star colors for realistic galaxy
    const starColors = [
      "rgba(255, 255, 255", // White
      "rgba(200, 220, 255", // Blue-white
      "rgba(255, 240, 220", // Warm white
      "rgba(180, 200, 255", // Light blue
    ];

    // Create stars with varied sizes and colors
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Moon configuration
    const moon = {
      x: canvas.width * 0.85,
      y: canvas.height * 0.15,
      radius: 40,
    };

    // Milky Way effect particles
    const milkyWayParticles = [];
    const numMilkyWayParticles = 800;

    for (let i = 0; i < numMilkyWayParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * canvas.width * 0.4;
      const centerX = canvas.width * 0.6;
      const centerY = canvas.height * 0.4;

      milkyWayParticles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance * 0.3,
        radius: Math.random() * 0.8,
        opacity: Math.random() * 0.3,
      });
    }

    function drawMoon() {
      // Moon glow
      const gradient = ctx.createRadialGradient(
        moon.x,
        moon.y,
        moon.radius * 0.5,
        moon.x,
        moon.y,
        moon.radius * 2
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Moon surface
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#E8E8E8";
      ctx.fill();

      // Moon craters (simple shadows)
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.beginPath();
      ctx.arc(moon.x - 10, moon.y - 8, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moon.x + 8, moon.y + 5, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      // Dark space background
      ctx.fillStyle = "rgba(5, 8, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw milky way effect
      milkyWayParticles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 220, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw and animate stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}, ${star.opacity})`;
        ctx.fill();

        // Add glow to brighter stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}, ${star.opacity * 0.2})`;
          ctx.fill();
        }
      });

      // Draw moon
      drawMoon();

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      moon.x = canvas.width * 0.85;
      moon.y = canvas.height * 0.15;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}

export default StarfieldBackground;
