# Merry Christmas — Winter Scene (Next.js + Tailwind)

Theis application is made using Next.js 16 with Tailwind CSS v4. Same visual result: a fixed winter background,
190 drifting snow particles on a `<canvas>`, and an SVG "Merry Christmas"
greeting that hand-writes itself letter by letter.

## What maps to what

| Next.js / Tailwind |
| `app/page.tsx` (composition) |
| `public/winter-bg.png` referenced from `page.tsx` |
| `components/SnowCanvas.tsx` (client) |
| `components/MerryMessage.tsx` (client) |
| `app/globals.css` |
| `animationDelay` |
| Tailwind utilities |

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```