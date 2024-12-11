// const express = require("express");
// const Result = require("../Database1");
// // const Mapping = require("./Operations");
// const Router = express.Router();

// Router.post("/Insert", (req, res) => {
//   let Details = req.body;
//   console.log(Details);
//   Result("regis", "Insert", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.delete("/Delete:name", (req, res) => {
//   let Details = req.params.name;
//   Result("regis", "Delete", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.put("/Update:name", (req, res) => {
//   let Details = req.params.name;
//   let UpdatedDetails = req.body;
//   console.log(UpdatedDetails);
//   console.log(Details);
//   Result("regis", "Update", Details, UpdatedDetails)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.get("/Read:_name", (req, res) => {
//   const Details = req.params._name;
//   Result("regis", "Read", Details)
//     .then((result) => {
//       res.send({ Message: result.Message, Result: result.rows });
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// Router.get("/Dlogin:_name", (req, res) => {
//     const Details = req.params._name;
//     Result("regis", "Dlogin", Details)
//       .then((result) => {
//         res.send({ Message: result.Message, Result: result.rows });
//         console.log(result);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   });
// module.exports = Router;
const express = require("express");
const Result = require("../Database1");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("regis", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:name", (req, res) => {
  let Details = req.params.name;
  Result("regis", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:name", (req, res) => {
  let Details = req.params.name;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("regis", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:_name", (req, res) => {
  const Details = req.params._name;
  Result("regis", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Dlogin:_name", (req, res) => {
    const Details = req.params._name;
    Result("regis", "Dlogin", Details)
      .then((result) => {
        res.send({ Message: result.Message, Result: result.rows });
        console.log(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
module.exports = Router;