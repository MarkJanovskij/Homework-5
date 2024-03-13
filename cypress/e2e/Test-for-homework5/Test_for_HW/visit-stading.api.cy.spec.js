describe("tests for staging api", () => {
  let token;

  it("API_login_admin", () => {
    cy.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/authenticate",
      body: {
        username: "admin_automation",
        password: "admin_automation",
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      token = response.body.id_token;
    });
  });
});















//     it("user - API", () => {
//       let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzEwMzMyNTIxLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDI0NjEyMX0.LRE7LII95-Zy4qHzlolahIgh6iRwsnDDe7FqrI29jTbHVErh9JHcAto-LYBBpay4-Hz00x3jH5b66wHWzDL8SA";

//       cy.request({
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         url: "https://sqlverifier-staging-08050d656f7a.herokuapp.com/login", 
//         body: { 
//           username: "admin_automation",
//           password: "admin_automation",
//         },
//       }).then((response) => {
//         expect(response.status).to.equal(200);
//         token = response.body.id_token;

       
//         cy.wrap(token).as("token"); 
//       });

      
//     });
//   });
// });
