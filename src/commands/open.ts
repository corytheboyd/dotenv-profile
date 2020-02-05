import * as openEditor from 'open-editor';
import { getFilePath } from '../config/file';

export default async function(): Promise<void> {
    const file = getFilePath();
    openEditor([
        {
            file,
            line: 1,
            column: 1,
        },
    ]);
}
