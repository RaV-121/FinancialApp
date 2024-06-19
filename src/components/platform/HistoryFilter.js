import React from 'react'

function HistoryFilter({filter, onFilterChange}) {
  return (
    <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Filter transactions by any tag"
      />
  )
}

export default HistoryFilter