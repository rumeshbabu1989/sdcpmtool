const cds = require("@sap/cds");
const ValidateInpHelper = require("./lib/ValidateInpHelper");
const validator = new ValidateInpHelper();
  
const readFunction = async (req) => {
	return [
            {
                username: req.user.id
            }
        ];
};

module.exports = cds.service.impl(async (service) => {
	const db = await cds.connect.to("db");
	const { MyProjects } = service.entities;
	
	service.before("SAVE", "MyProjects", function(req){
		validator.validateProjectService(req);
	});

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
		service.before("READ", "MyProjects", async (req) => {
		  const WHERE = req.query.SELECT.where;
		  if(WHERE == undefined){
				// console.log("undefined");
				req.query.SELECT.where = new Array();
				req.query.SELECT.where.push({
					ref: [ 'projectManager_userId' ]
				});				
				req.query.SELECT.where.push('=');
				req.query.SELECT.where.push({
					val: req.user.id
				});

				// req.query.SELECT.where.push('or');
				// req.query.SELECT.where.push({
				// 	ref: [ 'dpManager_userId' ]
				// });
				// req.query.SELECT.where.push('=');
				// req.query.SELECT.where.push({
				// 	val: req.user.id
				// });
		  }else{
			// console.log(WHERE);
			req.query.SELECT.where.push('and');
			req.query.SELECT.where.push({
				ref: [ 'projectManager_userId' ]
			});
			req.query.SELECT.where.push('=');
			req.query.SELECT.where.push({
				val: req.user.id
			});

			// req.query.SELECT.where.push('or');
			// req.query.SELECT.where.push({
			// 	ref: [ 'dpManager_userId' ]
			// });
			// req.query.SELECT.where.push('=');
			// req.query.SELECT.where.push({
			// 	val: req.user.id
			// });

		  }
		//   const dbE = db.entities;
		//   const { Projects } = db.entities('sap.sdcpmtool.transaction');
		//   let query = cds.parse.cql (`SELECT from Projects`)
		//   const books = await req.run(query)
        //   const books = await req.run (SELECT.from (Projects).where({ projectManager_userId: req.user.id }))
        //   return books		
		});

		service.after("READ", "MyProjects", async (MyProjects,req) => {
		//   const projectId = req.data;
		//   MyProjects = await req.run(SELECT.from(MyProjects).where({projectManager_userId:req.user.id}));
		//   const tx = ProjectService.tx(req)
		//   let query = cds.parse.cql (`SELECT from Projects`)
		//   const books = await tx.run(query)
        // //   const books = await tx.run (SELECT.from (Projects).excluding ['IsActiveEntity'])
        //   return MyProjects;		
		});
	//   });
});