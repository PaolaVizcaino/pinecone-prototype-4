# Pinecone prototype 4: hands-on question pages

Next.js 14 static site. Shows how a visitor finds a question, tries a game with their own numbers, and where calculators sit.

## Pages
- `/` home: positioning line, 4 question cards, how it works, 10 situations, calculators
- `/start` simulated entry points for research sessions (web search, AI assistant, friend's link, homepage)
- `/q/emergency-fund` game: A year of surprises
- `/q/minimum-payment` game: The minimum payment trap
- `/q/how-much-car` game: The test drive
- `/q/build-a-budget` game: Susan's Budget Coach (embedded from budgetcoach-sigma.vercel.app)
- `/situations/[slug]` 10 situation hubs with their questions ("Try it" or "Coming soon")
- `/calculators` all IFDM calculators and the question pages they appear on

## Question page pattern
1. Question as the title  2. Try it (game)  3. The short version  4. Ask yourself  5. Calculator for exact numbers  6. Go deeper (course lesson)  7. Where to next

## Where things live
- Copy, questions, situations, calculators: `lib/content.js`
- Games: `public/games/*.html` (self-contained, also open full screen)
- Game embed with auto height: `components/GameFrame.js`

## Run and deploy
    npm install
    npm run dev

Deploy: push to GitHub, import at vercel.com/new (Next.js preset, no settings).
