import React from 'react';
import ReactDOM from 'react-dom';
import TreeGrid from '../src/index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TreeGrid data={
    [
        {
            Header1: 'text1',
            Header2: 'text2',
            Header3: 'text3',
            children: [
                {
                    Header1: 'children1',
                    Header2: 'children2',
                    Header3: 'children3',
                    children: [
                        {
                            Header1: 'children1.1',
                            Header2: 'children 1.2'
                        }
                    ]
                }
            ]
        },
        {
            Header1: 'text1.2',
            Header3: 'text3.2'
        }
    ]}
    columnWidth={{
        Header1: "50%",
        Header2: "25%",
        Header3: "25%"
    }}
    />, div);
});