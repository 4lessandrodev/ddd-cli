module.exports = function (plop) {
	console.log(`

	Welcome to einstein-cli! 😁

	`);
	plop.setGenerator('resource', {
		description: 'This cli generate default files.',
		prompts: [
			{
				type: 'input',
				name: 'className',
				message: 'What is the class name?'
			},
			{
				type: 'input',
				name: 'moduleName',
				message: 'What is the module name?'
			},
			{
				type: 'list',
				name: 'option',
				message: 'Select your option?',
				choices: [
					{
						type: 'confirm',
						name: 'ddd-module',
						message: 'Do you want a Module?'
					},
					{
						type: 'confirm',
						name: 'ddd-value-object',
						message: 'Do you want Value Object?'
					},
					{
						type: 'confirm',
						name: 'ddd-repository',
						message: 'Do you want a Repository?'
					},
					{
						type: 'confirm',
						name: 'ddd-aggregate',
						message: 'Do you want Aggregate?'
					},
					{
						type: 'confirm',
						name: 'ddd-entity',
						message: 'Do you want Entity?'
					},
					{
						type: 'confirm',
						name: 'use-case',
						message: 'Do you want Use Case?'
					},
					{
						type: 'confirm',
						name: 'ddd-mapper',
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
			const { option, className, moduleName } = data;
			if (option === 'ddd-value-object') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/value-objects/{{dashCase className}}.value-object.ts',
						base: 'templates',
						templateFile: './templates/domain/value-object.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/value-objects/{{dashCase className}}.value-object.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/value-object.spec.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'ddd-aggregate') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/aggregates/{{dashCase className}}.aggregate.ts',
						base: 'templates',
						templateFile: './templates/domain/aggregate.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/aggregates/{{dashCase className}}.aggregate.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/aggregate.spec.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'ddd-entity') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/entities/{{dashCase className}}.entity.ts',
						base: 'templates',
						templateFile: './templates/domain/entity.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/entities/{{dashCase className}}.entity.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/tests/entity.spec.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'use-case') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/use-cases/{{dashCase className}}.use-case.ts',
						base: 'templates',
						templateFile: './templates/app/use-cases/sample/use-case.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/use-cases/{{dashCase className}}.use-case.spec.ts',
						base: 'templates',
						templateFile: './templates/app/use-cases/sample/use-case.spec.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'ddd-mapper') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/mappers/{{dashCase className}}.mapper.ts',
						base: 'templates',
						templateFile: './templates/domain/adapters/adapter.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/mappers/{{dashCase className}}.mapper.spec.ts',
						base: 'templates',
						templateFile: './templates/domain/adapters/adapter.spec.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'model') {
				actions.push(
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/models/{{dashCase className}}.interface.ts',
						base: 'templates',
						templateFile: './templates/domain/interfaces/model.interface.ts.hbs',
						skipIfExists: true
					},
					{
						type: 'add',
						path: '../../../src/modules/{{dashCase moduleName}}/models/{{dashCase className}}.model.ts',
						base: 'templates',
						templateFile: './templates/infra/models/model.ts.hbs',
						skipIfExists: true
					},
				);
			} else if (option === 'ddd-repository') {
					actions.push(
						{
							type: 'add',
							path: '../../../src/modules/{{dashCase moduleName}}/repository/{{dashCase className}}.repository.ts',
							base: 'templates',
							templateFile: './templates/infra/repo/repository.ts.hbs',
							skipIfExists: true
						},
						{
							type: 'add',
							path: '../../../src/modules/{{dashCase moduleName}}/repository/{{dashCase className}}.interface.ts',
							base: 'templates',
							templateFile: './templates/domain/interfaces/repository.interface.ts.hbs',
							skipIfExists: true
						},
				);
			} else {
				actions.push(
					{
						type: 'addMany',
						destination: '../../../src/modules/{{dashCase moduleName}}',
						templateFiles: './templates/',
						base: 'templates',
						skipIfExists: true,
						transform: (template) => {
							const data = template.replaceAll(/\/my-module\//g, `/${moduleName}/`);
							return data;
						}
					}
				);
			}

			return actions;
		}
	});
};
