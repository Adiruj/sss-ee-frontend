import React from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { ITableProps, kaReducer, Table } from 'ka-table';
import { loadData, updateData } from 'ka-table/actionCreators';
import { ActionType, DataType, SortDirection, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import 'bootstrap/dist/css/bootstrap.min.css';

const tablePropsInit = {
    columns: [
        { dataType: DataType.String, key: "name", title: "Name" },
        {
            key: "score",
            title: "Score",
            dataType: DataType.Number,
            sortDirection: SortDirection.Ascend
        },
        { key: "passed", title: "Passed", dataType: DataType.Boolean }
    ],
    singleAction: loadData(),
    sortingMode: SortingMode.Single,
    rowKeyField: "id"
};


function Partdata() {
    const [tableProps, changeTableProps] = useState(tablePropsInit);

    const dispatch = async action => {
        changeTableProps(prevState => kaReducer(prevState, action));

        if (action.type === ActionType.LoadData) {
            const response = await fetch(
                "http://192.168.1.80:3000/api/partlist/cost/"
            );
            const data = await response.json();
            dispatch(updateData(data));
        }
    };

    return (
        <Container>
            <div className='remote-data-demo'>
                <Table
                    {...tableProps}
                    dispatch={dispatch}
                />
            </div>
        </Container>
    )
}

export default Partdata