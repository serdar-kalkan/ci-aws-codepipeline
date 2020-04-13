const express = require('express');
const app = express();
const port = 8080; // was 3000 before

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// | Service        | Run Time           | Configuration Time           | 
// | ------------- |:-------------:| :-------------:|
// | CircleCI      | 2 min | 1 hour |
// | GitLab      | 5 min 15 seconds      | 1 hour |
// | Travis      | 3 min 7 seconds | 1 hour |
// | Buddy | 1 min      |  10 minutes |  
// | AWS CodePipeline | 3 min 14 seconds      | 30 minutes | 


/* NOTES
* Somehow express was not installed (I could spot it in package.json anyhow).

END OF NOTES */