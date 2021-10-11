import React, { useEffect, useState } from "react";
import { FilterStateTypes, UserTypes, ColumnTypes } from "./types/TableTypes";
import { sorting } from "./utils/sorting";
import "./App.css";
import { Table } from "./components/Table";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

const App: React.FC = () => {
  const data: Array<UserTypes> = [];
  const [usersData, setUsersData] = useState(data);
  const [pageSettings, setPageSettings] = useState({
    currentPage: 1,
    perPage: 5,
  });
  const sortSettingsState: FilterStateTypes = {
    column: "name",
    sortType: "",
    input: "",
  };
  const [sortSettings, setSortSettings] = useState(sortSettingsState);

  const setFilterHandler = (formState: FilterStateTypes) => {
    console.log(formState);

    setSortSettings((prev) => ({ ...prev, ...formState }));
  };

  const setData = (column: ColumnTypes) => {
    setSortSettings((prev) => {
      if (prev.sortType === "" || prev.sortType === "DESC") {
        return { ...prev, sortType: "ASC", column };
      } else if (prev.sortType === "ASC") {
        return { ...prev, sortType: "DESC", column };
      } else return prev;
    });
  };
  const setCurrentPage = (page: number) => {
    setPageSettings((prev) => ({ ...prev, currentPage: page }));
  };
  useEffect(() => {
    const result = sorting(
      usersData,
      sortSettings.sortType,
      sortSettings.column,
      sortSettings.input
    );
    setUsersData(prev => prev !== result ? [...result] : prev);
  }, [usersData,sortSettings]);

  useEffect(() => {
    if (sortSettings.sortType === "") {
      fetch("http://localhost:3001/data")
        .then((response) => response.json())
        .then((response) => setUsersData(response));
    }
  }, [sortSettings]);

  const indexOfLastPage = pageSettings.currentPage * pageSettings.perPage;
  const indeOfFirstpage = indexOfLastPage - pageSettings.perPage;
  const currentUserData = usersData.slice(indeOfFirstpage, indexOfLastPage);
  console.log(usersData, pageSettings);

  return (
    <div className="App">
      <Filter setFilter={setFilterHandler} />
      <Table users={currentUserData} setData={setData} />
      <Pagination
        currentPage={pageSettings.currentPage}
        totalCount={Number(usersData.length)}
        perPage={pageSettings.perPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
