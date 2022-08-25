#include<stdio.h>
#include <unistd.h>
#include <limits.h>

int main(int argc, char const *argv[])
{
	FILE *source, *target;
	char ch;
	char current_work_dir[PATH_MAX];
	getcwd(current_work_dir, sizeof(current_work_dir));

	source = fopen("use-case.txt", "r");
	target = fopen("use-case.ts", "w");

	while( ( ch = fgetc(source) ) != EOF )
		fputc(ch, target);

	printf("%s\n", current_work_dir);
	for (size_t i = 1; i < argc; i++)
	{
		printf("%s\n", argv[i]);
	}

	fclose(source);
	fclose(target);
	return (0);
}
