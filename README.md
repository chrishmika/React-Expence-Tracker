# React Expense Tracker

A clean and simple expense tracker built with React and the Context API.

Track your transactions, see your total balance, and get a quick breakdown of income vs expense in real time.

## Features

- Add transactions with a text label and amount.
- Use positive amounts for income and negative amounts for expense.
- View running balance instantly.
- View separate totals for income and expense.
- View full transaction history.
- Delete any transaction from the history list.

## Tech Stack

- React (Create React App)
- Context API + `useReducer` for global state management
- Plain CSS for styling

## How It Works

The app keeps transactions in a global state using Context + Reducer:

- `ADD_TRANSACTION` prepends a new transaction to the list.
- `DELETE_TRANSACTION` removes a transaction by `id`.
- Balance and totals are derived from transaction amounts.

> Note: data is currently stored in memory only (no local storage or backend), so refreshing the page resets transactions.

## Project Structure

```text
src/
	App.js
	App.css
	index.js
	components/
		Header.js
		Balance.js
		IncomeExpense.js
		TransactionList.js
		Transaction.js
		AddTransaction.js
	context/
		GlobalState.js
		AppReducer.js
```

## Getting Started

### 1) Prerequisites

- Node.js 16+ (Node.js 18+ recommended)
- npm (comes with Node.js)

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm start
```

Then open: [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode with hot reload.

### `npm test`

Runs the test watcher.

### `npm run build`

Builds the app for production into the `build/` folder.

### `npm run eject`

Ejects CRA configuration (irreversible).

## Usage

1. Enter a transaction name in the **Text** field.
2. Enter amount:
   - positive value for income (example: `2500`)
   - negative value for expense (example: `-120`)
3. Click **Add transaction**.
4. Hover a transaction row and click **x** to delete it.

## Key Components

- `Balance` → shows total balance.
- `IncomeExpense` → shows income and expense totals.
- `TransactionList` → renders all transaction rows.
- `Transaction` → renders one row and delete action.
- `AddTransaction` → controlled form for adding new entries.
- `GlobalState` + `AppReducer` → centralized state updates.

## Troubleshooting

- `npm run dev` fails:
  - This project uses Create React App, so use `npm start` instead.
- App does not update as expected:
  - Check browser console for runtime errors.
  - Ensure dependencies are installed by running `npm install`.

## Future Improvements (Optional)

- Persist data with Local Storage.
- Add form validation (empty text, zero amount).
- Add categories and date filters.
- Add charts for spending analysis.
- Add backend sync and authentication.

## License

This project is for learning/personal use. Add a license file if you plan to distribute it publicly.
