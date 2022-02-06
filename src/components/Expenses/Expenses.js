import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const changeExpenseFilterHandler = (filterYear) => {
    console.log(filterYear);
    setSelectedFilterYear(filterYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={selectedFilterYear}
          onChangeExpenseFilter={changeExpenseFilterHandler}
        />
      </div>
      {expenses
        .filter(
          (expense) =>
            expense.date.getFullYear().toString() === selectedFilterYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
    </Card>
  );
};

export default Expenses;
