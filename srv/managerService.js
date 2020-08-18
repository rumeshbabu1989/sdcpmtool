const cds = require("@sap/cds");
  
module.exports = cds.service.impl(async (service) => {
	const ProjectService = await cds.connect.to("ProjectService");
	const { Projects } = ProjectService.entities;

	// service.prepend(()=>{
		// service.on("READ", "MyProjects", async (req) => {
        //   const projectId = req.data.ID;
		//   const tx = ProjectService.tx(req)
		//   let query = cds.parse.cql (`SELECT from Projects`)
		//   const books = await tx.run(query)
        // //   const books = await tx.run (SELECT.from (Projects).excluding ['IsActiveEntity'])
        //   return books
		
		// });

		// service.after("READ", "MyProjects", async (req) => {
        //   const projectId = req.data;
		//   const tx = ProjectService.tx(req)
		//   let query = cds.parse.cql (`SELECT from Projects`)
		//   const books = await tx.run(query)
        // //   const books = await tx.run (SELECT.from (Projects).excluding ['IsActiveEntity'])
        //   return books
		
		// });
	//   });
});