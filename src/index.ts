import program from './cli';

export function main(): void {
    program.parse(process.argv);
    program.help();
}
