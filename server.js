const express = require("express");
const dotenv = require("dotenv");

// NOTE Load Env Vars
dotenv.config({ path: "./config/config.env" });

const app = express();
const port = process.env.PORT || 5000;
const www = process.env.WWW || "./";
app.use(express.static(www));
console.log(`serving ${www}`);
app.get("*", (req, res) => {
	res.sendFile(`index.html`, { root: www });
});
app.listen(port, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${port}`
	)
);
