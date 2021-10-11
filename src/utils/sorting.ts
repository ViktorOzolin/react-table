import { UserTypes,ColumnTypes } from "../types/TableTypes";


export const sorting = (data:Array<UserTypes>,sortType:string,column: ColumnTypes,input:string): Array<UserTypes> => {

  const acsFilteredData = ()  => {
    return data.sort((a, b) => {
      return a[column] > b[column] ? 1 : a[column]< b[column] ? -1 : 0;
    });
  }
  const descFilteredData = ()  => {
    return data.sort((a, b) => {
      return a[column] < b[column] ? 1 : a[column]> b[column] ? -1 : 0;
    });
  }



  if (sortType === "ASC") {
    return acsFilteredData()
  } else if (sortType === "DESC") {
    return descFilteredData();
  }else if(sortType === 'equal') {
    return data.filter(user => user[column] === input) 
  }
  else if(sortType === 'less') {
    return data.filter(user => user[column].toString().length < input.length) 
  }
  else if(sortType === 'more') {
    return data.filter(user => user[column].toString().length > input.length) 
  }
  else if(sortType === 'include') {
    return data.filter(user => user[column].toString().includes(input)) 
  }

  else {
    return data;
  }
};
