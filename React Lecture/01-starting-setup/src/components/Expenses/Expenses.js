import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses({ expenseItems }) {
  return (
    <Card className="expenses">
      {expenseItems.map((expenseItem) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
