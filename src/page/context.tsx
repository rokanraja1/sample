import React, { useState } from 'react'
export interface Dtype {
    name: string;
    age: number;
    status: boolean;
    phone: number;
}
export type ContextStructure = {
    data: Dtype[];
    savedata: (name:string,age:number,phone:number,status:boolean)=>void;
}
interface Props {
    children: React.ReactNode;
  }

export const DataContext = React.createContext<ContextStructure | null>(null);

export const DataProvider: React.FC<Props> = ({ children })  => {
    const [data, setData] = useState<Dtype[]>([
        {
            name: 'Rokan',
            age: 18,
            status: false,
            phone: 7550346317,
        },
        {
            name: 'Raja',
            age: 17,
            status: true,
            phone: 999421857,
        },
    ]);
    const savedata = (name:string,age:number,phone:number,status:boolean)=>{
        const data2 = [{
            name:name,
            age:age,
            status:status,
            phone:phone, 
        }]
        setData([...data,...data2])
    };
    return <DataContext.Provider value={{ data,savedata }}>
        {children}
    </DataContext.Provider>

}
export default DataProvider
