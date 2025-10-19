export default function Starfield() {
  return (
    <div
      className="absolute inset-0 pointer-events-none starfield"
      ref={(el) => {
        for (let i = 0; i < 500; i++) {
          const star = document.createElement('span');
          star.style.position = 'absolute';
          star.style.left = Math.random() * 100 + '%';
          star.style.top = Math.random() * 100 + '%';
          star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
          star.style.background = 'white';
          star.style.borderRadius = '50%';
          star.style.opacity = 0.5 + Math.random() * 0.5;
          star.style.animation = `twinkle ${3 + Math.random() * 3}s infinite ease-in-out`;
          star.style.animationDelay = Math.random() * 5 + 's';
          el.appendChild(star);
        }
      }}
    ></div>
  );
}