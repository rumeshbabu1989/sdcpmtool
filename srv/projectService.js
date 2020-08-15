const cds = require("@sap/cds");
const SequenceHelper = require("./lib/SequenceHelper");

module.exports = cds.service.impl(async (service) => {
	const db = await cds.connect.to("db");
	const { Projects } = service.entities;

	service.before("CREATE", Projects, async (context) => {
		const projectId = new SequenceHelper({
			db: db,
			sequence: "PROJECTID",
			table: "Projects",
			field: "projectId"
		});

		context.data.projectId = await projectId.getNextNumber();
	});
});