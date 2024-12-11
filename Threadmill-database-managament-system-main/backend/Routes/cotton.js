// const express = require("express");
// const Result = require("../Database");
// // const Mapping = require("./Operations");
// const Router = express.Router();

// Router.post("/Insert", (req, res) => {
//   let Details = req.body;
//   console.log(Details);
//   Result("Import_Table", "Insert", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.delete("/Delete:S_No", (req, res) => {
//   let Details = req.params.S_No;
//   Result("Import_Table", "Delete", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.put("/Update:S_No", (req, res) => {
//   let Details = req.params.S_No;
//   let UpdatedDetails = req.body;
//   console.log(UpdatedDetails);
//   console.log(Details);
//   Result("Import_Table", "Update", Details, UpdatedDetails)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.get("/Read:_S_No", (req, res) => {
//   const Details = req.params.S_No;
//   Result("Import_Table", "Read", Details)
//     .then((result) => {
//       res.send({ Message: result.Message, Result: result.rows });
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// module.exports = Router;
const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("cotton", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Result("cotton", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("cotton", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("cotton", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;