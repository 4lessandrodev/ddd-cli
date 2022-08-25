module.exports = function (plop) {
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
			const { option } = data;
			if (option === 'valueObject') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/value-objects/{{dashCase name}}.value-object.ts',
						templateFile: './templates/my-module/domain/value-object.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/value-objects/{{dashCase name}}.value-object.spec.ts',
						templateFile: './templates/my-module/domain/tests/value-object.spec.hbs'
					},
				);
			} else if (option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/aggregates/{{dashCase name}}.aggregate.ts',
						templateFile: './templates/my-module/domain/aggregate.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/aggregates/{{dashCase name}}.aggregate.spec.ts',
						templateFile: './templates/my-module/domain/tests/aggregate.spec.hbs'
					},
				);
			} else if (option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/entities/{{dashCase name}}.entity.ts',
						templateFile: './templates/my-module/domain/entity.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/entities/{{dashCase name}}.entity.spec.ts',
						templateFile: './templates/my-module/domain/tests/entity.spec.hbs'
					},
				);
			} else if (option === 'useCase') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/use-cases/{{dashCase name}}.use-case.ts',
						templateFile: './templates/my-module/app/use-cases/sample/use-case.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/use-cases/{{dashCase name}}.use-case.spec.ts',
						templateFile: './templates/my-module/app/use-cases/sample/use-case.spec.hbs'
					},
				);
			} else if (option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/mappers/{{dashCase name}}.mapper.ts',
						templateFile: './templates/my-module/domain/adapters/adapter.hbs'
					},
					{
						type: 'add',
						path: '../src/generated/mappers/{{dashCase name}}.mapper.spec.ts',
						templateFile: './templates/my-module/domain/adapters/adapter.spec.hbs'
					},
				);
			} else if (option === 'model') {
				actions.push(
					{
						type: 'add',
						path: '../src/generated/models/{{dashCase name}}.interface.ts',
						templateFile: './templates/my-module/domain/interfaces/model.interface.ts'
					},
					{
						type: 'add',
						path: '../src/generated/models/{{dashCase name}}.model.ts',
						templateFile: './templates/my-module/infra/models/model.hbs'
					},
				);
			} else if (option === 'repository') {
					actions.push(
						{
							type: 'add',
							path: '../src/generated/repository/{{dashCase name}}.repository.ts',
							templateFile: './templates/my-module/infra/repo/repository.hbs'
						},
						{
							type: 'add',
							path: '../src/generated/repository/{{dashCase name}}.interface.ts',
							templateFile: './templates/my-module/domain/interfaces/repository.interface.hbs'
						},
				);
			} else {
				actions.push(
					{
						type: 'addMany',
						destination: '../src/generated/{{dashCase name}}',
						templateFiles: './templates/my-module/app/',
						stripExtensions: ['hbs']
					},
					{
						type: 'addMany',
						destination: '../src/generated/{{dashCase name}}',
						templateFiles: './templates/my-module/domain/',
						stripExtensions: ['hbs']
					},
					{
						type: 'addMany',
						destination: '../src/generated/{{dashCase name}}',
						templateFiles: './templates/my-module/infra/',
						stripExtensions: ['hbs']
					},
				);
			}

			return actions;
		}
	});
};