To reproduce bug:

1. `yarn install`
2. Copy `.env.example` to `.env` and populate if necessary
3. `yarn build`
4. `yarn start`

Output is

```
Discord.js client is ready!
--------------------------------------------------
Core Dependencies
- @discordjs/voice: 0.7.2
- prism-media: not found

Opus Libraries
- @discordjs/opus: not found
- opusscript: not found

Encryption Libraries
- sodium: not found
- libsodium-wrappers: not found
- tweetnacl: not found

FFmpeg
- version: 4.4
- libopus: yes
--------------------------------------------------
```

even though

```json
{
  "dependencies": {
    "@discordjs/opus": "^0.6.0",
  }
}
```
