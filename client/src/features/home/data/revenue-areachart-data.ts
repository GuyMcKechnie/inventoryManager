export const chartData = [
  {
    date: "2024-01-01",
    revenue: 300 + Math.floor(Math.random() * 60) - 30,
    expenses: 200 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-02-01",
    revenue: 320 + Math.floor(Math.random() * 60) - 30,
    expenses: 210 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-03-01",
    revenue: 350 + Math.floor(Math.random() * 60) - 30,
    expenses: 220 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-04-01",
    revenue: 380 + Math.floor(Math.random() * 60) - 30,
    expenses: 230 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-05-01",
    revenue: 400 + Math.floor(Math.random() * 60) - 30,
    expenses: 240 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-06-01",
    revenue: 420 + Math.floor(Math.random() * 60) - 30,
    expenses: 250 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-07-01",
    revenue: 450 + Math.floor(Math.random() * 60) - 30,
    expenses: 260 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-08-01",
    revenue: 470 + Math.floor(Math.random() * 60) - 30,
    expenses: 270 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-09-01",
    revenue: 490 + Math.floor(Math.random() * 60) - 30,
    expenses: 280 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-10-01",
    revenue: 510 + Math.floor(Math.random() * 60) - 30,
    expenses: 290 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-11-01",
    revenue: 530 + Math.floor(Math.random() * 60) - 30,
    expenses: 300 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2024-12-01",
    revenue: 550 + Math.floor(Math.random() * 60) - 30,
    expenses: 310 + Math.floor(Math.random() * 30) - 15,
    profit: 0,
  },
  {
    date: "2025-01-01",
    revenue: 500,
    expenses: 300,
    profit: 200,
  },
  {
    date: "2025-02-01",
    revenue: 550 + Math.floor(Math.random() * 80) - 40, // Base + random variation
    expenses: 320 + Math.floor(Math.random() * 40) - 20,
    profit: 0, // Calculated below
  },
  {
    date: "2025-03-01",
    revenue: 600 + Math.floor(Math.random() * 80) - 40,
    expenses: 340 + Math.floor(Math.random() * 40) - 20,
    profit: 0,
  },
  {
    date: "2025-04-01",
    revenue: 650 + Math.floor(Math.random() * 80) - 40,
    expenses: 360 + Math.floor(Math.random() * 40) - 20,
    profit: 0,
  },
  {
    date: "2025-05-01",
    revenue: 700 + Math.floor(Math.random() * 80) - 40,
    expenses: 380 + Math.floor(Math.random() * 40) - 20,
    profit: 0,
  },
  {
    date: "2025-06-01",
    revenue: 750 + Math.floor(Math.random() * 80) - 40,
    expenses: 400 + Math.floor(Math.random() * 40) - 20,
    profit: 0,
  },
];

// Calculate profit based on revenue and expenses, ensuring it's not negative
chartData.forEach((item) => {
  if (item.profit === 0) {
    // Only calculate if profit is not already set (like the first 2025 entry)
    item.profit = item.revenue - item.expenses;
    if (item.profit < 0) {
      item.profit = 0; // Ensure profit is not negative
    }
  }
});
