module.exports = function (plop) {
	console.log(`

	Bem vindo ao einstein-generator! 😁

	`);
	plop.getWelcomeMessage();
	plop.setGenerator('resource', {
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the module or resource name?'
			},
			{
				type: 'list',
				name: 'option',
				message: 'Select your option?',
				choices: [
					{
						type: 'confirm',
						name: 'module',
						message: 'Do you want a Module?'
					},
					{
						type: 'confirm',
						name: 'valueObject',
						message: 'Do you want Value Object?'
					},
					{
						type: 'confirm',
						name: 'repository',
						message: 'Do you want a Repository?'
					},
					{
						type: 'confirm',
						name: 'aggregate',
						message: 'Do you want Aggregate?'
					},
					{
						type: 'confirm',
						name: 'entity',
						message: 'Do you want Entity?'
					},
					{
						type: 'confirm',
						name: 'useCase',
						message: 'Do you want Use Case?'
					},
					{
						type: 'confirm',
						name: 'mapper',
						message: 'Do you want Adapter?'
					},
					{
						type: 'confirm',
						name: 'model',
						message: 'Do you want a Model?'
					}
				]
			}
		],
		actions: function (data) {
			const actions = [];
			const { option, name } = data;
			if (option === 'valueObject') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/value-objects/{{dashCase name}}.value-object.ts',
						base: 'templates',
						templateFile: './templates/domain/value-object.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/value-objects/{{dashCase name}}.value-object.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/value-object.spec.ts.hbs'
					},
				);
			} else if (option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/aggregates/{{dashCase name}}.aggregate.ts',
						base: 'templates',
						templateFile: './templates/domain/aggregate.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/aggregates/{{dashCase name}}.aggregate.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/aggregate.spec.ts.hbs'
					},
				);
			} else if (option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/entities/{{dashCase name}}.entity.ts',
						base: 'templates',
						templateFile: './templates/domain/entity.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/entities/{{dashCase name}}.entity.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/entity.spec.ts.hbs'
					},
				);
			} else if (option === 'useCase') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/use-cases/{{dashCase name}}.use-case.ts',
						base: 'templates',
						templateFile: './templates/app/use-cases/sample/use-case.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/use-cases/{{dashCase name}}.use-case.spec.ts',
						base: 'templates',
						templateFile: './templates/app/use-cases/sample/use-case.spec.ts.hbs'
					},
				);
			} else if (option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/mappers/{{dashCase name}}.mapper.ts',
						base: 'templates',
						templateFile: './templates/domain/adapters/adapter.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/mappers/{{dashCase name}}.mapper.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/adapters/adapter.spec.ts.hbs'
					},
				);
			} else if (option === 'model') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/models/{{dashCase name}}.interface.ts',
						base: 'templates',
						templateFile: './templates/domain/interfaces/model.interface.ts.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/models/{{dashCase name}}.model.ts',
						base: 'templates',
						templateFile: './templates/infra/models/model.ts.hbs'
					},
				);
			} else if (option === 'repository') {
					actions.push(
						{
							type: 'add',
							path: '../src/generated/repository/{{dashCase name}}.repository.ts',
							base: 'templates',
							templateFile: './templates/infra/repo/repository.ts.hbs'
						},
						{
							type: 'add',
							path: '../src/generated/repository/{{dashCase name}}.interface.ts',
							base: 'templates',
							templateFile: './templates/domain/interfaces/repository.interface.ts.hbs'
						},
				);
			} else {
				actions.push(
					{
						type: 'addMany',
						destination: '../src/generated/{{dashCase name}}',
						templateFiles: './templates/',
						base: 'templates',
						transform: (template) => {
							const data = template.replaceAll(/\/my-module\//g, `/${name}/`);
							return data;
						}
					}
				);
			}

			return actions;
		}
	});
};