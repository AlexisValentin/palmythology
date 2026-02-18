const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;

// Create the Node HTTP server for Next.js
const app = next({
	dev: false,
});
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url, true);
			handle(req, res, parsedUrl);
		}).listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
