// TableComponent.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './table.css'; // Import your CSS file

const TableC1 = () => {
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
    },
    {
      id: 2,
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
    },
    {
      id: 3,
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
    },
    {
      id: 4,
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
    },
    {
      id: 5,
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
    },
    // Add more data as needed
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform actions based on the selected option if needed
  };

  const options = [
    { id: 1, label: 'Data 1' },
    { id: 2, label: 'Data 2' },
    { id: 3, label: 'Data 3' },
  ];

  return (
    <div className="table-container">
      <div className="dropdown">
        <button className="search-button">Refresh</button>
      </div>
      <div className="dropdown">
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedOption || 'Select an option'}
            <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
          </div>
          {isOpen && (
            <div className="dropdown-options">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedOption || 'Select an option'}
            <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
          </div>
          {isOpen && (
            <div className="dropdown-options">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedOption || 'Select an option'}
            <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
          </div>
          {isOpen && (
            <div className="dropdown-options">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <h2>Card 1 Details</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
            <th>Column 8</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                {/* <button className="search-button">Search</button> */}
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>{row.col4}</td>
              <td>{row.col5}</td>
              <td>{row.col6}</td>
              <td>{row.col7}</td>
              <td>
                <NavLink to="/first-page" className="navbar-button">
                  Monitor Now
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableC1;
