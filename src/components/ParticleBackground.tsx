import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  particleCount = 75
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      color: Math.random() > 0.7 ? '#0EA5E9' : Math.random() > 0.5 ? '#9b87f5' : '#ffffff',
      speedX: Math.random() * 0.8 - 0.4,
      speedY: Math.random() * 0.8 - 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      pulseSpeed: Math.random() * 0.01 + 0.005,
      pulseDirection: Math.random() > 0.5 ? 1 : -1,
      maxOpacity: Math.random() * 0.3 + 0.3,
      minOpacity: Math.random() * 0.1
    }));

    // Define drawParticles function first before using it in handleResize
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        const opacity = Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = particle.color + opacity;
        ctx.fill();
        
        // Update particle opacity for pulsing effect
        particle.opacity += particle.pulseSpeed * particle.pulseDirection;
        if (particle.opacity > particle.maxOpacity || particle.opacity < particle.minOpacity) {
          particle.pulseDirection *= -1;
        }
      });

      // Connect particles that are close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            const opacity = 0.08 * (1 - distance / 120);
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            
            if (particles[i].color.includes('0EA5E9') || particles[j].color.includes('0EA5E9')) {
              gradient.addColorStop(0, `rgba(14, 165, 233, ${opacity})`);
              gradient.addColorStop(1, `rgba(155, 135, 245, ${opacity * 0.7})`);
            } else {
              gradient.addColorStop(0, `rgba(155, 135, 245, ${opacity})`);
              gradient.addColorStop(1, `rgba(14, 165, 233, ${opacity * 0.7})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Create a wrapped world effect
        if (particle.x < 0) {
          particle.x = canvas.width;
        } else if (particle.x > canvas.width) {
          particle.x = 0;
        }
        
        if (particle.y < 0) {
          particle.y = canvas.height;
        } else if (particle.y > canvas.height) {
          particle.y = 0;
        }
      });
      
      drawParticles();
      animationFrame = requestAnimationFrame(updateParticles);
    };

    let animationFrame = requestAnimationFrame(updateParticles);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
};

export default ParticleBackground;
