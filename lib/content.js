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
    check: { q: 'Maya and Leo both spend $2,500 a month. Maya has a steady paycheck. Leo drives for delivery apps and some weeks are slow. Who probably needs the bigger emergency fund?', options: ['Maya', 'Leo', 'They need the same'], answer: 1, why: 'When income goes up and down, savings have to cover the slow weeks as well as the surprises.' },
    confidence: 'How sure do you feel about your emergency fund number now?',
    learn: {
      idea: [
        'Over a lifetime, income usually rises, peaks and falls, while most people want their lifestyle to stay steady. Saving is how you move money from the good stretches to the hard ones.',
        'An emergency fund is the short-term version of that idea. It is money set aside so a surprise, like a repair or a gap between jobs, does not turn into expensive debt.',
        'Economists call this precautionary saving. Think of it as insurance you give yourself: you hope you never need it, and it keeps you steady if you do.',
      ],
      terms: [
        ['Emergency fund', 'Money kept aside only for surprises, somewhere easy to reach like a savings account.'],
        ['Must-pay spending', 'The costs you cannot skip: rent, food, bills, getting around, minimum debt payments.'],
        ['Liquid', 'Easy to turn into cash fast without losing value. A savings account is liquid. A car is not.'],
        ['Interest', 'The price of borrowing. When a surprise goes on a credit card, interest is the extra you pay for not having the cash.'],
      ],
      example: { who: 'Jasmine', title: "Jasmine's buffer", text: 'Jasmine has steady pay from her public-sector job. When her car needed a repair, she paid for it from the two months of expenses she had saved. A few years earlier the same repair would have gone straight onto a high-interest credit card.' },
      mixups: [
        ['"I need 6 months saved or it doesn\u2019t count."', 'Even 1 or 2 months gives you breathing room. You build the rest over time.'],
        ['"My credit card is my emergency fund."', 'A card covers the surprise and then charges you interest for it, often above 20% a year.'],
        ['"My job is stable, so I don\u2019t need one."', 'Steady income helps, and surprises still happen. Variable income points to a bigger fund, steady income to a smaller one.'],
      ],
    },
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
    related: ['minimum-payment', 'build-a-budget', 'how-much-car'],
  },
  'minimum-payment': {
    check: { q: 'Same $3,000 balance at 24%, three ways to pay. Which one costs the least in the end?', options: ['Only the minimum, which starts around $90 and shrinks', '$90 every month, held steady', '$150 every month'], answer: 2, why: 'The bigger steady payment wins, and even $90 held steady beats the shrinking minimum by thousands. The habit matters as much as the amount.' },
    confidence: 'How confident do you feel about paying down a card now?',
    learn: {
      idea: [
        'A credit card is revolving credit. You can borrow up to a limit, you are not required to pay it all back by a set date, and you only have to make a minimum payment each month.',
        'That flexibility is what makes it expensive. Card interest rates are high and the interest compounds daily, which means you pay interest on yesterday\u2019s interest.',
        'The minimum payment is set as a small share of what you owe. As the balance drops, the minimum drops too, so most of each payment keeps going to interest and the debt lasts for years.',
      ],
      terms: [
        ['APR', 'Annual percentage rate. The yearly price of borrowing, shown on your statement.'],
        ['Balance', 'What you owe on the card right now.'],
        ['Minimum payment', 'The smallest amount the card company accepts each month. It keeps the account in good standing and barely reduces the debt.'],
        ['Compounding', 'Interest being charged on interest that was already added. On cards this happens every day.'],
        ['Principal', 'The part of your debt that is the original borrowing, before interest.'],
      ],
      example: { who: 'Alex and Sofia', title: 'Alex vs. Sofia', text: 'Both owe $5,000 at 20% APR. Sofia pays $100 a month. It takes her about nine years and over $5,800 in interest. Alex pays $200 a month. He is debt free in under three years and pays around $1,500 in interest. Same debt, and a $4,300 difference.' },
      mixups: [
        ['"Paying the minimum means I\u2019m handling it."', 'It keeps you out of trouble with the card company. It does very little to the debt itself.'],
        ['"A few dollars more won\u2019t matter."', 'Because of compounding, small steady increases cut years off. Try the slider to see it.'],
        ['"Interest is charged once a year."', 'On credit cards it builds daily. Sofia\u2019s $5,000 at 20% grows by about $1,107 in a year, compared with $1,000 if it compounded once.'],
      ],
    },
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
    related: ['how-much-car', 'emergency-fund', 'build-a-budget'],
  },
  'how-much-car': {
    check: { q: 'Two loans for the same $24,000 car at 7%: 3 years or 6 years. Which is true?', options: ['The 6 year loan costs less overall', 'The 3 year loan has the smaller monthly payment', 'The 6 year loan has the smaller payment and costs more overall'], answer: 2, why: 'Stretching the loan lowers each payment and adds months of interest. About $2,700 in interest becomes about $5,500.' },
    confidence: 'How confident do you feel about choosing a car loan now?',
    learn: {
      idea: [
        'A car loan is an installment loan. You borrow a fixed amount and repay it in equal monthly payments over a set time, so you know exactly when it ends.',
        'Every payment has two parts: principal, which is the amount you borrowed, and interest, which is the cost of borrowing it.',
        'A longer loan makes each payment smaller and the total bigger, because you pay interest for more months. The car is also collateral: if payments stop, the lender can take it back. That lowers the lender\u2019s risk, which is why car loan rates are lower than credit card rates.',
      ],
      terms: [
        ['Installment loan', 'A loan repaid in regular, equal payments over a fixed period.'],
        ['Principal', 'The amount you borrowed, before interest.'],
        ['Loan length (term)', 'How many months or years you take to repay.'],
        ['APR', 'The yearly price of the loan. Your credit score is one of the things that sets it.'],
        ['Collateral', 'Something the lender can take if you stop paying. With a car loan, it is the car.'],
      ],
      example: { who: 'Sam', title: 'Sam compares two loans', text: 'Sam borrows $24,000 at 7% for the same car. Over 3 years he pays about $741 a month and $2,678 in interest. Over 6 years he pays about $409 a month and $5,461 in interest. The longer loan feels easier each month and costs about twice as much to borrow.' },
      mixups: [
        ['"If I can afford the monthly payment, I can afford the car."', 'The monthly number hides the total. Look at both, plus insurance, gas and repairs.'],
        ['"A longer loan saves me money."', 'It lowers the payment and raises what you pay overall.'],
        ['"The rate is the same for everyone."', 'Lenders set it using your credit score, the car and the loan length. It is worth comparing offers.'],
      ],
    },
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
    related: ['minimum-payment', 'build-a-budget', 'emergency-fund'],
  },
  'build-a-budget': {
    check: { q: "Maya's rent, phone bill and loan payment are the same every month. Her groceries and nights out change. Which costs can she adjust most easily this month?", options: ['The fixed ones', 'The variable ones', 'Neither'], answer: 1, why: 'Fixed costs are locked in for now. Variable costs move month to month, so that is where a budget has room.' },
    confidence: 'How confident do you feel about making a budget now?',
    learn: {
      idea: [
        'A budget is a plan for your cash flow: what comes in, what goes out, and what you decide to keep. It works best when it starts from a goal, because the goal tells you what the plan is for.',
        'Costs come in two kinds. Fixed costs like rent, insurance and loan payments stay the same each month. Variable costs like groceries, eating out and fun change, and that is where you have room to adjust.',
        'Saving belongs inside the budget as its own line, first for an emergency fund and then for longer goals. A good budget is well planned, organized in a way you will keep using, and adaptable when life changes.',
      ],
      terms: [
        ['After-tax income', 'What lands in your account after taxes and deductions. Also called take-home pay.'],
        ['Fixed expenses', 'Costs that are the same every month, like rent or a loan payment.'],
        ['Variable expenses', 'Costs that change month to month, like food or entertainment.'],
        ['Net cash flow', 'Money in minus money out. Positive means something is left over. Negative means you are spending more than you earn.'],
      ],
      example: { who: 'Grace and Alex', title: 'Seven steps, two lives', text: 'The course builds a budget in seven steps: set a goal, estimate after-tax income, list fixed and variable expenses, add debt payments, make room for emergency saving, make room for further saving, then review and revise. Grace uses them with a steady paycheck. Alex uses the same steps with gig income that changes, so he plans around a lower month and reviews more often.' },
      mixups: [
        ['"A budget means cutting out everything fun."', 'It is a guide, not a rulebook. Fun is a line in the plan like any other.'],
        ['"I\u2019ll save whatever is left at the end."', 'Saving works better as a planned line, like a bill you pay yourself.'],
        ['"I made one once, so I\u2019m done."', 'Budgets change when life does. A quick review each month keeps it real.'],
      ],
    },
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
    related: ['emergency-fund', 'minimum-payment', 'how-much-car'],
  },
};

