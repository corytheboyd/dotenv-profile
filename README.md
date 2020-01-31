# Dotenv Profile

`dotenv-profile` allows you to easily share configuration across many projects, and swap sets of configuration by implement a profile system.

## Usage

Set current profile
```
dotenv-profile set-profile <PROFILE NAME>
```

Open current profile (or specific profile) in editor
```
dotenv-profiles open [PROFILE NAME]
```

Read configuration from current profile
```
dotenv-profile get BASE_URL__MY_APP
``` 

Inject configuration into a projects existing `.env` file
```
// my-app/.env
ROOT_URL=$(dotenv-profile get BASE_URL__MY_APP)
```
