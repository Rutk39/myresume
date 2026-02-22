import React, { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

const STAR_COUNT = 90;
const LINK_DISTANCE = 120;

function ParticleBackground({ className = '' }) {
  const layerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let animationFrameId = 0;
    const stars = [];

    const resizeCanvas = () => {
      const layer = layerRef.current;
      if (!layer) {
        return;
      }
      const width = layer.clientWidth || window.innerWidth;
      const height = layer.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initializeStars = () => {
      const layer = layerRef.current;
      const width = layer?.clientWidth || window.innerWidth;
      const height = layer?.clientHeight || window.innerHeight;
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 0.7,
        });
      }
    };

    const drawFrame = () => {
      const layer = layerRef.current;
      const width = layer?.clientWidth || window.innerWidth;
      const height = layer?.clientHeight || window.innerHeight;

      context.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;

        if (star.x <= 0 || star.x >= width) {
          star.vx *= -1;
        }

        if (star.y <= 0 || star.y >= height) {
          star.vy *= -1;
        }
      }

      for (let i = 0; i < stars.length; i += 1) {
        const starA = stars[i];
        for (let j = i + 1; j < stars.length; j += 1) {
          const starB = stars[j];
          const dx = starA.x - starB.x;
          const dy = starA.y - starB.y;
          const distance = Math.hypot(dx, dy);
          if (distance < LINK_DISTANCE) {
            const alpha = 1 - distance / LINK_DISTANCE;
            context.strokeStyle = `rgba(130, 188, 255, ${alpha * 0.24})`;
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(starA.x, starA.y);
            context.lineTo(starB.x, starB.y);
            context.stroke();
          }
        }
      }

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        context.fillStyle = 'rgba(196, 226, 255, 0.82)';
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    initializeStars();
    drawFrame();

    window.addEventListener('resize', resizeCanvas);
    let observer;
    if (layerRef.current && window.ResizeObserver) {
      observer = new ResizeObserver(() => {
        resizeCanvas();
        initializeStars();
      });
      observer.observe(layerRef.current);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (observer) {
        observer.disconnect();
      }
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={layerRef} className={`${styles.layer} ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

export default ParticleBackground;
