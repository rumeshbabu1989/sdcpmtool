const cds = require("@sap/cds");
  
const readFunction = async (req) => {
	return [
            {
                username: req.user.id
            }
        ];
};

cds.serve ('ManagerService') .with ((srv)=>{
	srv.before (['READ', 'CREATE'], 'MyProjects', req =>
	  req.user.is('managers') || req.reject(403)
	)
  })

module.exports = cds.service.impl(async (service) => {
	const ProjectService = await cds.connect.to("ProjectService");
	const { Projects } = ProjectService.entities;


	service.on('READ', 'User', async (req) => {
		// User[0].username = req.user.id;
		return [
            {
                username: req.user.id
            }
        ];
		// const projetestctId = req.data;
	  //   const tx = ProjectService.tx(req)
	  //   let query = cds.parse.cql (`SELECT from Projects`)
	  //   const books = await tx.run(query)
	  // //   const books = await tx.run (SELECT.from (Projects).excluding ['IsActiveEntity'])
	  //   return books
	  
	  });

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