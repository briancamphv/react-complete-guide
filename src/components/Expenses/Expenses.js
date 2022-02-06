import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [selectedFilterYear, setSelectedFilterYear] = useState("2019");

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
