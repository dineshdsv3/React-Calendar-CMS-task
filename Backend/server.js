const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 4000;

const staticFilesPath = path.join(process.cwd(), 'build');

app.use(express.static(staticFilesPath));

app.use(function (req, res) {
	res.sendFile(path.join(staticFilesPath, 'index.html'));
});

app.listen(port, () => {
	console.log('server running on port ' + port);
});
