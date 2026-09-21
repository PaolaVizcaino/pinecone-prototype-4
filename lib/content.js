// All site content lives here so copy can be edited without touching the pages.

export const CALC_HUB = 'https://ifdm.stanford.edu/resourcehub/calculators';

export const calculators = [
  { id: 'savings', name: 'Savings calculator', does: 'See how regular deposits grow over time.', url: CALC_HUB, usedIn: ['emergency-fund', 'build-a-budget'] },
  { id: 'debt-payoff', name: 'Debt payoff calculator', does: 'Test a monthly payment and see when a balance reaches zero.', url: 'https://ifdm-learning.stanford.edu/interactives/debt-payoff-calculator/', embed: true, usedIn: ['minimum-payment', 'how-much-car'] },
  { id: 'interest', name: 'Interest calculator', does: 'Compare what you earn when saving with what you owe when borrowing.', url: CALC_HUB, usedIn: ['minimum-payment'] },
  { id: 'tvm', name: 'Time value of money calculator', does: 'Work out what money today is worth later, and the reverse.', url: CALC_HUB, usedIn: [] },
  { id: 'present-value', name: 'Present value calculator', does: 'Compare offers that pay at different times.', url: CALC_HUB, usedIn: [] },
  { id: 'mortgage', name: 'Mortgage calculator', does: 'Monthly payment and total interest for a home loan.', url: CALC_HUB, usedIn: [] },
  { id: 'refi', name: 'Mortgage refinancing calculator', does: 'Check when refinancing pays for itself.', url: CALC_HUB, usedIn: [] },
];

