import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const changeExpenseFilterHandler = (filterYear) => {
    console.log(filterYear);
    setSelectedFilterYear(filterYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedFilterYear
  );

  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={selectedFilterYear}
          onChangeExpenseFilter={changeExpenseFilterHandler}
        />
      </div>
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
