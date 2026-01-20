const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Route: /complain
  if (pathname === "/complain") {
    const name = query.name;
    const issue = query.issue;
    const priority = query.priority;

    // validation
    if (!name || !issue || !priority) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "Please provide name, issue, and priority",
        })
      );
      return;
    }

    // Generate Ticket ID
    const ticketId = "TKT-" + Math.floor(Math.random() * 1000000);

    // Create log message
    const log = `TicketID: ${ticketId}, Name: ${name}, Issue: ${issue}, Priority: ${priority}\n`;

    // Save in file based on priority
    if (priority.toLowerCase() === "high") {
      fs.appendFile("URGENT.txt", log, () => {});
    } else {
      fs.appendFile("normal_complaints.txt", log, () => {});
    }

    // Response JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        ticketId: ticketId,
        message: "We will solve your issue soon.",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 page not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
