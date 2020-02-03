import program from './cli';
import createProfile from './commands/create-profile';
import setProfile from './commands/set-profile';
import open from './commands/open';
import get from './commands/get';
import listProfiles from './commands/list-profiles';

export async function main(): Promise<void> {
    program
        .command('create-profile <profile>')
        .description('Create a new profile')
        .action(createProfile);

    program
        .command('set-profile <profile>')
        .description('Sets the current profile')
        .action(setProfile);

    program
        .command('open')
        .description('Opens the current profile for editing')
        .action(open);

    program
        .command('get [name]')
        .description('Gets value of a variable for the current profile')
        .action(get);

    program
        .command('ls')
        .description('Prints names of created profiles')
        .action(listProfiles);

    await program.parseAsync(process.argv);

    if (program.rawArgs.length <= 2) {
        program.help();
    }
}
