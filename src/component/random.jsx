import React, { useState, useEffect } from 'react';

function API() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <Random apiData={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

function Random({ apiData }) {
    const [rowCount, setRowCount] = useState('');
    const [tableData, setTableData] = useState([]);

    const generateTable = () => {
        const newData = [];
        for (let i = 0; i < rowCount; i++) {
            const randomIndex = Math.floor(Math.random() * apiData.results.length);
            const randomName = apiData.results[randomIndex].name;
            newData.push({ name: randomName });
        }
        setTableData(newData);
        setRowCount('');
        accordion_click();
    };

    return (
        <div>
            <p>ฟังก์ชันนี้ไม่พร้อมใช้งาน ขออภัยในความไม่สะดวก</p>
            <div className='panel_2'>
                <table id="dataTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, index) => (
                            <tr key={index}>
                                <td>{rowData.name}</td>
                                <td>
                                    <button className="select">
                                        Select
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function accordion_click() {
    var panel_1 = document.querySelector(".panel");
    console.log(panel_1);
    var panel_2 = document.querySelector(".panel_2");
    console.log(panel_2);
    var sum = panel_2.scrollHeight * panel_1.scrollHeight
    console.log(panel_1.scrollHeight);
    console.log(panel_2.scrollHeight);
    console.log(sum);
    panel_1.style.maxHeight = sum + "px";
    panel_2.style.maxHeight = sum + "px";
}

export default Random;
