import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

export const fetchCriticalCommentData = () => {
	const filePath = path.join(process.cwd(), '/assets/critical_comments.csv');
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const commentData = parse(fileContent, {
		skip_empty_lines: true,
	});

	return commentData;
};
