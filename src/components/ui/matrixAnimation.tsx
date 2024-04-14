import React, { useEffect, useRef } from 'react';

interface CanvasProps {
  letters?: string[]; // Optional prop to customize letters
}

const CanvasComponent: React.FC<CanvasProps> = ({ letters = '漢字 ひらがな カタカナ ひらがな 漢字 カタカナ ひらがな 漢字 ひらがな カタカナ 漢字 ひらがな カタカナ 漢字 ひらがな カタカナ'.split('') }) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const ctxRef = useRef<CanvasRenderingContext2D>;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    };

    setInterval(draw, 33);
  }, [letters]);

  return <canvas ref={canvasRef} />;
};

export default CanvasComponent;