// live: slug of a built question page. Everything else shows as "coming soon".
export const situations = [
  { slug: 'first-job', topic: 'Investing', hex: '#2f6d78', name: 'Starting my first job', blurb: 'Benefits forms, first paychecks, and decisions with deadlines.', qs: [['How much should I put in my 401(k)?'], ['What is an employer match, and am I leaving money on the table?'], ['Roth or traditional, which one is for me?'], ['HSA or FSA?'], ['Why is my paycheck so much smaller than my salary?']], calcs: ['savings', 'tvm'] },
  { slug: 'getting-organized', topic: 'Budgeting', hex: '#4d9788', name: 'Getting my money organized', blurb: 'See where your money goes and make a plan you can keep.', qs: [["How do I make a budget I'll actually stick to?", 'build-a-budget'], ['Where does all my money go?'], ['How much should I be saving each month?'], ["How do I know if I'm doing okay financially?"]], calcs: ['savings'] },
  { slug: 'moving-out', topic: 'Saving & Borrowing', hex: '#dc8831', name: 'Moving out or moving cities', blurb: 'Rent, paperwork, and a cushion for what you can\'t predict.', qs: [['How much should I have in an emergency fund?', 'emergency-fund'], ['How much rent can I afford?'], ['What documents do I need to rent an apartment?'], ['Can I afford to live alone, or do I need roommates?']], calcs: ['savings'] },
  { slug: 'dealing-with-debt', topic: 'Saving & Borrowing', hex: '#dc8831', name: 'Dealing with debt', blurb: 'Understand what your debt costs and find a way out that fits.', qs: [['What happens if I only pay the minimum on my credit card?', 'minimum-payment'], ['How do I pay off credit card debt faster?'], ['Should I pay extra on my student loans?'], ['Should I pay off debt or save first?']], calcs: ['debt-payoff', 'interest'] },
  { slug: 'building-credit', topic: 'Saving & Borrowing', hex: '#dc8831', name: 'Building credit', blurb: 'What a credit score is, what moves it, and why it matters.', qs: [['How do I build credit from nothing?'], ["What's a good credit score?"], ['Does closing a credit card hurt my score?']], calcs: [] },
  { slug: 'buying-a-car', topic: 'Saving & Borrowing', hex: '#dc8831', name: 'Buying a car', blurb: 'Monthly payment, total cost, and everything around them.', qs: [['How much car can I afford?', 'how-much-car'], ['Should I lease or buy a car?'], ['Is 0% financing a good deal?'], ['New or used?']], calcs: ['debt-payoff'] },
  { slug: 'starting-to-invest', topic: 'Investing', hex: '#2f6d78', name: 'Starting to invest', blurb: 'Stocks, funds, fees, and getting started with small amounts.', qs: [['How do I start investing with little money?'], ['What is an index fund?'], ['Do fees of 1% really matter?'], ['Should I invest in crypto?']], calcs: ['tvm', 'savings'] },
  { slug: 'buying-a-home', topic: 'Saving & Borrowing', hex: '#dc8831', name: 'Buying a home', blurb: 'Renting vs. buying, mortgages, and refinancing.', qs: [['Should I rent or buy?'], ['How much house can I afford?'], ['Is a 15 or 30 year mortgage better?'], ['When does refinancing make sense?']], calcs: ['mortgage', 'refi'] },
  { slug: 'big-choices', topic: 'Money management', hex: '#6b9cac', name: 'Comparing offers and big choices', blurb: 'Money now or later, raises, bonuses, and inflation.', qs: [['Should I take the signing bonus or the higher salary?'], ['Is my raise actually a raise?'], ['Is it better to get money now or later?']], calcs: ['present-value', 'tvm'] },
  { slug: 'retirement', topic: 'Retirement', hex: '#b2316d', name: 'Thinking about retirement', blurb: 'How much you need, whether you are on track, and risk as you age.', qs: [['How much do I need to retire?'], ['Am I saving enough for my age?'], ['Should my investments get safer as I get older?']], calcs: ['savings', 'tvm'] },
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