export const questions = {
  'emergency-fund': {
    topic: 'Saving & Borrowing', hex: '#dc8831',
    keys: ['emergency', 'cushion', 'buffer', 'rainy', 'unexpected', 'safety net', 'surprise', 'lose my job', 'laid off', 'how much should i save', 'savings'],
    title: 'How much should I have in an emergency fund?',
    short: 'Emergency fund',
    situation: 'moving-out',
    minutes: 5,
    blurb: 'Live a year of surprises with your own numbers and find the amount that fits your life.',
    game: { kind: 'local', src: '/games/year-of-surprises.html', name: 'A year of surprises' },
    ideas: [
      ['It buys you options', 'Savings let you handle a repair or a slow month without reaching for a credit card.'],
      ['3 to 6 months is a starting point', 'Many people aim for 3 to 6 months of must-pay spending. If your income goes up and down, the higher end gives more room.'],
      ['Starting small counts', 'Even one month of spending changes how a hard year plays out. You can build the rest over time.'],
    ],
    ask: ['How steady is my income?', 'What is my most likely surprise, and what would it cost?', 'If my pay stopped, how long until the next job?'],
    calc: { id: 'savings', why: 'Know your number? See how long it takes to get there with what you can set aside each month.' },
    lesson: { module: 'Module 3 · Saving and Borrowing Decisions', name: 'Lesson 1: Saving and the Life-Cycle Model', extras: ["Video: Sam's Smooth Money Experiment", "Story: Jasmine's buffer"] },
    related: ['minimum-payment', 'build-a-budget'],
  },
  'minimum-payment': {
    topic: 'Saving & Borrowing', hex: '#dc8831',
    keys: ['credit card', 'card', 'minimum', 'balance', 'interest', 'debt', 'apr', 'statement', 'pay off', 'pay down'],
    title: 'What happens if I only pay the minimum on my credit card?',
    short: 'Minimum payments',
    situation: 'dealing-with-debt',
    minutes: 5,
    blurb: 'Guess how long it takes, see the real answer, then find a payment that works for you.',
    game: { kind: 'local', src: '/games/minimum-payment-trap.html?tab=card', name: 'The minimum payment trap' },
    ideas: [
      ['The minimum shrinks', 'As your balance drops, so does the minimum. That keeps you paying for years.'],
      ['Interest comes first', 'Each payment covers that month\'s interest before it touches what you owe.'],
      ['Steady beats shrinking', 'Holding one fixed amount every month can cut years off, even if it starts at the same number as the minimum.'],
    ],
    ask: ['What amount can I pay every single month?', 'Am I still using this card?', 'Do I have a little saved so the next surprise stays off the card?'],
    calc: { id: 'debt-payoff', why: 'Want exact figures for your card? Run them here.' },
    lesson: { module: 'Module 3 · Saving and Borrowing Decisions', name: 'Lesson 2: Managing Credit', extras: ['Podcast: The Minimum Payment Trap', 'Escaping the Credit Jungle'] },
    related: ['how-much-car', 'emergency-fund'],
  },
  'how-much-car': {
    topic: 'Saving & Borrowing', hex: '#dc8831',
    keys: ['car', 'auto', 'vehicle', 'dealer', 'car loan', 'lease', 'financing', 'used car', 'new car', 'suv'],
    title: 'How much car can I afford?',
    short: 'Buying a car',
    situation: 'buying-a-car',
    minutes: 4,
    blurb: 'Put in a price and watch two numbers: what you pay each month and what you pay in total.',
    game: { kind: 'local', src: '/games/minimum-payment-trap.html?tab=car', name: "The test drive" },
    ideas: [
      ['Two prices, one car', 'There is the monthly payment and there is the total. Sellers lead with the first one.'],
      ['Longer loans cost more', 'Stretching a loan lowers the payment and raises the interest you pay overall.'],
      ['The payment is only part of it', 'Insurance, gas, parking and repairs often add a few hundred dollars a month.'],
    ],
    ask: ['Am I looking at the total, or only the monthly payment?', 'What else will this car cost me each month?', 'What would this money do elsewhere?'],
    calc: { id: 'debt-payoff', why: 'Already have a loan offer? Check the payoff date and total interest.' },
    lesson: { module: 'Module 3 · Saving and Borrowing Decisions', name: 'Lesson 2: Managing Credit', extras: ["Sam's Test Drive Simulator", 'Auto Loans and Installment Borrowing'] },
    related: ['minimum-payment', 'build-a-budget'],
  },
  'build-a-budget': {
    topic: 'Budgeting', hex: '#4d9788',
    keys: ['budget', 'budgeting', 'spending', 'spend', 'where does my money go', 'track', 'overspend', 'broke', 'paycheck', 'rent', 'afford'],
    title: "How do I make a budget I'll actually stick to?",
    short: 'Build a budget',
    situation: 'getting-organized',
    minutes: 8,
    blurb: 'Pick the pieces that match your life, add your numbers, and review the picture with a coach.',
    game: { kind: 'external', src: 'https://budgetcoach-sigma.vercel.app/', name: 'Budget Coach' },
    ideas: [
      ['Start with what comes in', 'Use the amount that lands in your account, after taxes.'],
      ['Fixed and flexible', 'Rent and loans stay the same. Food and fun move, and that is where you have room.'],
      ['Saving is a line, too', 'Treat it like a bill you owe yourself, and give it a number.'],
    ],
    ask: ['What do I want this budget to do for me?', 'Which costs can I change this month, and which are locked in?', 'What amount of saving could I keep up every month?'],
    calc: { id: 'savings', why: 'Found some room in your budget? See what it grows into.' },
    lesson: { module: 'Module 2 · Budgeting and Money Management', name: 'Lesson 3: The Budget', extras: ['Grace Builds a Budget', 'Alex Builds a Budget', 'Podcast: Budget Like a Boss'] },
    related: ['emergency-fund', 'minimum-payment'],
  },
};

