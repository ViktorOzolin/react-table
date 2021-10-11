import React, { useState } from "react";
import { FilterPropsType, FilterStateTypes } from "../../types/TableTypes";
const COLUMN = "column";
const SORT_TYPE = "sortType";
const INPUT = "input";
const SUBMIT = "submit";
const CLEAR = "clear";





const Filter: React.FC<FilterPropsType> = ({ setFilter }) => {
  const initialState: FilterStateTypes = {
    column: "name",
    sortType: "",
    input: "",
  }; 
  const [formState, setFormState] = useState(initialState);

  const onFormChangeHandler = (event: any) => {
    const formElement = event.target;
    switch (formElement.name) {
      case COLUMN:
        setFormState((prev) => ({
          ...prev,
          column: formElement.value,
        }));
        break;
      case SORT_TYPE:
        setFormState((prev) => ({
          ...prev,
          sortType: formElement.value,
        }));
        break;
      case INPUT:
        setFormState((prev) => ({
          ...prev,
          input: formElement.value,
        }));
        break;
      default:
        return;
    }
  };
  const onClickButtonHandler = (event: any) => {
    event.preventDefault();
    const button = event.target;
    if (button.name === SUBMIT) {
      setFilter(formState);
    } else if (button.name === CLEAR) {
      setFilter(initialState);
    }
  };

  return (
    <form onChange={onFormChangeHandler}>
      <select name={COLUMN} defaultValue="">
        <option value="" disabled>
          Выберите поле
        </option>
        <option value="name">Имя</option>
        <option value="email">Email</option>
        <option value="phone">Телефон</option>
        <option value="company">Компания</option>
      </select>
      <select name={SORT_TYPE} defaultValue="">
        <option value="" disabled>
          Выберите вариант
        </option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
        <option value="equal">Равно</option>
        <option value="include">Содержит</option>
      </select>
      <input
        name={INPUT}
        value={formState.input}
        placeholder="введите значение"
      />
      <button name={SUBMIT} onClick={onClickButtonHandler}>
        Фильтрация
      </button>
      <button name={CLEAR} onClick={onClickButtonHandler}>
        Сброс
      </button>
    </form>
  );
};
export default Filter;
