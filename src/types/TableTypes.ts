export interface UserTypes {
    id: number
    name: string
    email: string
    address: { street: string
               suite: string
               city:string
               zipcode: string
               geo: {
                   lat: string
                   lng: string
               }
            }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
    
}
export type ColumnTypes = "name" | "email" | "phone" | "company";

export interface FilterStateTypes  {
    column: ColumnTypes
    sortType: string
    input: string
  }

export interface FilterPropsType {
    setFilter: (formState: FilterStateTypes ) => void
  }
