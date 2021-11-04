import "dotenv/config";
import { Client, Intents } from 'discord.js';
import {generateDependencyReport} from '@discordjs/voice';

const client = new Client({intents: new Intents()});

void client.login(process.env.DISCORD_TOKEN);

client.on('ready', async () => {
	console.log('Discord.js client is ready!');

	console.log(generateDependencyReport());
});
