const quizBank = [
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "Which of the following best describes the difference between simple and compound interest?",
    "options": [
      "A) Simple interest is calculated on the principal and accumulated interest, while compound interest is only on the principal.",
      "B) Compound interest is calculated on the initial principal and also includes all of the accumulated interest from previous periods.",
      "C) Simple interest always yields a higher final amount than compound interest over multiple periods.",
      "D) Compound interest is only used for public sector projects."
    ],
    "correctAnswer": 1,
    "explanation": "Compound interest calculates interest on both the initial principal and the accumulated interest from previous periods, whereas simple interest is calculated only on the principal amount."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What does MARR stand for in engineering economic analysis?",
    "options": [
      "A) Maximum Allowable Rate of Return",
      "B) Minimum Acceptable Rate of Return",
      "C) Marginal Annual Revenue Rate",
      "D) Mean Average Rate of Return"
    ],
    "correctAnswer": 1,
    "explanation": "MARR stands for Minimum Acceptable Rate of Return. It is the lowest return rate that a project must earn to be considered financially viable by an investor or company."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "In a replacement analysis, how should 'sunk costs' be treated?",
    "options": [
      "A) They should be added to the capital cost of the new asset (challenger).",
      "B) They must be subtracted from the operating costs of the existing asset (defender).",
      "C) They are completely irrelevant to the decision and should be ignored.",
      "D) They determine the salvage value of the challenger."
    ],
    "correctAnswer": 2,
    "explanation": "Sunk costs are past costs that have already been incurred and cannot be recovered. In economic decision-making, they are irrelevant to evaluating future alternatives."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Under the Canadian Capital Cost Allowance (CCA) system, what is the 'Half-Year Rule'?",
    "options": [
      "A) Taxes are paid twice a year.",
      "B) Only 50% of an asset's cost can be claimed for depreciation in the year it is acquired.",
      "C) Assets depreciate completely within half a year.",
      "D) Corporate tax rates are halved for the first year of a new business."
    ],
    "correctAnswer": 1,
    "explanation": "The Half-Year Rule dictates that in the year an asset is purchased, only half of its net additions can be used to calculate the CCA claim, regardless of when in the year it was bought."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Which of the following represents the relationship between the real interest rate (i'), the inflation rate (f), and the actual/nominal interest rate (i)?",
    "options": [
      "A) i = i' + f",
      "B) i = i' + f + (i' * f)",
      "C) i' = i + f",
      "D) i = (i' / f) + 1"
    ],
    "correctAnswer": 1,
    "explanation": "The exact relationship is 1 + i = (1 + i')(1 + f), which expands to i = i' + f + (i' * f). Options without the cross-product term are only approximations."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "If you deposit $2,500 today at an interest rate of 6% per year, compounded semi-annually, how much will you accumulate in 4 years?",
    "options": [
      "A) $2,985",
      "B) $3,167",
      "C) $3,100",
      "D) $3,250"
    ],
    "correctAnswer": 1,
    "explanation": "The nominal rate is 6%, so the rate per semi-annual period is 3% (0.03). There are 4 years * 2 = 8 periods. Future Worth = $2,500 * (1 + 0.03)^8 = $2,500 * 1.26677 = $3,166.93."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "A maintenance contract requires a payment of $1,000 at the end of year 1. Payments will increase by an arithmetic gradient of $200 each subsequent year. What is the exact cash flow payment at the end of year 4?",
    "options": [
      "A) $1,200",
      "B) $1,400",
      "C) $1,600",
      "D) $1,800"
    ],
    "correctAnswer": 2,
    "explanation": "The formula for an arithmetic gradient cash flow at year n is CF_n = Base + (n - 1)*G. For year 4: CF_4 = $1,000 + (4 - 1)*$200 = $1,000 + $600 = $1,600."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "When evaluating two mutually exclusive projects using the Present Worth method, which rule applies if the MARR is met?",
    "options": [
      "A) Select the project with the lowest initial cost.",
      "B) Select the project with the highest Present Worth.",
      "C) Select the project with the shortest Payback Period.",
      "D) Select both projects if their Present Worth is positive."
    ],
    "correctAnswer": 1,
    "explanation": "For mutually exclusive projects (where only one can be chosen), the decision rule is to maximize wealth by choosing the alternative with the highest positive Present Worth evaluated at the MARR."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "A project requires an initial investment of $10,000 and yields a single return of $12,100 exactly two years later. What is the internal rate of return (IRR) for this project?",
    "options": [
      "A) 10%",
      "B) 11%",
      "C) 12.1%",
      "D) 21%"
    ],
    "correctAnswer": 0,
    "explanation": "Set Present Worth to 0: $10,000 = $12,100 / (1 + i)^2. Therefore, (1 + i)^2 = 1.21. Taking the square root gives 1 + i = 1.10, so i = 0.10 or 10%."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "When making a replacement decision, how should the current market value (resale value) of the existing asset (the defender) be treated?",
    "options": [
      "A) As a sunk cost that must be ignored.",
      "B) As the initial capital investment or opportunity cost of keeping the defender.",
      "C) As a variable operating cost.",
      "D) As a negative cash flow for the challenger."
    ],
    "correctAnswer": 1,
    "explanation": "By deciding to keep the defender, you are giving up the money you could have made by selling it. Therefore, its current market value is treated as the opportunity cost (or initial investment) of keeping it."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "The Equivalent Annual Cost (EAC) of owning and operating an asset is generally composed of which two primary components?",
    "options": [
      "A) Sunk costs and opportunity costs.",
      "B) Fixed costs and variable revenues.",
      "C) EAC of Capital Costs and EAC of Operating/Maintenance Costs.",
      "D) Salvage value and depreciation."
    ],
    "correctAnswer": 2,
    "explanation": "EAC represents the average annual cost of an asset over its life, which combines the annualized cost of purchasing and disposing of the asset (Capital) and the annualized cost of running it (Operating)."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "A corporation evaluates projects using a before-tax MARR of 15%. If the corporate tax rate is 40%, what is the approximate after-tax MARR?",
    "options": [
      "A) 6%",
      "B) 9%",
      "C) 11%",
      "D) 25%"
    ],
    "correctAnswer": 1,
    "explanation": "The relationship is roughly After-tax MARR = Before-tax MARR * (1 - t). Thus, 15% * (1 - 0.40) = 15% * 0.60 = 9%."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "You expect a project to generate $5,000 in actual (current) dollars 3 years from now. If the general inflation rate is expected to be 4% per year, what is the value of this cash flow in real (constant) dollars today?",
    "options": [
      "A) $4,445",
      "B) $4,808",
      "C) $5,624",
      "D) $4,630"
    ],
    "correctAnswer": 0,
    "explanation": "To convert actual dollars to real dollars, you discount by the inflation rate: Real Dollars = Actual Dollars / (1 + f)^n. Therefore, $5,000 / (1.04)^3 = $5,000 / 1.124864 = $4,444.98."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "In a public sector Benefit-Cost Analysis, how are 'disbenefits' (negative consequences or damages to the public) conventionally treated in the Benefit-Cost ratio?",
    "options": [
      "A) Added to the costs in the denominator.",
      "B) Subtracted from the benefits in the numerator.",
      "C) Ignored unless they exceed the project costs.",
      "D) Treated as sunk costs."
    ],
    "correctAnswer": 1,
    "explanation": "Conventionally, the Benefit-Cost ratio is (Benefits - Disbenefits) / Costs. Disbenefits reduce the overall public benefit, so they are subtracted from the numerator."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "A manufacturing firm has fixed costs of $50,000 per year. The variable cost to produce one unit is $15, and the product sells for $25. What is the annual break-even production volume?",
    "options": [
      "A) 2,000 units",
      "B) 3,333 units",
      "C) 5,000 units",
      "D) 1,250 units"
    ],
    "correctAnswer": 2,
    "explanation": "Break-even occurs when Total Revenue = Total Costs. $25 * Q = $50,000 + ($15 * Q). Subtracting 15Q from both sides gives 10Q = 50,000, so Q = 5,000 units."
  },
  {
    "chapter": "Chapter 1: Engineering Decision Making",
    "question": "Which of the following best defines 'Opportunity Cost' in engineering economics?",
    "options": [
      "A) The original purchase price of an asset.",
      "B) The potential benefit that is given up when you choose one alternative over another.",
      "C) The cost of maintaining an asset over its lifetime.",
      "D) Costs that have already been incurred and cannot be recovered."
    ],
    "correctAnswer": 1,
    "explanation": "Opportunity cost represents the value of the best alternative forgone. When you commit resources to one project, you lose the opportunity to invest those resources elsewhere."
  },
  {
    "chapter": "Chapter 1: Engineering Decision Making",
    "question": "What is the primary difference between a fixed cost and a variable cost?",
    "options": [
      "A) Fixed costs change with time, while variable costs change with location.",
      "B) Fixed costs are unaffected by the level of production, while variable costs vary directly with production volume.",
      "C) Fixed costs apply only to public projects, whereas variable costs apply to private projects.",
      "D) Fixed costs are always sunk costs."
    ],
    "correctAnswer": 1,
    "explanation": "Fixed costs (like rent or insurance) remain constant regardless of how much you produce. Variable costs (like raw materials) increase as you produce more."
  },
  {
    "chapter": "Chapter 1: Engineering Decision Making",
    "question": "Which phase of an engineering project's life cycle typically locks in the majority of its life-cycle costs?",
    "options": [
      "A) Construction/Implementation phase",
      "B) Operation and Maintenance phase",
      "C) Disposal phase",
      "D) Conceptual Design and Planning phase"
    ],
    "correctAnswer": 3,
    "explanation": "Decisions made during the early design and planning phases dictate the materials, processes, and maintenance requirements, essentially locking in over 70% of the project's life-cycle costs."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "If a bank offers a nominal interest rate of 12% compounded monthly, what is the effective annual interest rate?",
    "options": [
      "A) 12.00%",
      "B) 12.36%",
      "C) 12.68%",
      "D) 13.10%"
    ],
    "correctAnswer": 2,
    "explanation": "Using the formula ie = (1 + r/m)^m - 1: ie = (1 + 0.12/12)^12 - 1 = (1.01)^12 - 1 = 1.1268 - 1 = 12.68%."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "According to the Rule of 72, approximately how long will it take for an investment to double if the annual interest rate is 8%?",
    "options": [
      "A) 6 years",
      "B) 8 years",
      "C) 9 years",
      "D) 12 years"
    ],
    "correctAnswer": 2,
    "explanation": "The Rule of 72 is a quick estimation tool. Years to double = 72 / Interest Rate. 72 / 8 = 9 years."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "In a standard cash flow diagram, what does a downward-pointing arrow represent?",
    "options": [
      "A) A cash receipt or revenue.",
      "B) A cash disbursement or cost.",
      "C) The passage of time.",
      "D) The interest rate."
    ],
    "correctAnswer": 1,
    "explanation": "By convention in cash flow diagrams, upward arrows represent cash inflows (receipts/revenues) and downward arrows represent cash outflows (disbursements/costs)."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "What is the continuous compounding formula for finding the Future Worth (F) of a Present Amount (P) given a nominal rate (r) and (N) years?",
    "options": [
      "A) F = P(1 + r)^N",
      "B) F = P * e^(r * N)",
      "C) F = P / e^(r * N)",
      "D) F = P(1 + r/N)^(N*r)"
    ],
    "correctAnswer": 1,
    "explanation": "For continuous compounding, the mathematical limit leads to the formula involving Euler's number (e): F = P * e^(rN)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "Which of the following series represents a Geometric Gradient?",
    "options": [
      "A) Cash flows increase by exactly $500 every year.",
      "B) Cash flows remain constant at $1,000 every year.",
      "C) Cash flows increase by a constant percentage, such as 5% every year.",
      "D) Cash flows occur randomly with no pattern."
    ],
    "correctAnswer": 2,
    "explanation": "An arithmetic gradient increases/decreases by a constant amount, whereas a geometric gradient increases/decreases by a constant rate or percentage each period."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "The 'Capital Recovery Factor' (A/P, i, N) is used to calculate:",
    "options": [
      "A) The present worth of a future amount.",
      "B) The future worth of a uniform series.",
      "C) The uniform annual equivalent of a present investment.",
      "D) The present worth of a gradient series."
    ],
    "correctAnswer": 2,
    "explanation": "The Capital Recovery formula converts a Present Worth (P) into an equivalent uniform Annual series (A). It is heavily used in loan amortizations."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "If you want to withdraw a uniform amount A forever (a perpetuity) from an initial deposit P, assuming an interest rate i, what is the relationship?",
    "options": [
      "A) P = A * i",
      "B) P = A / i",
      "C) A = P / (1 + i)",
      "D) A = P * (1 + i)"
    ],
    "correctAnswer": 1,
    "explanation": "For a perpetual annuity (where N approaches infinity), the present worth is P = A / i. Conversely, A = P * i."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "You take out a $10,000 loan to be repaid in equal annual installments over 5 years at 5% interest. Which factor do you use to find your annual payment?",
    "options": [
      "A) (P/A, 5%, 5)",
      "B) (A/F, 5%, 5)",
      "C) (A/P, 5%, 5)",
      "D) (F/P, 5%, 5)"
    ],
    "correctAnswer": 2,
    "explanation": "You know the Present amount (P) and want to find the Annual amount (A). Therefore, you use the (A/P) factor: A = P(A/P, 5%, 5)."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "When comparing two mutually exclusive projects with DIFFERENT useful lives using the Present Worth method, what must you do?",
    "options": [
      "A) Compare them directly over their respective lives.",
      "B) Use the Annual Worth method instead, or evaluate them over a Least Common Multiple (LCM) of their lives.",
      "C) Ignore the longer-lived project.",
      "D) Use the Payback Period method."
    ],
    "correctAnswer": 1,
    "explanation": "Present Worth comparison requires a common study period. You must either use the LCM of their lives, choose a specific study period, or use the Annual Worth method (which assumes continuous replacement)."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What is a major flaw of the simple Payback Period method?",
    "options": [
      "A) It is too complex to calculate.",
      "B) It completely ignores all cash flows that occur after the payback point is reached.",
      "C) It only works for public sector projects.",
      "D) It requires knowing the exact MARR."
    ],
    "correctAnswer": 1,
    "explanation": "The Payback Period tells you how fast you get your money back, but ignores profitability and cash flows occurring after the breakeven point, potentially rejecting highly profitable long-term projects."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What is 'Capitalized Cost'?",
    "options": [
      "A) The total initial investment required for a project.",
      "B) The Present Worth of a project with an infinite (perpetual) life.",
      "C) The Future Worth of a project at the end of its useful life.",
      "D) The cost of borrowing money from a bank."
    ],
    "correctAnswer": 1,
    "explanation": "Capitalized cost refers to the Present Worth of a project that is assumed to last forever, such as bridges, dams, or permanent endowments. CC = P = A/i."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "If an independent project has a Present Worth of exactly $0 at a MARR of 12%, should it be accepted?",
    "options": [
      "A) No, because it makes no profit.",
      "B) Yes, because it is exactly earning the minimum acceptable rate of return.",
      "C) No, because its IRR is negative.",
      "D) Yes, but only if it's a public project."
    ],
    "correctAnswer": 1,
    "explanation": "A PW of $0 means the project is yielding exactly the MARR (12%). Since MARR is the minimum acceptable return, a project earning exactly MARR is considered economically acceptable."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "Under what condition might a project have Multiple Internal Rates of Return (IRRs)?",
    "options": [
      "A) When the initial investment is very large.",
      "B) When the cash flow sequence changes sign more than once (non-conventional cash flows).",
      "C) When the project has a life longer than 10 years.",
      "D) When the MARR changes during the project life."
    ],
    "correctAnswer": 1,
    "explanation": "According to Descartes' rule of signs, a cash flow series can have up to as many IRRs as there are sign changes. If there are net costs in the middle of a project, multiple IRRs can exist."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "Why is Incremental IRR Analysis necessary when comparing mutually exclusive projects?",
    "options": [
      "A) Because selecting the project with the highest IRR does not guarantee the maximum total wealth.",
      "B) Because IRR cannot be calculated for mutually exclusive projects.",
      "C) Because the MARR is unknown.",
      "D) Because it converts IRR into ERR."
    ],
    "correctAnswer": 0,
    "explanation": "A smaller project might have a higher IRR, but a larger project with a slightly lower IRR might yield more total dollars. Incremental analysis ensures you evaluate whether the extra investment in the larger project is worth it."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "What is the primary assumption difference between IRR and ERR (External Rate of Return)?",
    "options": [
      "A) IRR assumes reinvestment at the MARR; ERR assumes reinvestment at the IRR.",
      "B) IRR assumes reinvestment at the IRR; ERR assumes reinvestment at an external rate, usually the MARR.",
      "C) IRR ignores the time value of money; ERR includes it.",
      "D) There is no difference in their assumptions."
    ],
    "correctAnswer": 1,
    "explanation": "IRR implicitly assumes that generated cash flows are reinvested at the IRR itself, which is often unrealistic. ERR correctly assumes cash flows are reinvested at an external, realistic rate (usually MARR)."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "If Project A has an IRR of 15% and Project B has an IRR of 18%, and MARR is 10%, which project should you choose if they are mutually exclusive?",
    "options": [
      "A) Project A",
      "B) Project B",
      "C) Neither",
      "D) It cannot be determined without an incremental analysis or Present Worth comparison."
    ],
    "correctAnswer": 3,
    "explanation": "You cannot simply pick the highest IRR for mutually exclusive projects. You must perform an incremental IRR analysis (IRR of B - A) or compare their Present Worths to find the best economic choice."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "The IRR is mathematically equivalent to the discount rate that makes the Present Worth of a project equal to:",
    "options": [
      "A) Infinity",
      "B) The initial investment",
      "C) Zero",
      "D) The MARR"
    ],
    "correctAnswer": 2,
    "explanation": "By definition, the Internal Rate of Return is the specific interest rate (i*) at which the Present Worth of all cash inflows exactly equals the Present Worth of all cash outflows (PW = 0)."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "What is meant by the 'Economic Life' of an asset?",
    "options": [
      "A) The time until the asset completely breaks down.",
      "B) The number of years that minimizes the asset's Equivalent Annual Cost (EAC).",
      "C) The time dictated by the CCA tax depreciation schedules.",
      "D) The time it takes for the salvage value to reach zero."
    ],
    "correctAnswer": 1,
    "explanation": "The economic life is the optimal replacement interval. It is the number of years the asset should be kept to minimize its Equivalent Annual Cost (Capital + Operating)."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "In replacement analysis, the 'Outsider Viewpoint' treats the current salvage value of the defender as:",
    "options": [
      "A) A sunk cost.",
      "B) The investment cost required to acquire the defender if you didn't already own it.",
      "C) A future cash inflow.",
      "D) An operating expense."
    ],
    "correctAnswer": 1,
    "explanation": "The outsider viewpoint assumes you do not own the asset yet. If you want to use it, you must 'buy' it at its current market value. Thus, current salvage value acts as the initial capital cost of the defender."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "When comparing a defender and a challenger, if the challenger is strictly better but 'does not repeat', what is the proper comparison method?",
    "options": [
      "A) Compare them using an infinite study period.",
      "B) Replace immediately.",
      "C) Compare the marginal costs of the defender against the EAC of the challenger over its economic life.",
      "D) Compare only their initial capital costs."
    ],
    "correctAnswer": 2,
    "explanation": "If the challenger doesn't repeat, you look at the defender's marginal cost (the cost to keep it one more year). As soon as the defender's marginal cost exceeds the challenger's EAC, you should replace."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "If you decide to trade in an old machine for a new one, how does the trade-in allowance affect the cash flow in a replacement analysis?",
    "options": [
      "A) It is added to the operating cost of the new machine.",
      "B) It reduces the initial capital outlay required for the challenger.",
      "C) It is treated as a sunk cost.",
      "D) It has no effect on the economic analysis."
    ],
    "correctAnswer": 1,
    "explanation": "The actual cash paid for the new machine is its purchase price minus the trade-in allowance. It directly reduces the Year 0 cost of the challenger."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "As an asset ages, what typically happens to its Capital EAC and its Operating EAC?",
    "options": [
      "A) Both Capital and Operating EAC increase.",
      "B) Capital EAC increases, Operating EAC decreases.",
      "C) Capital EAC decreases, Operating EAC increases.",
      "D) Both Capital and Operating EAC decrease."
    ],
    "correctAnswer": 2,
    "explanation": "As you keep an asset longer, the annualized cost of its initial purchase drops (Capital EAC decreases). However, it requires more maintenance and becomes less efficient, so its annual operating costs rise (Operating EAC increases)."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "An asset is purchased for $50,000 in a CCA class with a 20% rate. Using the half-year rule, what is the CCA claim for the FIRST year?",
    "options": [
      "A) $10,000",
      "B) $5,000",
      "C) $2,500",
      "D) $20,000"
    ],
    "correctAnswer": 1,
    "explanation": "The half-year rule allows only half of the normal depreciation in the year of acquisition. Normal CCA = $50,000 * 20% = $10,000. Half of that is $5,000."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Continuing from the previous question, what is the Undepreciated Capital Cost (UCC) at the start of the SECOND year?",
    "options": [
      "A) $40,000",
      "B) $50,000",
      "C) $45,000",
      "D) $47,500"
    ],
    "correctAnswer": 2,
    "explanation": "UCC = Initial Cost - CCA claimed. $50,000 - $5,000 (first year claim) = $45,000. This is the starting balance for year 2."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "What is 'Recaptured Depreciation' in the Canadian tax system?",
    "options": [
      "A) Selling an asset for less than its UCC.",
      "B) Selling an asset for more than its initial purchase price.",
      "C) Selling an asset for more than its UCC, causing a negative pool balance, which is added to taxable income.",
      "D) A government grant for buying new equipment."
    ],
    "correctAnswer": 2,
    "explanation": "If you sell an asset for more than its book value (UCC) but less than its original cost, and the asset class pool becomes negative, you 'recapture' the over-claimed depreciation, which is taxed as regular income."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "The Capital Tax Factor (CTF) is used to:",
    "options": [
      "A) Calculate the total corporate tax paid in a year.",
      "B) Convert an initial capital investment into an equivalent after-tax present worth, accounting for future tax shields.",
      "C) Determine the half-year rule penalty.",
      "D) Calculate inflation adjustments."
    ],
    "correctAnswer": 1,
    "explanation": "The CTF formula quickly calculates the present worth of all future tax savings generated by the CCA depreciation of an asset, making after-tax evaluation much faster."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "How are regular Operating and Maintenance (O&M) expenses treated for tax purposes?",
    "options": [
      "A) They are capitalized and depreciated via CCA.",
      "B) They are fully deductible from taxable income in the year they are incurred.",
      "C) They are not tax-deductible.",
      "D) They are subject to the half-year rule."
    ],
    "correctAnswer": 1,
    "explanation": "Unlike capital assets which must be depreciated over time, regular operating expenses (like salaries, rent, or maintenance) are fully written off against revenue in the current year."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "What does the Consumer Price Index (CPI) measure?",
    "options": [
      "A) The rate of return on the stock market.",
      "B) The average change over time in the prices paid by consumers for a market basket of goods and services.",
      "C) The interest rate set by the Bank of Canada.",
      "D) The corporate tax rate adjustments over time."
    ],
    "correctAnswer": 1,
    "explanation": "The CPI tracks the price of a standard 'basket' of goods. Changes in the CPI over time indicate the rate of inflation in the general economy."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "If you evaluate a project using 'Real Dollars', which MARR should you use?",
    "options": [
      "A) The Nominal (Actual) MARR.",
      "B) The Real (Constant) MARR.",
      "C) The Before-tax MARR.",
      "D) The Inflation Rate."
    ],
    "correctAnswer": 1,
    "explanation": "Consistency is key in inflation analysis. Real dollars must be discounted using the Real MARR. Actual dollars must be discounted using the Actual/Nominal MARR."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "How does inflation affect the value of a fixed loan payment (e.g., a mortgage) from the borrower's perspective?",
    "options": [
      "A) It hurts the borrower because payments become more expensive in real terms.",
      "B) It benefits the borrower because they are paying back the loan with dollars that have less purchasing power.",
      "C) It has no effect on the borrower.",
      "D) It increases the interest rate of the loan automatically."
    ],
    "correctAnswer": 1,
    "explanation": "Inflation erodes purchasing power. If your debt payments are fixed in actual dollars, inflation makes those future payments cheaper in 'real' terms, effectively benefiting the borrower and hurting the lender."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Why is the tax shield provided by CCA (depreciation) negatively impacted by inflation?",
    "options": [
      "A) Because CCA is indexed to inflation.",
      "B) Because tax rates increase with inflation.",
      "C) Because CCA claims are based on historical costs (actual dollars), so their real tax-saving value shrinks as inflation rises.",
      "D) Because inflation prevents companies from making profits."
    ],
    "correctAnswer": 2,
    "explanation": "The government does not adjust your initial purchase price for inflation. Your future CCA deductions are fixed based on the past purchase price, meaning the real purchasing power of those tax savings decreases due to inflation."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "If the real interest rate is 3% and the inflation rate is 2%, what is the exact actual (nominal) interest rate?",
    "options": [
      "A) 5.00%",
      "B) 5.06%",
      "C) 1.00%",
      "D) 6.00%"
    ],
    "correctAnswer": 1,
    "explanation": "Using the formula i = i' + f + (i'*f) => 0.03 + 0.02 + (0.03 * 0.02) = 0.05 + 0.0006 = 0.0506 or 5.06%."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "Which of the following is a classic example of a 'Public Good'?",
    "options": [
      "A) A toll bridge",
      "B) A private university",
      "C) National Defense",
      "D) A movie theater"
    ],
    "correctAnswer": 2,
    "explanation": "Public goods are non-rivalrous (one person's use doesn't diminish another's) and non-excludable (you cannot stop someone from benefiting). National defense perfectly fits this definition."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is the 'Free-Rider Problem' in the context of public sector economics?",
    "options": [
      "A) People riding public transit without paying.",
      "B) Individuals benefiting from a public good without paying for it, leading to under-provision by the private market.",
      "C) Government overspending on infrastructure.",
      "D) Companies avoiding corporate taxes."
    ],
    "correctAnswer": 1,
    "explanation": "Because public goods are non-excludable, individuals have no incentive to voluntarily pay for them, assuming others will. This is why governments step in to fund them via taxes."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "When evaluating public projects, what is a 'Negative Externality'?",
    "options": [
      "A) A project that goes over budget.",
      "B) A cost imposed on a third party who is not directly involved in the project (e.g., pollution affecting nearby residents).",
      "C) When a public good fails to attract users.",
      "D) A decline in the stock market."
    ],
    "correctAnswer": 1,
    "explanation": "Externalities are side effects of an activity. A negative externality is a harmful side effect suffered by external parties, which private companies often ignore but public BC analyses must include."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "If a public project has a Conventional Benefit-Cost (B/C) ratio of 1.15, what does this indicate?",
    "options": [
      "A) The project should be rejected.",
      "B) The present worth of social benefits exceeds the present worth of social costs by 15%, so it is economically justifiable.",
      "C) The project has a 15% rate of return.",
      "D) The project is too risky."
    ],
    "correctAnswer": 1,
    "explanation": "A B/C ratio greater than 1.0 means the benefits outweigh the costs at the chosen social discount rate, making the project viable from an economic standpoint."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "How does the 'Social Discount Rate' used for public projects generally compare to a private corporation's MARR?",
    "options": [
      "A) It is usually much higher to account for government inefficiency.",
      "B) It is usually exactly the same.",
      "C) It is usually lower, reflecting a longer-term perspective and societal focus.",
      "D) It is always zero."
    ],
    "correctAnswer": 2,
    "explanation": "Governments have a longer time horizon and focus on social welfare rather than aggressive short-term profits. They can also borrow money at lower rates. Thus, the social discount rate is typically lower than private MARR."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "In decision-making under uncertainty, how is the 'Expected Value' (EV) calculated?",
    "options": [
      "A) By averaging the best and worst possible outcomes.",
      "B) By multiplying each possible outcome by its probability of occurrence and summing the results.",
      "C) By finding the most likely outcome and ignoring the rest.",
      "D) By taking the square root of the variance."
    ],
    "correctAnswer": 1,
    "explanation": "Expected Value is a weighted average. EV = (Probability 1 * Outcome 1) + (Probability 2 * Outcome 2) + ... + (Probability n * Outcome n)."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "When looking at a Spiderplot (Sensitivity Graph), what does a steeper slope for a specific parameter indicate?",
    "options": [
      "A) The project is highly insensitive to changes in that parameter.",
      "B) The project's Present Worth changes dramatically with small changes in that parameter (high sensitivity).",
      "C) That parameter has a high probability of occurring.",
      "D) The parameter is a fixed cost."
    ],
    "correctAnswer": 1,
    "explanation": "In a sensitivity graph, the slope shows how much the outcome (like PW) changes when the parameter changes. A steep line means high sensitivity (high risk), while a flat line means low sensitivity."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "What is the primary purpose of a Decision Tree in engineering economics?",
    "options": [
      "A) To map out the organizational structure of a company.",
      "B) To visually structure sequential decisions and uncertain events to identify the strategy with the highest expected value.",
      "C) To calculate exact tax depreciation rates.",
      "D) To find the break-even volume of production."
    ],
    "correctAnswer": 1,
    "explanation": "Decision trees combine choices (square nodes) and probabilities (circular chance nodes) mapping out future scenarios to help determine the optimal path that maximizes Expected Value."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "In a decision tree, how do you process the tree to find the optimal decision?",
    "options": [
      "A) From left to right (start to finish).",
      "B) By randomly selecting branches.",
      "C) By folding back from right to left, calculating expected values at chance nodes and picking the highest value at decision nodes.",
      "D) By picking the branch with the highest single possible payoff, regardless of probability."
    ],
    "correctAnswer": 2,
    "explanation": "This technique is called 'folding back'. You start at the end outcomes on the right, calculate expected values moving left, and at decision nodes, you 'choose' the path with the best expected value."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "You are organizing an outdoor event. It costs $5,000 to set up. If it's sunny (60% chance), revenue is $10,000. If it rains (40% chance), revenue is $2,000. What is the Expected Value of the profit?",
    "options": [
      "A) $1,800",
      "B) $6,800",
      "C) $5,000",
      "D) $1,000"
    ],
    "correctAnswer": 0,
    "explanation": "Profit = Revenue - Cost. Sunny profit = $10,000 - $5,000 = $5,000. Rainy profit = $2,000 - $5,000 = -$3,000. EV = (0.60 * $5,000) + (0.40 * -$3,000) = $3,000 - $1,200 = $1,800."
  },
  {
    "chapter": "Chapter 1: Engineering Decision Making",
    "question": "When facing a scenario where minimizing costs might compromise public safety, what is the engineer's primary obligation?",
    "options": [
      "A) To maximize profit for the employer.",
      "B) To follow the employer's orders without question.",
      "C) To hold paramount the safety, health, and welfare of the public.",
      "D) To quit their job immediately."
    ],
    "correctAnswer": 2,
    "explanation": "According to the Professional Engineers' Code of Ethics, the paramount duty of an engineer is always to protect public safety, even if it contradicts employer directives or profit motives."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "If you deposit $100 today at 5% simple interest for 3 years, and your friend deposits $100 at 5% compound interest for 3 years, who will have more money, and why?",
    "options": [
      "A) You will, because simple interest adds up faster.",
      "B) Your friend will, because they earn interest on the accumulated interest.",
      "C) You will both have the exact same amount.",
      "D) It cannot be determined."
    ],
    "correctAnswer": 1,
    "explanation": "Simple interest only pays on the $100 ($115 total). Compound interest pays on the growing balance ($100 * 1.05^3 = $115.76). Your friend earns more."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "If a cash flow series consists of $100 in year 1, $150 in year 2, $200 in year 3, and $250 in year 4. What is the base annuity (A) and the gradient (G)?",
    "options": [
      "A) A = $100, G = $100",
      "B) A = $100, G = $50",
      "C) A = $50, G = $100",
      "D) A = $150, G = $50"
    ],
    "correctAnswer": 1,
    "explanation": "The base amount (A) is the amount at year 1, which is $100. The arithmetic gradient (G) is the constant amount added each subsequent year, which is $50."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "A machine costs $15,000, has a life of 5 years, and a salvage value of $3,000. If MARR is 10%, what is the proper formula to find its Annual Worth (Cost)?",
    "options": [
      "A) AW = $15,000(A/P, 10%, 5) + $3,000(A/F, 10%, 5)",
      "B) AW = $15,000(A/P, 10%, 5) - $3,000(A/F, 10%, 5)",
      "C) AW = ($15,000 - $3,000)(A/P, 10%, 5)",
      "D) AW = $15,000(P/A, 10%, 5) - $3,000(F/A, 10%, 5)"
    ],
    "correctAnswer": 1,
    "explanation": "Costs are usually treated as positive in cost comparisons. You annualize the initial cost using (A/P), and subtract the annualized benefit of the future salvage value using (A/F)."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "What is the primary danger of using the IRR method to rank mutually exclusive projects?",
    "options": [
      "A) It is illegal under accounting rules.",
      "B) It favors projects with longer lives.",
      "C) It ignores the scale (size) of the investment, potentially leading to lower total wealth.",
      "D) It only works for public projects."
    ],
    "correctAnswer": 2,
    "explanation": "A $10 investment returning $20 (100% IRR) makes $10. A $10,000 investment returning $15,000 (50% IRR) makes $5,000. IRR ignores the scale. That's why Incremental IRR is required."
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "What is the primary purpose of charging interest on a loan according to engineering economics?",
    "options": [
      "A) To cover the administrative costs of the bank.",
      "B) To compensate the lender for giving up the use of their money.",
      "C) To account for the physical depreciation of assets.",
      "D) To guarantee a continuous compounding effect."
    ],
    "correctAnswer": 1,
    "explanation": "Interest is defined as the compensation for giving up the use of money over time. [cite: 823]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "If an annual nominal interest rate is 12% and is compounded quarterly, what is the interest rate applied per sub-period?",
    "options": [
      "A) 12%",
      "B) 4%",
      "C) 3%",
      "D) 1%"
    ],
    "correctAnswer": 2,
    "explanation": "The sub-period interest rate is calculated as the nominal rate divided by the number of sub-periods (12% / 4 quarters = 3%). [cite: 843, 845]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "How many times per year is interest calculated if the compounding period is stated as 'weekly'?",
    "options": [
      "A) 12 times",
      "B) 24 times",
      "C) 52 times",
      "D) 365 times"
    ],
    "correctAnswer": 2,
    "explanation": "Weekly compounding means that the interest is calculated 52 times per year. [cite: 837]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "A bank offers a nominal interest rate of 10% compounded semiannually. What is the effective annual interest rate?",
    "options": [
      "A) 10.00%",
      "B) 10.25%",
      "C) 10.50%",
      "D) 11.00%"
    ],
    "correctAnswer": 1,
    "explanation": "The sub-period rate is 10% / 2 = 5%. The effective rate is (1 + 0.05)^2 - 1 = 1.1025 - 1 = 10.25%. [cite: 847, 850]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "Which formula correctly calculates the effective interest rate (ie) for continuous compounding, given a nominal rate (r)?",
    "options": [
      "A) ie = (1 + r)^m - 1",
      "B) ie = e^r - 1",
      "C) ie = e^(r*m)",
      "D) ie = r / m"
    ],
    "correctAnswer": 1,
    "explanation": "For infinitesimally small periods (continuous compounding), the effective interest rate is calculated using Euler's number as ie = e^r - 1. [cite: 858, 860, 861]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "In a standard cash flow diagram, what does the end of period 3 represent?",
    "options": [
      "A) The exact same point in time as the beginning of period 3.",
      "B) The exact same point in time as the beginning of period 4.",
      "C) A point in time halfway between period 3 and 4.",
      "D) The point where depreciation is maximized."
    ],
    "correctAnswer": 1,
    "explanation": "In cash flow modeling, the end of one period is exactly the same point in time as the beginning of the next period. Therefore, the end of period 3 is the beginning of period 4. [cite: 897, 898]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "Among the following fixed assets, which one is classified as tangible but non-depreciable?",
    "options": [
      "A) Machinery",
      "B) Patents",
      "C) Vehicles",
      "D) Land"
    ],
    "correctAnswer": 3,
    "explanation": "Land is a physical (tangible) asset, but unlike machinery or vehicles, it typically does not lose value over time and is therefore non-depreciable. [cite: 920, 921, 922]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "How is the 'Book Value' of an asset defined in engineering economics?",
    "options": [
      "A) The actual value the asset can be sold for in an open market.",
      "B) The estimated scrap value when broken up for parts.",
      "C) The value calculated from a depreciation model for accounting purposes.",
      "D) The initial purchase price of the asset minus its salvage value."
    ],
    "correctAnswer": 2,
    "explanation": "Book value is specifically the value derived from a depreciation model for accounting purposes, which may differ from the actual market value. [cite: 939, 940, 941]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "An asset was purchased for $20,000. It has an estimated salvage value of $4,000 and a useful life of 8 years. What is the annual depreciation charge using the Straight-Line Method?",
    "options": [
      "A) $2,000",
      "B) $2,500",
      "C) $4,000",
      "D) $16,000"
    ],
    "correctAnswer": 0,
    "explanation": "Straight-line depreciation is calculated as (Purchase Price - Salvage Value) / Useful Life. Thus, ($20,000 - $4,000) / 8 = $2,000 per year. [cite: 984, 986, 987]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "Using the Straight-Line Method, what is the Book Value of an asset at the end of year 3 if its purchase price was $15,000, expected salvage value is $3,000, and useful life is 6 years?",
    "options": [
      "A) $2,000",
      "B) $6,000",
      "C) $9,000",
      "D) $12,000"
    ],
    "correctAnswer": 2,
    "explanation": "Annual depreciation = ($15,000 - $3,000) / 6 = $2,000. The book value after 3 years is $15,000 - 3*($2,000) = $9,000. [cite: 986, 987]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "Which of the following statements best describes the Declining-Balance Method (DBM) of depreciation?",
    "options": [
      "A) The book value diminishes by an equal amount each year.",
      "B) The depreciation charge is calculated as a constant fraction of the initial purchase price.",
      "C) The depreciation charge is a constant proportion of the asset's closing book value from the previous period.",
      "D) It assumes the asset loses no value until the final year of its life."
    ],
    "correctAnswer": 2,
    "explanation": "DBM models the loss in value as a constant fraction (depreciation rate) of the asset's current book value from the preceding period. [cite: 991, 993]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "A computer system is purchased for $5,000. If the Declining-Balance depreciation rate is 20%, what is the book value at the end of Year 2?",
    "options": [
      "A) $4,000",
      "B) $3,200",
      "C) $3,000",
      "D) $2,500"
    ],
    "correctAnswer": 1,
    "explanation": "The book value after n periods is BV(n) = P(1 - d)^n. For year 2: $5,000 * (1 - 0.20)^2 = $5,000 * 0.64 = $3,200. [cite: 1047, 1049]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "An industrial 3D printer costs $10,000 and depreciates using the Declining-Balance Method at a rate of 30%. What is the exact depreciation charge during Year 2?",
    "options": [
      "A) $3,000",
      "B) $2,100",
      "C) $4,900",
      "D) $7,000"
    ],
    "correctAnswer": 1,
    "explanation": "Year 1 depreciation is $10,000 * 30% = $3,000, leaving a book value of $7,000. Year 2 depreciation is 30% of the previous year's book value: $7,000 * 30% = $2,100. [cite: 1044, 1045]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "A company wants to use the Declining-Balance Method. An asset costs $8,000 and has an estimated salvage value of $1,000 after a useful life of 3 years. What is the required depreciation rate (d)?",
    "options": [
      "A) 25%",
      "B) 33.3%",
      "C) 50%",
      "D) 87.5%"
    ],
    "correctAnswer": 2,
    "explanation": "The rate is calculated as d = 1 - (S/P)^(1/n). Here, d = 1 - (1000/8000)^(1/3) = 1 - (0.125)^(1/3) = 1 - 0.5 = 0.50, or 50%. [cite: 1050, 1051, 1052, 1053, 1054]"
  },
  {
    "chapter": "Chapter 2: Time Value of Money",
    "question": "In contrast to Book Value, what does 'Scrap Value' refer to?",
    "options": [
      "A) The value of the asset calculated for tax purposes.",
      "B) The value of the asset when it is sold as a functioning unit at the end of its useful life.",
      "C) The actual or estimated value of the asset when broken up for the material value of its parts at the end of its physical life.",
      "D) The initial purchase price minus total accumulated depreciation."
    ],
    "correctAnswer": 2,
    "explanation": "Scrap value refers specifically to the value obtained at the end of an asset's physical life when it is broken down and sold for its material parts, unlike salvage value which usually implies it is sold whole. [cite: 945, 946, 947, 948]"
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "Which of the following is NOT one of the four common discrete cash flow patterns discussed in the course?",
    "options": [
      "A) Single disbursement or receipt",
      "B) Set of equal disbursements or receipts (annuity)",
      "C) Randomly fluctuating market-based receipts",
      "D) Set of receipts that change by a constant proportion (geometric gradient)"
    ],
    "correctAnswer": 2,
    "explanation": "The four standard patterns are: single disbursement, annuity (uniform series), arithmetic gradient (constant amount), and geometric gradient (constant proportion)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "The notation (F/P, i, N) is read from left to right as:",
    "options": [
      "A) What is P, given F, i, and N?",
      "B) What is F, given P, i, and N?",
      "C) What is the interest rate i, given F, P, and N?",
      "D) Find the number of periods N, given F, P, and i."
    ],
    "correctAnswer": 1,
    "explanation": "The first letter (numerator-like) represents what you are looking for, and the second letter (denominator-like) represents the variable you are given."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "Which compound interest factor should you multiply by a future amount F to find its equivalent present amount P?",
    "options": [
      "A) $(1+i)^N$",
      "B) $\\frac{(1+i)^N - 1}{i}$",
      "C) $(1+i)^{-N}$",
      "D) $\\frac{i}{(1+i)^N - 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "The Present Worth Factor (P/F, i, N) is $(1+i)^{-N}$, which discounts a future value back to the present."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "The 'Sinking Fund Factor' (A/F, i, N) is primarily used by businesses to determine:",
    "options": [
      "A) The total profit earned from a one-time investment.",
      "B) The uniform annual payment required to accumulate a specific future sum.",
      "C) The present value of a series of future receipts.",
      "D) The salvage value of a machine at the end of its life."
    ],
    "correctAnswer": 1,
    "explanation": "A Sinking Fund Factor finds the uniform annual payment (A) needed at the end of each period to meet a future financial obligation (F)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "Which factor is the mathematical inverse of the Sinking Fund Factor (A/F, i, N)?",
    "options": [
      "A) Capital Recovery Factor (A/P, i, N)",
      "B) Series Present Worth Factor (P/A, i, N)",
      "C) Uniform Series Compound Amount Factor (F/A, i, N)",
      "D) Compound Amount Factor (F/P, i, N)"
    ],
    "correctAnswer": 2,
    "explanation": "The Uniform Series Compound Amount Factor (F/A) is the inverse of the Sinking Fund Factor (A/F)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "The Capital Recovery Factor (A/P, i, N) is most commonly applied in which of the following real-world scenarios?",
    "options": [
      "A) Calculating the future value of a single savings deposit.",
      "B) Determining the equal periodic installments needed to repay a loan principal.",
      "C) Converting a future salvage value to its present equivalent.",
      "D) Adjusting cash flows for inflation."
    ],
    "correctAnswer": 1,
    "explanation": "The (A/P) factor is used for loan payments, converting a present principal amount (P) into equal periodic installments (A) over N periods."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "In an arithmetic gradient series, at which point in time does the first non-zero cash flow (G) occur?",
    "options": [
      "A) At the end of the first period (t = 1).",
      "B) At the end of the second period (t = 2).",
      "C) At the beginning of the project (t = 0).",
      "D) At the end of the final period (t = N)."
    ],
    "correctAnswer": 1,
    "explanation": "By convention, an arithmetic gradient series starts at zero at the end of the first period and has its first non-zero increment G at the end of the second period."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "If a cash flow involves a base annuity A' and an arithmetic gradient G, what is the formula for the total equivalent uniform annuity ($A_{tot}$)?",
    "options": [
      "A) $A_{tot} = A' + G$",
      "B) $A_{tot} = A' \\times (A/G, i, N)$",
      "C) $A_{tot} = A' + G(A/G, i, N)$",
      "D) $A_{tot} = G \\times (P/G, i, N)$"
    ],
    "correctAnswer": 2,
    "explanation": "The total annuity is found by adding the base annuity (A') to the annuity equivalent of the gradient ($G \\times$ the A/G factor)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "A Geometric Gradient series is defined as a series of cash flows that:",
    "options": [
      "A) Remain constant every year.",
      "B) Increase or decrease by a constant percentage each period.",
      "C) Change by a constant dollar amount each period.",
      "D) Stop after the first five years."
    ],
    "correctAnswer": 1,
    "explanation": "Geometric gradients represent growth or decay at a constant rate (g), such as 5% per year."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "The 'growth-adjusted interest rate' ($i^o$) used in geometric gradient calculations is defined as:",
    "options": [
      "A) $i^o = i + g$",
      "B) $i^o = \\frac{1+i}{1+g} - 1$",
      "C) $i^o = i \\times g$",
      "D) $i^o = \\frac{g}{i} - 1$"
    ],
    "correctAnswer": 1,
    "explanation": "The growth-adjusted rate $i^o$ allows the use of standard series present worth tables by adjusting the interest rate for the growth rate g."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "In a geometric gradient where the growth rate g is exactly equal to the interest rate i (g = i), what is the formula for the Present Worth (P)?",
    "options": [
      "A) P = 0",
      "B) P = A / i",
      "C) $P = N(\\frac{A}{1+g})$",
      "D) $P = \\frac{A}{i-g}$"
    ],
    "correctAnswer": 2,
    "explanation": "When g = i, the growth-adjusted interest rate becomes zero, and the present worth is simply the sum of all terms: $N \\times A / (1+g)$."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "Under what condition is it MANDATORY to compute the geometric gradient conversion factor directly from the formula rather than using tables?",
    "options": [
      "A) When $i > g > 0$",
      "B) When $g < 0$",
      "C) When $g > i > 0$ (negative growth-adjusted rate)",
      "D) When g = 0"
    ],
    "correctAnswer": 2,
    "explanation": "If g > i, the growth-adjusted interest rate $i^o$ is negative, which is not typically found in standard interest tables."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "What term is used to describe the present worth of a long-lived project where cash flows are assumed to continue indefinitely?",
    "options": [
      "A) Salvage Value",
      "B) Sunk Cost",
      "C) Capitalized Value",
      "D) Book Value"
    ],
    "correctAnswer": 2,
    "explanation": "Capitalized value is the present worth of an infinite series of cash flows (a perpetuity)."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "What is the mathematical formula for the Capitalized Value (P) of an infinite series of equal annual payments A, given an interest rate i?",
    "options": [
      "A) P = A",
      "B) P = A / i",
      "C) P = A(1+i)",
      "D) P = A / (1+i)"
    ],
    "correctAnswer": 1,
    "explanation": "For an infinitely long series, the present worth formula simplifies to $P = A \\div i$."
  },
  {
    "chapter": "Chapter 3: Cash Flow Analysis",
    "question": "In the context of the course, what is 'Linear Interpolation' (Appendix 3B) used for?",
    "options": [
      "A) To find the exact value of an interest factor when the given interest rate is between two table values.",
      "B) To calculate the derivative of a cash flow function.",
      "C) To determine the half-year CCA rule.",
      "D) To predict future inflation rates."
    ],
    "correctAnswer": 0,
    "explanation": "Interpolation is used to estimate interest factors for rates (like 7.2%) that are not explicitly listed in standard tables."
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What is the definition of the Minimum Acceptable Rate of Return (MARR)?",
    "options": [
      "A) The maximum interest rate a bank can charge for a loan.",
      "B) The interest rate that must be earned for a project to be approved by a company.",
      "C) The average inflation rate over the project's life.",
      "D) The rate at which the present worth of a project becomes zero."
    ],
    "correctAnswer": 1,
    "explanation": "MARR is the lower limit set by a company for investment acceptability. A project must earn at least this rate to be considered desirable. [cite: 3449, 3452]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "If choosing one project means all other alternatives must be excluded, these projects are classified as:",
    "options": [
      "A) Independent",
      "B) Mutually Exclusive",
      "C) Related but not mutually exclusive",
      "D) Contingent"
    ],
    "correctAnswer": 1,
    "explanation": "Mutually exclusive projects are those where choosing one alternative automatically rejects all others in the set. [cite: 3429]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "If two projects are 'Independent', how should they be evaluated?",
    "options": [
      "A) Only the project with the highest PW should be chosen.",
      "B) They should be ranked, and the top one selected.",
      "C) Each project should be evaluated separately against the MARR.",
      "D) They must be combined into a single project."
    ],
    "correctAnswer": 2,
    "explanation": "For independent projects, the costs and benefits of one do not depend on the other, so they are evaluated individually. [cite: 3428, 3443]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "According to the Present Worth (PW) method, an independent project is considered 'acceptable' if:",
    "options": [
      "A) PW < 0",
      "B) PW = MARR",
      "C) PW > 0",
      "D) PW is less than the first cost"
    ],
    "correctAnswer": 2,
    "explanation": "A project is acceptable if its Present Worth calculated at the MARR is greater than zero. [cite: 3470]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What does it mean if the Present Worth (PW) of an independent project is exactly zero at a specific MARR?",
    "options": [
      "A) The project is losing money.",
      "B) The project is marginally acceptable, earning exactly the MARR.",
      "C) The project should be rejected immediately.",
      "D) The project has no initial cost."
    ],
    "correctAnswer": 1,
    "explanation": "If PW = 0, the future receipts exactly offset the initial investment at that interest rate, meaning the project earns exactly the MARR. [cite: 3468, 3473]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "When using the PW method to choose the best among a set of mutually exclusive projects with equal service lives, which one is preferred?",
    "options": [
      "A) The project with the lowest first cost.",
      "B) The project with the shortest payback period.",
      "C) The project with the greatest Present Worth.",
      "D) The project with the highest annual savings."
    ],
    "correctAnswer": 2,
    "explanation": "For mutually exclusive projects with the same life, the one with the largest PW is preferred because it creates the most value (profit). [cite: 3531, 3532]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "Which comparison method transforms all disbursements and receipts into a uniform series (annuity) at the MARR?",
    "options": [
      "A) Present Worth (PW) method",
      "B) Future Worth (FW) method",
      "C) Annual Worth (AW) method",
      "D) Payback Period method"
    ],
    "correctAnswer": 2,
    "explanation": "The Annual Worth method converts all cash flows into an equivalent uniform annual series. [cite: 3421, 3553]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "When comparing mutually exclusive projects with unequal service lives using the PW method, what is a common approach to find a comparable basis?",
    "options": [
      "A) Compare them over their individual lives regardless of the difference.",
      "B) Use the Repeated Lives Approach over the Least Common Multiple (LCM) of their lives.",
      "C) Ignore the salvage value of the longer-lived project.",
      "D) Average the first costs of both projects."
    ],
    "correctAnswer": 1,
    "explanation": "To compare projects with unequal lives via PW, they must be evaluated over the same time period, often using the LCM of their lives. [cite: 3578, 3579]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "Alternative 1 has a 10-year life and Alternative 2 has a 15-year life. What is the study period required for the Repeated Lives Approach?",
    "options": [
      "A) 10 years",
      "B) 15 years",
      "C) 25 years",
      "D) 30 years"
    ],
    "correctAnswer": 3,
    "explanation": "The Least Common Multiple (LCM) of 10 and 15 is 30. Therefore, Alternative 1 repeats twice and Alternative 2 repeats once to reach 30 years. [cite: 3602, 3614]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "The 'Study Period Approach' for unequal lives is useful when:",
    "options": [
      "A) The service lives are identical.",
      "B) There is high uncertainty about costs and benefits far into the future.",
      "C) The projects are independent.",
      "D) The MARR is zero."
    ],
    "correctAnswer": 1,
    "explanation": "The study period method adopts a fixed time frame (e.g., 10 years) for comparison, which is helpful when future costs are uncertain. [cite: 3580, 3647]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "How is the standard 'Payback Period' calculated when annual savings are constant?",
    "options": [
      "A) Annual Savings / First Costs",
      "B) First Costs / Annual Savings",
      "C) (First Costs + Salvage Value) / 2",
      "D) First Costs * MARR"
    ],
    "correctAnswer": 1,
    "explanation": "The payback period is the ratio of the initial investment to the constant annual savings, assuming an interest rate of zero. [cite: 3662, 3665]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "What is the primary assumption made in the standard Payback Period method regarding interest?",
    "options": [
      "A) Interest is equal to the MARR.",
      "B) Interest is compounded continuously.",
      "C) Interest is assumed to be zero ($i=0$).",
      "D) Interest rate is determined by the payback time."
    ],
    "correctAnswer": 2,
    "explanation": "The standard payback period is a simple approximation that ignores the time value of money (assuming i=0). [cite: 3662, 3663]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "In a 'Discounted Payback Period' calculation, the number of years is found by:",
    "options": [
      "A) Using the same formula as the standard payback period.",
      "B) Subtracting the present worth of each year's savings from the first cost until it reaches zero.",
      "C) Doubling the standard payback period.",
      "D) Dividing the standard payback period by (1+i)."
    ],
    "correctAnswer": 1,
    "explanation": "Unlike the standard method, the discounted payback period accounts for interest by using the present worth of savings. [cite: 3701, 3702]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "If there are $n$ related projects that are NOT mutually exclusive, they can be organized into how many mutually exclusive sets (including the do-nothing option)?",
    "options": [
      "A) $n$",
      "B) $n^2$",
      "C) $2^n$",
      "D) $n!$"
    ],
    "correctAnswer": 2,
    "explanation": "To evaluate related projects, you can combine them into $2^n$ exhaustive mutually exclusive sets. [cite: 3435]"
  },
  {
    "chapter": "Chapter 4: Comparison Methods 1",
    "question": "Present Worth (PW) can be viewed as a measure of:",
    "options": [
      "A) Total revenue",
      "B) Efficiency",
      "C) Profit created by a project above the MARR",
      "D) Risk"
    ],
    "correctAnswer": 2,
    "explanation": "PW represents the value created or 'profit' after recovering the initial cost at the required rate of return (MARR). [cite: 3518, 3520]"
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "The Internal Rate of Return (IRR) is best defined as the interest rate at which:",
    "options": [
      "A) The future value of all receipts is maximized.",
      "B) The project's net profit reaches its absolute peak.",
      "C) The present worth of disbursements exactly equals the present worth of receipts.",
      "D) The project is guaranteed to be risk-free."
    ],
    "correctAnswer": 2,
    "explanation": "IRR is the discount rate ($i^*$) such that the present worth (PW), annual worth (AW), or future worth (FW) of all cash flows equals zero, meaning disbursements and receipts are equivalent[cite: 4105, 4109]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "For an independent project, what is the decision rule for acceptance based on the IRR method?",
    "options": [
      "A) Accept if IRR is less than the MARR.",
      "B) Accept if IRR is equal to or exceeds the MARR.",
      "C) Accept only if IRR is exactly 100%.",
      "D) Accept if the IRR is positive, regardless of the MARR."
    ],
    "correctAnswer": 1,
    "explanation": "If the calculated IRR equals or exceeds the Minimum Acceptable Rate of Return (MARR), the project is considered economically attractive and should be accepted[cite: 4260]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "In the context of IRR, what does the term 'Internal' signify?",
    "options": [
      "A) The rate of return is calculated only by internal company accountants.",
      "B) The rate of return depends only on the cash flows generated by the investment itself.",
      "C) The return is only valid for domestic (internal) projects.",
      "D) The interest rate is fixed by the company's internal board of directors."
    ],
    "correctAnswer": 1,
    "explanation": "'Internal' means that the calculated rate of return depends solely on the specific cash flows resulting from the project or investment[cite: 4099]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "Why is it incorrect to simply rank mutually exclusive projects by their individual IRRs and choose the one with the highest rate?",
    "options": [
      "A) Because higher IRRs always indicate smaller projects with less total profit.",
      "B) Because it can overlook projects that meet the MARR but do not have the absolute maximum IRR.",
      "C) Because the IRR method cannot be used for mutually exclusive projects.",
      "D) Because IRRs are only valid for public sector projects."
    ],
    "correctAnswer": 1,
    "explanation": "Ranking by highest IRR is incorrect because it ignores the scale of the investment and may fail to identify the project that maximizes total wealth, even if its individual IRR is slightly lower than a smaller project's[cite: 4311, 4312]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "What is the mandatory first step when performing an Incremental IRR Analysis for a set of mutually exclusive projects?",
    "options": [
      "A) Calculate the individual IRR for every project.",
      "B) Rank the projects in increasing order of their first cost (initial investment).",
      "C) Select the project with the longest service life.",
      "D) Average all the MARR values of the projects."
    ],
    "correctAnswer": 1,
    "explanation": "The incremental analysis procedure begins by ranking all mutually exclusive alternatives from 1 to $n$ in increasing order of their first cost[cite: 4268]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "During incremental analysis, if the IRR on the incremental investment ($IRR_{\\Delta}$) between a 'current best' and a 'challenger' is GREATER than the MARR, what should you do?",
    "options": [
      "A) Keep the 'current best' and discard the challenger.",
      "B) The challenger becomes the new 'current best'.",
      "C) Discard both projects and look for a third option.",
      "D) Accept the project with the lower initial cost."
    ],
    "correctAnswer": 1,
    "explanation": "If the incremental investment yields a return at least as high as the MARR, the extra cost of the challenger is justified, and it becomes the new preferred alternative[cite: 4272, 4277]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "A project requires an initial investment of $100 and returns $110 exactly one year later. What is its IRR?",
    "options": [
      "A) 5%",
      "B) 10%",
      "C) 110%",
      "D) 0%"
    ],
    "correctAnswer": 1,
    "explanation": "Setting PW to zero: $100 = 110 / (1 + i^*)$. Solving for $i^*$ gives $1.10 - 1 = 0.10$ or 10%[cite: 4112, 4117]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "What is a 'Simple Investment' as defined in engineering economic analysis?",
    "options": [
      "A) A project that requires no initial investment.",
      "B) A project characterized by one or more periods of cash outflows followed by one or more periods of cash inflows.",
      "C) A project that only lasts for one compounding period.",
      "D) An investment where the interest rate never changes."
    ],
    "correctAnswer": 1,
    "explanation": "A simple investment consists of an initial sequence of net outflows (costs) followed by a sequence of net inflows (revenues), which typically results in a unique positive IRR[cite: 4427]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "Under what circumstance might a project have Multiple Internal Rates of Return?",
    "options": [
      "A) When the project is a simple investment.",
      "B) When the cash flow sequence is not a simple investment (e.g., costs occur in the middle or end).",
      "C) Only if the MARR is negative.",
      "D) When the project life exceeds 50 years."
    ],
    "correctAnswer": 1,
    "explanation": "If a project is not a simple investment—meaning signs of net cash flows change more than once—there may be more than one discount rate that makes the PW equal zero[cite: 4322, 4428]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "The External Rate of Return (ERR) method is primarily used to:",
    "options": [
      "A) Calculate returns for projects located in foreign countries.",
      "B) Resolve the problem of multiple IRRs by assuming an explicit reinvestment rate.",
      "C) Avoid paying corporate taxes on investment returns.",
      "D) Speed up the calculation of present worth."
    ],
    "correctAnswer": 1,
    "explanation": "ERR is used to provide a unique rate of return solution when multiple IRRs exist, by assuming that 'excess' cash generated is invested elsewhere at an external rate, usually the MARR[cite: 4358, 4360]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "In the calculation of an approximate ERR, which rate is typically used to take all net receipts forward to the end of the project?",
    "options": [
      "A) The unknown ERR.",
      "B) The inflation rate.",
      "C) The MARR (Minimum Acceptable Rate of Return).",
      "D) Zero percent interest."
    ],
    "correctAnswer": 2,
    "explanation": "To find an approximate ERR, all net receipts are moved forward to the time of the last cash flow using the MARR[cite: 4403, 4412]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "When properly used, which methods will always yield the same economic decision for a set of projects?",
    "options": [
      "A) Only PW and AW methods.",
      "B) Only IRR and Payback Period methods.",
      "C) IRR, Present Worth (PW), and Annual Worth (AW) methods.",
      "D) Only ERR and Future Worth methods."
    ],
    "correctAnswer": 2,
    "explanation": "If applied correctly (including incremental analysis for IRR), the IRR, PW, and AW methods are mathematically equivalent and will result in the same decision[cite: 4432, 4455]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "What is one major advantage of using the IRR method over the Present Worth method?",
    "options": [
      "A) It is much easier to calculate manually.",
      "B) It never results in multiple solutions.",
      "C) It facilitates comparisons of projects of different sizes by providing a percentage return.",
      "D) It ignores the time value of money, making it simpler for managers."
    ],
    "correctAnswer": 2,
    "explanation": "A key advantage of IRR is that it provides a rate of return measure that is often more understandable for decision-makers, especially when comparing projects of unequal initial investment sizes[cite: 4095, 4455]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "If an independent project has a unique IRR that is exactly equal to the MARR, what is the Present Worth (PW) of the project at that MARR?",
    "options": [
      "A) PW > 0",
      "B) PW < 0",
      "C) PW = 0",
      "D) It cannot be determined."
    ],
    "correctAnswer": 2,
    "explanation": "By definition, the IRR is the rate that makes the Present Worth equal to zero. If IRR = MARR, then evaluating the PW at the MARR will yield exactly zero[cite: 4106, 4261]."
  },
  {
    "chapter": "Chapter 5: Comparison Methods 2",
    "question": "To perform a valid rate of return comparison on mutually exclusive projects, what must be true about their service lives?",
    "options": [
      "A) They must have the same service life (equal lives).",
      "B) One project must last twice as long as the other.",
      "C) They must have infinite lives.",
      "D) Service lives do not matter for IRR comparisons."
    ],
    "correctAnswer": 0,
    "explanation": "When comparing mutually exclusive projects using rate of return, they must be evaluated over equal lives. If they are unequal, common study period or replacement assumptions must be used[cite: 4262, 4263]."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "In a replacement analysis, what components are included in the 'Capital Costs' of an asset?",
    "options": [
      "A) Only the initial purchase price (P).",
      "B) The purchase price (P) plus installation costs (I).",
      "C) The purchase price (P) minus annual maintenance costs.",
      "D) Only the salvage value (S)."
    ],
    "correctAnswer": 1,
    "explanation": "Capital costs are defined as the sum of purchase costs (P) and installation costs (I)."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "Which of the following is primarily responsible for the rising Operating and Maintenance (O/M) costs as an asset ages?",
    "options": [
      "A) Technological obsolescence",
      "B) Physical deterioration",
      "C) Increasing salvage value",
      "D) Sunk costs"
    ],
    "correctAnswer": 1,
    "explanation": "Physical deterioration, such as frequent jams or visible ink streaks in a printer, leads to higher O/M costs over time."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "What is 'Obsolescence' in the context of asset replacement?",
    "options": [
      "A) The asset physically breaking down beyond repair.",
      "B) The availability of a new asset that can perform the job better or more cheaply.",
      "C) The loss of value due to inflation.",
      "D) Reaching the end of the asset's tax depreciation period."
    ],
    "correctAnswer": 1,
    "explanation": "Obsolescence refers to the availability of improved assets (challengers) that make the current asset less desirable, even if it still functions."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "How should a cost incurred in the past that cannot be recovered (a sunk cost) be treated in a replacement study?",
    "options": [
      "A) It should be added to the cost of the challenger.",
      "B) It is irrelevant and should be ignored.",
      "C) It should be subtracted from the salvage value of the defender.",
      "D) It determines the MARR for the project."
    ],
    "correctAnswer": 1,
    "explanation": "Sunk costs are irrelevant to the decision-making process because they cannot be changed by future actions."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "Why are sunk costs ignored in engineering economic decisions?",
    "options": [
      "A) They are usually too small to matter.",
      "B) They do not impact future cash flows.",
      "C) They are considered part of the salvage value.",
      "D) They are tax-deductible only in the first year."
    ],
    "correctAnswer": 1,
    "explanation": "Since sunk costs have already occurred and cannot be recovered, they have no impact on the comparative future cash flows of the alternatives."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "The 'Economic Life' of an asset is the number of years that:",
    "options": [
      "A) The asset remains physically functional.",
      "B) Minimizes the total Equivalent Annual Cost (EAC).",
      "C) The asset's salvage value is greater than its book value.",
      "D) Is dictated by the manufacturer's warranty."
    ],
    "correctAnswer": 1,
    "explanation": "Economic life is the study period that results in the lowest average annual cost of owning and operating the asset."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "Which two components make up the total Equivalent Annual Cost (EAC) of an asset?",
    "options": [
      "A) Purchase price and installation costs.",
      "B) EAC of Capital Costs and EAC of Operating/Maintenance (O/M) Costs.",
      "C) Salvage value and Book value.",
      "D) Sunk costs and Marginal costs."
    ],
    "correctAnswer": 1,
    "explanation": "Total EAC is the sum of the annualized capital costs and the annualized operating/maintenance costs."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "As the service life (N) of an asset increases, what is the typical trend for the EAC(Capital) component?",
    "options": [
      "A) It increases due to higher interest charges.",
      "B) It decreases as the initial cost is spread over more years.",
      "C) It remains constant regardless of N.",
      "D) It decreases initially and then increases sharply."
    ],
    "correctAnswer": 1,
    "explanation": "EAC(Capital) typically decreases as the asset is kept longer because the large initial investment is amortized over a longer period."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "In a replacement study, the current existing asset is known as the:",
    "options": [
      "A) Challenger",
      "B) Defender",
      "C) Sunk asset",
      "D) Incumbent"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Defender' is the existing asset that is being evaluated for potential replacement."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "The potential new asset being considered to replace the current one is called the:",
    "options": [
      "A) Defender",
      "B) Challenger",
      "C) Replacement",
      "D) Successor"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Challenger' is the best available alternative asset that could replace the defender."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "Using the 'Outsider's Viewpoint,' how is the initial investment for the Defender determined?",
    "options": [
      "A) By its original purchase price years ago.",
      "B) By its current market salvage value.",
      "C) By its remaining book value for tax purposes.",
      "D) It is considered to be zero."
    ],
    "correctAnswer": 1,
    "explanation": "The outsider's viewpoint treats the defender's current salvage value as its 'purchase price,' representing the opportunity cost of not selling it."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "What is the term for the value of an asset when it is broken up for the material value of its parts at the end of its physical life?",
    "options": [
      "A) Salvage Value",
      "B) Book Value",
      "C) Scrap Value",
      "D) Market Value"
    ],
    "correctAnswer": 2,
    "explanation": "Scrap value specifically refers to the material value of an asset's parts at the end of its physical life."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "Which of the following is a reason why determining salvage value can be challenging and unreliable?",
    "options": [
      "A) Constant market demand",
      "B) Technological obsolescence",
      "C) Fixed physical condition",
      "D) High accuracy in future cost estimation"
    ],
    "correctAnswer": 1,
    "explanation": "Technological changes and market fluctuations make it difficult to accurately predict an asset's future resale value."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "When comparing a defender and a challenger over a specified 'study period', if an asset's life is longer than the study period, we must:",
    "options": [
      "A) Ignore all costs beyond the study period.",
      "B) Include the estimated salvage value of the asset at the end of the study period.",
      "C) Assume the asset has zero value at the end of the period.",
      "D) Calculate the sunk costs for the remaining years."
    ],
    "correctAnswer": 1,
    "explanation": "A study period approach requires estimating the salvage value at the end of that specific period to account for the remaining utility of the asset."
  },
  {
    "chapter": "Chapter 7: Replacement Decisions",
    "question": "According to the course material, Total Costs (over a period) for an asset are calculated as:",
    "options": [
      "A) Purchase Price (P) + Installation (I) + O/M Costs",
      "B) Purchase Price (P) - Salvage Value (S)",
      "C) Installation (I) + Interest charges",
      "D) O/M Costs + Tax savings"
    ],
    "correctAnswer": 0,
    "explanation": "The total cost consists of the capital investment (P+I) and the ongoing operating and maintenance costs."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Which of the following is a key reason why businesses must account for tax impacts in engineering projects?",
    "options": [
      "A) Taxes increase the gross profit of a project.",
      "B) Taxes directly affect a business's cash flow.",
      "C) Taxes eliminate the need for calculating depreciation.",
      "D) Taxes are only applied to public sector projects."
    ],
    "correctAnswer": 1,
    "explanation": "Taxes are a significant cash outflow that directly impacts the net profitability and cash flow of any business project[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "A tax system is described as 'progressive' when:",
    "options": [
      "A) The tax rate remains constant regardless of income level.",
      "B) The tax rate increases as the amount of taxable income increases.",
      "C) Only corporations are required to pay taxes.",
      "D) Tax savings are reinvested into government bonds."
    ],
    "correctAnswer": 1,
    "explanation": "In a progressive tax system, such as the Canadian personal income tax, higher income brackets are subject to higher percentage tax rates[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "If a corporation has a before-tax MARR of 14% and the corporate tax rate is 47%, what is the approximate after-tax MARR?",
    "options": [
      "A) 6.58%",
      "B) 7.42%",
      "C) 9.32%",
      "D) 14.00%"
    ],
    "correctAnswer": 1,
    "explanation": "The after-tax MARR is calculated as: Before-tax MARR * (1 - tax rate). So, 0.14 * (1 - 0.47) = 0.0742 or 7.42%[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "What does the acronym CCA stand for in the context of Canadian taxation?",
    "options": [
      "A) Corporate Cash Allocation",
      "B) Capital Cost Allowance",
      "C) Cash Combined Analysis",
      "D) Capital Consumption Adjustment"
    ],
    "correctAnswer": 1,
    "explanation": "CCA stands for Capital Cost Allowance, which is the system used for tax depreciation of assets in Canada[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Under the CCA system, what is the 'Half-Year Rule'?",
    "options": [
      "A) Assets must be sold within half a year to avoid taxes.",
      "B) Tax is only paid for the first six months of the year.",
      "C) Only 50% of the net acquisitions in a class can be used to claim CCA in the first year.",
      "D) Depreciation is doubled during the second half of the asset's life."
    ],
    "correctAnswer": 2,
    "explanation": "The half-year rule is a tax regulation that limits the CCA claim in the year an asset is acquired to half of the normal rate[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "A firm buys equipment for $100,000 in a class with a 40% CCA rate. Using the half-year rule, what is the CCA claim for the first year?",
    "options": [
      "A) $40,000",
      "B) $20,000",
      "C) $10,000",
      "D) $50,000"
    ],
    "correctAnswer": 1,
    "explanation": "First-year CCA = (Purchase Cost * 0.5) * CCA rate. So, ($100,000 * 0.5) * 0.40 = $20,000[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "The 'Undepreciated Capital Cost' (UCC) represents:",
    "options": [
      "A) The total market value of all company assets.",
      "B) The amount of capital investment that has not yet been claimed as a tax deduction.",
      "C) The sunk costs associated with a failed project.",
      "D) The total tax paid to the government since the company started."
    ],
    "correctAnswer": 1,
    "explanation": "UCC is the remaining balance of an asset class after previous CCA claims have been subtracted from the original cost[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Which factor is used to find the present worth of all future tax savings generated by the CCA on a capital investment?",
    "options": [
      "A) Capital Salvage Factor (CSF)",
      "B) Capital Tax Factor (CTF)",
      "C) Sinking Fund Factor",
      "D) Inflation Adjustment Factor"
    ],
    "correctAnswer": 1,
    "explanation": "The CTF (Capital Tax Factor) is a formula used to calculate the present value of the tax shield provided by the CCA system[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "When an asset is sold (salvaged), how is the tax impact on the salvage value typically accounted for?",
    "options": [
      "A) It is ignored because it's a one-time event.",
      "B) By using the Capital Salvage Factor (CSF) to find the present worth of lost future tax savings.",
      "C) By adding the full salvage value to the current year's operating costs.",
      "D) By paying a flat 100% tax on the entire resale amount."
    ],
    "correctAnswer": 1,
    "explanation": "The CSF accounts for the present worth of the 'tax shield' that is lost when an asset is sold and its value is removed from the CCA pool[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Which of the following is NOT a component of a 'Complete Tax Calculation' for an engineering proposal?",
    "options": [
      "A) First cost adjusted by the CTF",
      "B) Net annual savings multiplied by (1 - t)",
      "C) Salvage value adjusted by the CSF",
      "D) Total revenue multiplied by the inflation rate"
    ],
    "correctAnswer": 3,
    "explanation": "A complete after-tax calculation involves the CTF, CSF, and net annual savings after tax, but does not inherently require multiplying total revenue by inflation unless specifically modeling inflation[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "What happens to the UCC balance in a specific asset class when a new asset is purchased?",
    "options": [
      "A) The UCC balance decreases.",
      "B) The UCC balance remains the same.",
      "C) The purchase cost is added to the UCC balance of that class.",
      "D) The UCC balance is reset to zero."
    ],
    "correctAnswer": 2,
    "explanation": "Purchasing a new asset increases the pool of capital available for future depreciation claims in that specific CCA class[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "If the corporate tax rate is 50% and a firm claims a CCA of $10,000, what is the actual tax saving for that year?",
    "options": [
      "A) $10,000",
      "B) $5,000",
      "C) $2,500",
      "D) $0"
    ],
    "correctAnswer": 1,
    "explanation": "Tax saving = CCA claim * tax rate. So, $10,000 * 0.50 = $5,000[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "Which type of asset usually has the fastest (highest) CCA depreciation rate?",
    "options": [
      "A) Land",
      "B) Buildings/Warehouses",
      "C) Short-lived technology like rental cars or computers",
      "D) Long-term infrastructure like bridges"
    ],
    "correctAnswer": 2,
    "explanation": "Assets that lose value quickly, like technology or rental vehicles, are assigned higher CCA rates to reflect their short useful lives[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "The primary difference between Personal Income Tax and Corporate Income Tax in Canada is:",
    "options": [
      "A) Corporations do not pay taxes.",
      "B) Personal tax is progressive while corporate tax usually has fixed rates for specific business sizes.",
      "C) Personal tax only applies to investments, not labor.",
      "D) Corporate tax is always 0% for engineering firms."
    ],
    "correctAnswer": 1,
    "explanation": "Personal income tax uses progressive brackets, whereas corporate rates often vary based on the type of business (e.g., small business vs. general) but are generally more consistent within those categories[cite: 14]."
  },
  {
    "chapter": "Chapter 8: Taxes",
    "question": "A tax deduction (like CCA) is often called a 'Tax Shield' because:",
    "options": [
      "A) It physically protects equipment from damage.",
      "B) It 'shields' a portion of the company's income from being taxed.",
      "C) It prevents the government from auditing the company.",
      "D) It is only used during economic recessions."
    ],
    "correctAnswer": 1,
    "explanation": "By reducing the taxable income, depreciation and other deductions effectively lower the total tax bill, 'shielding' income from taxation[cite: 14]."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Which of the following best defines 'Inflation' according to the course material?",
    "options": [
      "A) A decrease in the general level of prices of goods and services.",
      "B) An increase in the average price of goods and services over time.",
      "C) A slowdown in the rate at which prices are rising.",
      "D) The fixed value of a currency in terms of gold."
    ],
    "correctAnswer": 1,
    "explanation": "Inflation is defined as an increase in the average price of goods and services."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "What is the primary difference between 'Deflation' and 'Disinflation'?",
    "options": [
      "A) Deflation is a slowing of the inflation rate, while disinflation is a decrease in prices.",
      "B) Deflation is a decrease in the general price level, while disinflation is a slowdown in the rate of inflation.",
      "C) Both terms refer to the same economic phenomenon.",
      "D) Deflation occurs when interest rates are zero; disinflation occurs when they are negative."
    ],
    "correctAnswer": 1,
    "explanation": "Deflation is a decrease in the general price level (negative inflation), whereas disinflation is a reduction in the rate of inflation."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "The Consumer Price Index (CPI) is measured by comparing the cost of a fixed 'market basket' of goods and services. Which category typically has the highest weighting in the Canadian CPI basket?",
    "options": [
      "A) Clothing and Footwear",
      "B) Transportation",
      "C) Shelter",
      "D) Recreation and Education"
    ],
    "correctAnswer": 2,
    "explanation": "According to the CPI weighting examples, Shelter accounts for a significant portion of the consumer basket (approx. 28.31% in the provided slide)."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "If the CPI was 150 last year and is 156 this year, what is the annual inflation rate (f)?",
    "options": [
      "A) 2%",
      "B) 4%",
      "C) 6%",
      "D) 156%"
    ],
    "correctAnswer": 1,
    "explanation": "The inflation rate is calculated as: (CPIn - CPIn-1) / CPIn-1. So, (156 - 150) / 150 = 6 / 150 = 0.04 or 4%."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Which interest rate represents the 'true' earning power of an investment after removing the effect of inflation?",
    "options": [
      "A) Nominal Interest Rate (i)",
      "B) Real Interest Rate (i')",
      "C) Market Interest Rate",
      "D) Actual Interest Rate"
    ],
    "correctAnswer": 1,
    "explanation": "The real interest rate (i') is the interest rate after it has been adjusted for the effects of inflation."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "If the real interest rate is 4% and the inflation rate is 3%, what is the exact nominal (actual) interest rate (i)?",
    "options": [
      "A) 7.00%",
      "B) 7.12%",
      "C) 1.00%",
      "D) 12.00%"
    ],
    "correctAnswer": 1,
    "explanation": "Using the exact formula (1 + i) = (1 + i')(1 + f): (1.04)(1.03) = 1.0712. Thus, i = 7.12%."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "You have a bank account offering a 10% nominal interest rate. If inflation is 10%, what is your real rate of return?",
    "options": [
      "A) 0%",
      "B) 10%",
      "C) 20%",
      "D) 1%"
    ],
    "correctAnswer": 0,
    "explanation": "If i = f, the real interest rate i' is zero because the growth in your account balance is exactly offset by the increase in prices."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "What are 'Real Dollars' (Constant Dollars)?",
    "options": [
      "A) The physical cash you hold in your wallet.",
      "B) Dollars of constant purchasing power at some base time, regardless of when the cash flow occurs.",
      "C) The total number of dollars received, including inflationary increases.",
      "D) Dollars used only for international trade."
    ],
    "correctAnswer": 1,
    "explanation": "Real dollars represent cash flows expressed in terms of the purchasing power at a fixed base point in time."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "You expect to receive 5,000 'actual' dollars in 4 years. If the annual inflation rate is 2%, what is the value in 'real' dollars at Year 0?",
    "options": [
      "A) $5,000 * (1.02)^4",
      "B) $5,000 / (1.02)^4",
      "C) $5,000 * (0.02 * 4)",
      "D) $5,000 + $400"
    ],
    "correctAnswer": 1,
    "explanation": "To convert actual dollars to real dollars, you must deflate (divide) by the inflation factor: R = A / (1 + f)^n."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "If you are working with 'Real Cash Flows' in a project evaluation, which MARR should you use to be consistent?",
    "options": [
      "A) Current (Nominal) MARR",
      "B) Real MARR",
      "C) Inflation Rate",
      "D) Before-tax MARR"
    ],
    "correctAnswer": 1,
    "explanation": "Consistency is mandatory: Real Cash Flows must be evaluated using the Real MARR."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Evaluating a project using a 'Current (Nominal) MARR' and 'Real Cash Flows' will result in what type of bias?",
    "options": [
      "A) Biased in favor of investments.",
      "B) Biased against investments.",
      "C) No bias, it is a correct method.",
      "D) Bias depends on the project life."
    ],
    "correctAnswer": 1,
    "explanation": "Using a high current MARR (which includes inflation expectations) to discount real cash flows (which do not include inflation) is incorrect and unfairly penalizes the project."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Method 2 of project evaluation involves adjusting real cash flows into current cash flows. What interest rate should then be applied?",
    "options": [
      "A) Real MARR",
      "B) Current (Nominal) MARR",
      "C) The inflation rate f",
      "D) The prime rate"
    ],
    "correctAnswer": 1,
    "explanation": "Method 2 requires using the current MARR to evaluate current cash flows."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "Why is sensitivity analysis often performed regarding inflation in long-term projects?",
    "options": [
      "A) Because inflation rates are always constant over 20 years.",
      "B) Because long-term inflation rates are very difficult to predict accurately.",
      "C) Because inflation has no impact on long-term cash flows.",
      "D) To calculate the exact tax shield from depreciation."
    ],
    "correctAnswer": 1,
    "explanation": "Long-term projects need forecasts of inflation, but since these are uncertain, it is wise to evaluate the project over a range of possible rates."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "What is the 'purchasing power' of a dollar?",
    "options": [
      "A) The weight of the coin.",
      "B) The quantity of goods and services that can be purchased with one unit of currency.",
      "C) The interest rate earned on the dollar in a bank account.",
      "D) The value of the dollar compared to foreign currency."
    ],
    "correctAnswer": 1,
    "explanation": "Purchasing power refers to how much one dollar can actually buy. Inflation reduces this power over time."
  },
  {
    "chapter": "Chapter 9: Inflation",
    "question": "In Method 1 of project evaluation, how are cash flows determined?",
    "options": [
      "A) By estimated future prices including inflation.",
      "B) By today's prices (base-year prices).",
      "C) By adding a fixed 5% to all previous year costs.",
      "D) By using the consumer price index from 10 years ago."
    ],
    "correctAnswer": 1,
    "explanation": "In Method 1 (Real MARR and Real Cash Flows), cash flows are determined by today's prices."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is the primary rationale for government intervention in the economy through public sector projects?",
    "options": [
      "A) To maximize corporate tax revenue.",
      "B) To address market failures where private markets fail to allocate resources efficiently.",
      "C) To eliminate all forms of private competition.",
      "D) To ensure interest rates remain at zero percent."
    ],
    "correctAnswer": 1,
    "explanation": "Governments intervene when markets fail to allocate resources efficiently, such as in the provision of public goods or managing externalities."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "Which characteristic of a 'Public Good' means that one person's consumption does not reduce the amount available for others?",
    "options": [
      "A) Non-excludability",
      "B) Non-rivalry",
      "C) Profitability",
      "D) Marketability"
    ],
    "correctAnswer": 1,
    "explanation": "Non-rivalry means the consumption of a good by one individual does not diminish the amount available for others."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "The 'Free-Rider' problem is primarily associated with which characteristic of public goods?",
    "options": [
      "A) Non-rivalry",
      "B) Non-excludability",
      "C) High variable costs",
      "D) Limited geographic availability"
    ],
    "correctAnswer": 1,
    "explanation": "Non-excludability makes it impossible or very expensive to prevent people from using a good, leading to individuals benefiting without paying (free-riding)."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "Which of the following is considered a classic example of a pure public good?",
    "options": [
      "A) A private toll highway",
      "B) National Defense",
      "C) A movie theater ticket",
      "D) A restricted access research lab"
    ],
    "correctAnswer": 1,
    "explanation": "National defense is non-rivalrous and non-excludable, making it a standard example of a public good."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is an 'Externality' in the context of project evaluation?",
    "options": [
      "A) The internal cost of labor for a project.",
      "B) An impact on a third party who is not directly involved in the project transaction.",
      "C) The interest rate charged by external banks.",
      "D) The cost of purchasing materials from outside the country."
    ],
    "correctAnswer": 1,
    "explanation": "Externalities are third-party impacts that are not accounted for in the market price of a good or service."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "A 'Natural Monopoly' typically occurs when:",
    "options": [
      "A) There are no fixed costs involved.",
      "B) High fixed costs make it most efficient for a single supplier to serve the entire market.",
      "C) The government bans all other companies from entering.",
      "D) The product is a luxury item."
    ],
    "correctAnswer": 1,
    "explanation": "Natural monopolies arise when infrastructure costs are so high that having multiple competing suppliers is inefficient."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "How does the 'Social Discount Rate' (SDR) used for public projects typically compare to a private firm's MARR?",
    "options": [
      "A) The SDR is usually much higher.",
      "B) The SDR is usually lower.",
      "C) They are always identical.",
      "D) The SDR is always 10% regardless of the project."
    ],
    "correctAnswer": 1,
    "explanation": "The Social Discount Rate is generally lower than a private MARR due to lower risk perceptions and a longer-term perspective."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "Which of the following is a reason why the government's discount rate is often lower than that of the private sector?",
    "options": [
      "A) Governments are seeking to maximize short-term profits.",
      "B) Governments can borrow at lower, often tax-free interest rates.",
      "C) Public projects have no long-term benefits.",
      "D) It is harder for governments to secure loans."
    ],
    "correctAnswer": 1,
    "explanation": "Governments have access to lower interest rates and consider longer time horizons with lower overall risk."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "In a Benefit-Cost Analysis (BCA), who is typically considered the 'Sponsor'?",
    "options": [
      "A) The citizens using the service.",
      "B) The government agency or body providing the project.",
      "C) The construction company building the project.",
      "D) The foreign investors funding the project."
    ],
    "correctAnswer": 1,
    "explanation": "The 'Sponsor' is the government body that manages and funds the project."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is the formula for the Conventional Benefit-Cost (B/C) Ratio?",
    "options": [
      "A) PW(Costs) / PW(Benefits)",
      "B) PW(Benefits) / PW(Costs)",
      "C) PW(Benefits) - PW(Costs)",
      "D) (PW(Benefits) + PW(Costs)) / 2"
    ],
    "correctAnswer": 1,
    "explanation": "The conventional B/C ratio is calculated as the Present Worth of all benefits divided by the Present Worth of all costs."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "How does the 'Modified B/C Ratio' differ from the conventional one?",
    "options": [
      "A) It ignores salvage values.",
      "B) It subtracts annual Operating & Maintenance (O&M) costs from the benefits in the numerator.",
      "C) It ignores the initial capital investment.",
      "D) It uses a higher interest rate."
    ],
    "correctAnswer": 1,
    "explanation": "The modified B/C ratio places O&M costs in the numerator (as a reduction to benefits) rather than in the denominator."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is the decision rule for a single independent public project using the B/C ratio method?",
    "options": [
      "A) Accept if B/C < 1.0",
      "B) Accept if B/C > 1.0",
      "C) Reject if B/C is exactly 1.0",
      "D) Accept if B/C is negative"
    ],
    "correctAnswer": 1,
    "explanation": "An independent project is economically acceptable if the B/C ratio is greater than 1.0 at the chosen discount rate."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "Why is it potentially misleading to rank mutually exclusive public projects based solely on their individual B/C ratios?",
    "options": [
      "A) Because the ratios do not account for the scale of the benefits and costs.",
      "B) Because the B/C ratio only works for private projects.",
      "C) Because the B/C ratio is always the same for all projects.",
      "D) Because governments are not allowed to use ratios."
    ],
    "correctAnswer": 0,
    "explanation": "A project with a higher ratio might provide fewer total net benefits than a larger project with a slightly lower ratio."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What is the first step when conducting an Incremental B/C Analysis for mutually exclusive alternatives?",
    "options": [
      "A) Rank alternatives by their B/C ratio.",
      "B) Rank alternatives in increasing order of their Present Worth of costs.",
      "C) Select the project with the highest benefits.",
      "D) Calculate the IRR for each project."
    ],
    "correctAnswer": 1,
    "explanation": "Just like incremental IRR analysis, the incremental B/C method requires ranking alternatives by their costs."
  },
  {
    "chapter": "Chapter 10: Public Sector Decision Making",
    "question": "What does the Treasury Board of Canada recommend using for comparing public projects instead of B/C ratios?",
    "options": [
      "A) Payback Period",
      "B) Present Worth (PW) or Annual Worth (AW)",
      "C) Nominal interest rates",
      "D) Sunk cost analysis"
    ],
    "correctAnswer": 1,
    "explanation": "The Treasury Board recommends PW or AW for comparisons to avoid the pitfalls of using cost-benefit ratios."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "According to the course material, what is the primary difference between 'Risk' and 'Uncertainty'?",
    "options": [
      "A) Risk is unmeasurable, while uncertainty is measurable.",
      "B) Risk is a measurable uncertainty, while uncertainty is an unmeasurable risk.",
      "C) Risk only applies to financial markets, while uncertainty applies to technology.",
      "D) There is no practical difference between the two terms."
    ],
    "correctAnswer": 1,
    "explanation": "Risk is defined as measurable uncertainty (e.g., based on historical trends), whereas uncertainty is an unmeasurable risk (e.g., new regulations)."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "What is the main purpose of performing a 'Sensitivity Analysis' on an engineering project?",
    "options": [
      "A) To guarantee that the project will be profitable.",
      "B) To determine how sensitive the project's outcome is to deviations in estimated parameters.",
      "C) To calculate the exact tax depreciation for the next ten years.",
      "D) To eliminate all risks associated with the project."
    ],
    "correctAnswer": 1,
    "explanation": "Sensitivity analysis is used to understand how changes in input parameters (like prices or interest rates) impact the project's economic performance."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "In a sensitivity graph (Spider plot), what does a steeper slope for a specific parameter line indicate?",
    "options": [
      "A) The project is less sensitive to changes in that parameter.",
      "B) The project is more sensitive to changes in that parameter.",
      "C) That parameter is a fixed cost that never changes.",
      "D) The parameter has a 100% probability of occurring as estimated."
    ],
    "correctAnswer": 1,
    "explanation": "A steeper slope indicates higher sensitivity, meaning small deviations in that parameter cause large changes in the project's PW or IRR."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "The 'Break-even Point' is defined as the level of activity where:",
    "options": [
      "A) Total profit is maximized.",
      "B) Total income is exactly equal to the sum of fixed and variable costs.",
      "C) Variable costs are reduced to zero.",
      "D) The internal rate of return reaches the MARR."
    ],
    "correctAnswer": 1,
    "explanation": "Break-even occurs when total revenue (income) equals total costs, resulting in zero net profit."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "When structuring a decision with a 'Decision Tree', what does a square node represent?",
    "options": [
      "A) A chance event or outcome.",
      "B) A decision point where the decision-maker must choose an alternative.",
      "C) The final payoff of a project.",
      "D) A calculation of expected value."
    ],
    "correctAnswer": 1,
    "explanation": "Square nodes represent decision points where a choice must be made between different branches or alternatives."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "In a decision tree, what does a circular (or point) node represent?",
    "options": [
      "A) A choice made by the engineer.",
      "B) A chance node where an uncertain event occurs with a specific probability.",
      "C) The start of the project.",
      "D) A sunk cost that cannot be recovered."
    ],
    "correctAnswer": 1,
    "explanation": "Circular nodes are chance nodes representing events outside the decision-maker's control, each with an associated probability."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "The 'Expected Value' (EV) of an uncertain event is calculated as:",
    "options": [
      "A) The highest possible outcome regardless of probability.",
      "B) The weighted average of all possible outcomes, where weights are the probabilities.",
      "C) The average of the best-case and worst-case scenarios.",
      "D) The initial investment divided by the number of possible outcomes."
    ],
    "correctAnswer": 1,
    "explanation": "Expected Value is the sum of each outcome multiplied by its respective probability: $EV = \\sum (p_i \\times x_i)$."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "What is the process of 'Folding Back' (or Rolling Back) a decision tree used for?",
    "options": [
      "A) To draw the initial branches of the tree.",
      "B) To determine the optimal decision by working from the right (end) to the left (beginning) of the tree.",
      "C) To increase the number of chance events in the model.",
      "D) To calculate the inflation-adjusted salvage value."
    ],
    "correctAnswer": 1,
    "explanation": "Folding back involves calculating EVs at chance nodes and selecting the best path at decision nodes, moving from the final outcomes back to the start."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "At a decision node during the folding back process, which branch should be selected?",
    "options": [
      "A) The one with the lowest probability of failure.",
      "B) The one that offers the highest expected value (for profit) or lowest expected cost.",
      "C) The branch that was added to the tree last.",
      "D) All branches must be averaged together."
    ],
    "correctAnswer": 1,
    "explanation": "At decision nodes, the alternative that maximizes the expected profit (or minimizes cost) is chosen."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "If a sensitivity analysis shows that a project's PW is most sensitive to 'Product Price', what should the management do?",
    "options": [
      "A) Ignore the price and focus on labor costs.",
      "B) Spend more effort and resources on accurately forecasting the future product price.",
      "C) Automatically reject the project.",
      "D) Assume the price will never change."
    ],
    "correctAnswer": 1,
    "explanation": "Since price has the highest impact (sensitivity), the risk of the project is largely tied to that parameter, requiring more careful estimation."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "A project has two outcomes: Success ($100 profit, 60% chance) and Failure ($20 loss, 40% chance). What is the Expected Value?",
    "options": [
      "A) $80",
      "B) $60",
      "C) $52",
      "D) $40"
    ],
    "correctAnswer": 2,
    "explanation": "$EV = (0.60 \\times 100) + (0.40 \\times -20) = 60 - 8 = 52$."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "What does a 'Do-Nothing' branch in a decision tree represent?",
    "options": [
      "A) A project that has failed.",
      "B) An alternative where no investment is made, typically resulting in zero cash flow.",
      "C) A sunk cost that must be ignored.",
      "D) The point where the project is sold for scrap."
    ],
    "correctAnswer": 1,
    "explanation": "The 'Do-Nothing' alternative is a valid choice in many decision trees, often used as a baseline where $EV = 0$."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "Which of the following is NOT a reason for uncertainty in estimating project parameters?",
    "options": [
      "A) Changes in technology.",
      "B) Changes in the number of competing firms.",
      "C) Using a formula for continuous compounding.",
      "D) Changes in inflation or interest rates."
    ],
    "correctAnswer": 2,
    "explanation": "Continuous compounding is a mathematical model, not a source of parameter uncertainty like market or technological changes."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "In a sensitivity analysis, what is the 'base case' scenario?",
    "options": [
      "A) The worst possible scenario for the project.",
      "B) The set of parameter estimates that are considered most likely to occur.",
      "C) The scenario where all interest rates are zero.",
      "D) The point where the project breaks even."
    ],
    "correctAnswer": 1,
    "explanation": "The base case uses the initial, most probable estimates for each parameter to provide a starting point for the analysis."
  },
  {
    "chapter": "Chapter 12: Dealing with Uncertainty and Risk",
    "question": "How is risk different from uncertainty in a decision-making context?",
    "options": [
      "A) Risk is always avoided, while uncertainty is accepted.",
      "B) Risk can be assigned a probability based on data, while uncertainty involves outcomes with unknown probabilities.",
      "C) Uncertainty is only found in public projects.",
      "D) Risk is a financial term, and uncertainty is an engineering term."
    ],
    "correctAnswer": 1,
    "explanation": "Risk is 'measurable' because probabilities can often be assigned based on historical data or trends, unlike pure uncertainty."
  }
];