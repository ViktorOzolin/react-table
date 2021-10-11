import React from "react";
import StyledTable from "./styles/Table.styled";
import StyledTh from "./styles/Th.styled";
import StyledTd from "./styles/Td.styled";
import { UserTypes, ColumnTypes } from "../../types/TableTypes";


interface TablePropsTypes {
  users: Array<UserTypes>
  setData: (column: ColumnTypes) => void
}
const Table: React.FC<TablePropsTypes> = ({users,setData}) => {
  

  const onClickHandler = (column: ColumnTypes) => {
    setData(column);
  };




  return (
    
      <StyledTable>
      <thead>
        <tr>
          <StyledTh>id</StyledTh>
          <StyledTh onClick={() => onClickHandler('name')}>Имя</StyledTh>
          <StyledTh onClick={() => onClickHandler('email')}>Email</StyledTh>
          <StyledTh onClick={() => onClickHandler('phone')}>Телефон</StyledTh>
          <StyledTh onClick={() => onClickHandler('company')}>Компания</StyledTh>
        </tr>
      </thead>
      <tbody>
        {users.map((user: UserTypes) => (
          <tr key={user.id}>
            <StyledTd>{user.id}</StyledTd>
            <StyledTd>{user.name}</StyledTd>
            <StyledTd>{user.email}</StyledTd>
            <StyledTd>{user.phone}</StyledTd>
            <StyledTd>{user.company.name}</StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    
 
    
  );
};

export { Table };