// live: slug of a built question page. Everything else shows as "coming soon".
export const situations = [
  { slug: 'first-job', name: 'Starting my first job', blurb: 'Benefits forms, first paychecks, and decisions with deadlines.', qs: [['How much should I put in my 401(k)?'], ['What is an employer match, and am I leaving money on the table?'], ['Roth or traditional, which one is for me?'], ['HSA or FSA?'], ['Why is my paycheck so much smaller than my salary?']], calcs: ['savings', 'tvm'] },
  { slug: 'getting-organized', name: 'Getting my money organized', blurb: 'See where your money goes and make a plan you can keep.', qs: [["How do I make a budget I'll actually stick to?", 'build-a-budget'], ['Where does all my money go?'], ['How much should I be saving each month?'], ["How do I know if I'm doing okay financially?"]], calcs: ['savings'] },
  { slug: 'moving-out', name: 'Moving out or moving cities', blurb: 'Rent, paperwork, and a cushion for what you can\'t predict.', qs: [['How much should I have in an emergency fund?', 'emergency-fund'], ['How much rent can I afford?'], ['What documents do I need to rent an apartment?'], ['Can I afford to live alone, or do I need roommates?']], calcs: ['savings'] },
  { slug: 'dealing-with-debt', name: 'Dealing with debt', blurb: 'Understand what your debt costs and find a way out that fits.', qs: [['What happens if I only pay the minimum on my credit card?', 'minimum-payment'], ['How do I pay off credit card debt faster?'], ['Should I pay extra on my student loans?'], ['Should I pay off debt or save first?']], calcs: ['debt-payoff', 'interest'] },
  { slug: 'building-credit', name: 'Building credit', blurb: 'What a credit score is, what moves it, and why it matters.', qs: [['How do I build credit from nothing?'], ["What's a good credit score?"], ['Does closing a credit card hurt my score?']], calcs: [] },
  { slug: 'buying-a-car', name: 'Buying a car', blurb: 'Monthly payment, total cost, and everything around them.', qs: [['How much car can I afford?', 'how-much-car'], ['Should I lease or buy a car?'], ['Is 0% financing a good deal?'], ['New or used?']], calcs: ['debt-payoff'] },
  { slug: 'starting-to-invest', name: 'Starting to invest', blurb: 'Stocks, funds, fees, and getting started with small amounts.', qs: [['How do I start investing with little money?'], ['What is an index fund?'], ['Do fees of 1% really matter?'], ['Should I invest in crypto?']], calcs: ['tvm', 'savings'] },
  { slug: 'buying-a-home', name: 'Buying a home', blurb: 'Renting vs. buying, mortgages, and refinancing.', qs: [['Should I rent or buy?'], ['How much house can I afford?'], ['Is a 15 or 30 year mortgage better?'], ['When does refinancing make sense?']], calcs: ['mortgage', 'refi'] },
  { slug: 'big-choices', name: 'Comparing offers and big choices', blurb: 'Money now or later, raises, bonuses, and inflation.', qs: [['Should I take the signing bonus or the higher salary?'], ['Is my raise actually a raise?'], ['Is it better to get money now or later?']], calcs: ['present-value', 'tvm'] },
  { slug: 'retirement', name: 'Thinking about retirement', blurb: 'How much you need, whether you are on track, and risk as you age.', qs: [['How much do I need to retire?'], ['Am I saving enough for my age?'], ['Should my investments get safer as I get older?']], calcs: ['savings', 'tvm'] },
];

export const featured = ['emergency-fund', 'minimum-payment', 'how-much-car', 'build-a-budget'];

// Prototype search: keyword matching over every question on the site. No AI.
export function searchQuestions(text) {
  const t = text.toLowerCase();
  const words = t.split(/\W+/).filter((w) => w.length > 3);
  const seen = new Set();
  const rows = [];
  for (const s of situations) {
    for (const [title, slug] of s.qs) {
      if (seen.has(title)) continue;
      seen.add(title);
      let score = 0;
      const hay = title.toLowerCase();
      for (const w of words) if (hay.includes(w)) score += 2;
      if (slug) for (const k of questions[slug].keys) if (t.includes(k)) score += k.length > 4 ? 3 : 2;
      for (const w of s.name.toLowerCase().split(/\W+/)) if (w.length > 3 && t.includes(w)) score += 1;
      if (score > 0) rows.push({ title, slug, situation: s, score: score + (slug ? 0.5 : 0) });
    }
  }
  rows.sort((a, b) => b.score - a.score);
  return { live: rows.filter((r) => r.slug).slice(0, 3), soon: rows.filter((r) => !r.slug).slice(0, 4) };
}
