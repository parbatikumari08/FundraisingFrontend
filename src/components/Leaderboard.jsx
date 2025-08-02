const Leaderboard = () => {
  const dummyLeaderboard = [
    { name: 'Parbati Kumari', donations: 12000 },
    { name: 'Rahul Sharma', donations: 9500 },
    { name: 'Ananya Singh', donations: 8500 },
    { name: 'Vikram Patel', donations: 6000 },
    { name: 'Neha Gupta', donations: 4000 },
  ];

  return (
    <div className="container leaderboard">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Donations (₹)</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeaderboard.map((intern, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>{intern.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
