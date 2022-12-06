import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const ticket = [
    {
      category: "Q1 2023",
      color: "red",
      title: "NFT SAFTY",
      owner: "Amik iglawo",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      status: "done",
      priority: 5,
      progress: 40,
      descriptions: "descrition example",
      timtstamp: "2022-02-05",
    },
    {
      category: "Q2 2023",
      color: "blue",
      title: "AI Model Selling",
      owner: "Amik iglawo II",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      status: "pending",
      priority: 8,
      progress: 20,
      descriptions: "descrition example",
      timtstamp: "2022-02-06",
    },{
      category: "Q2 2023",
      color: "green",
      title: "Sell Bot",
      owner: "Amik iglawo III",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      status: "in progress",
      priority: 3,
      progress: 80,
      descriptions: "descrition example",
      timtstamp: "2022-02-07",
    }
  ];
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
