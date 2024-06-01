// Converts SCREAMING_SNAKE_CASE to normal case
export const normalizeScreamingSnakeCase = (str: string) =>
	str
		.split('_')
		.map((word) => word.toLowerCase())
		.join(' ')
