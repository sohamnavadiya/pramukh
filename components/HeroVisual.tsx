export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-0 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,160,227,0.25), transparent 70%)",
        }}
        aria-hidden
      />
      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Abstract technical diagram of a rotary tablet press turret"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(13,184,255,0.18)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="110"
          fill="none"
          stroke="rgba(250,249,246,0.12)"
          strokeWidth="1"
        />

        <g className="animate-rotate-slow" style={{ transformOrigin: "200px 200px" }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = 200 + 150 * Math.cos(angle);
            const y = 200 + 150 * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i % 3 === 0 ? 5 : 3}
                fill={i % 3 === 0 ? "#0db8ff" : "rgba(250,249,246,0.35)"}
              />
            );
          })}
        </g>

        <g
          className="animate-rotate-slow-reverse"
          style={{ transformOrigin: "200px 200px" }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x1 = 200 + 70 * Math.cos(angle);
            const y1 = 200 + 70 * Math.sin(angle);
            const x2 = 200 + 110 * Math.cos(angle);
            const y2 = 200 + 110 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(13,184,255,0.35)"
                strokeWidth="1"
              />
            );
          })}
        </g>

        <circle
          cx="200"
          cy="200"
          r="46"
          fill="rgba(15,31,53,0.6)"
          stroke="#0db8ff"
          strokeWidth="1.5"
          className="animate-pulse-soft"
        />
        <circle cx="200" cy="200" r="6" fill="#0db8ff" />
      </svg>
    </div>
  );
}
