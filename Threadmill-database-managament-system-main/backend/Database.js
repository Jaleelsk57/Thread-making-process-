// const oracledb = require("oracledb");
// // Set database connection details
// const dbConfig = {
//   user: "system",
//   password: "Nariii",
//   connectString: "localhost:49702/orcl",
// };

// const Query = async (sql) => {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute(sql);
//     await connection.commit();
//     return result;
//   } catch (error) {
//     return (error);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
// };

// const Result = async (...Parameters) => {
  
//   let Sql;
//   console.log(typeof (Parameters[2]));
//   Details = Parameters[2];
//     try{
//       Details = eval(`(${Parameters[2]})`);
//     } catch(err){}
//  switch (Parameters[1]) {
//     case "Insert":
//       Sql = `insert into ${Parameters[0]} values('${Details.S_No}','${Details.Dt}','${Details.Grade }','${Details.Weight}','${Details.Address}','${Details.Contact}')`;
//       break;
//     case "Update":
//       Sql = `update ${Parameters[0]} set S_No = '${Parameters[3].S_No}', Dt = '${Parameters[3].Dt}', Grade  = '${Parameters[3].Grade }', Weight = '${Parameters[3].Weight}', Address  = '${Parameters[3].Address }', Contact  = '${Parameters[3].Contact }' where S_No = '${Details}'`;
//       break;
//     case "Delete":
//       Sql = `delete from ${Parameters[0]} where S_No = '${Details}'`;
//       break;
//     case "Read":
//         Sql = `select * from ${Parameters[0]}`;
//         if(Details != "All"){
//           Sql = `select * from ${Parameters[0]} where S_No = '${Details}'`;
//         }
//       break;
//     default:
//       console.error("Invalid Parameters");
//       break;
//   }
//   console.log(Sql);
//   var result = await Query(Sql);
//   return result;
// };
// module.exports = Result;
const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "Nariii",
  connectString: "localhost:49708/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.ID}','${Details.TOC}','${Details.QIN}','${Details.ETWC}','${Details.LOC}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set ID = '${Parameters[3].ID}', TOC = '${Parameters[3].TOC}' , QIN = '${Parameters[3].QIN}' , ETWC = '${Parameters[3].ETWC}', LOC = '${Parameters[3].LOC}' where ID = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where ID = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where ID = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;