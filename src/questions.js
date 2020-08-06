const questions = [
    {
        type: 'select',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
        { title: 'New', description: 'Create a new Discord.JS Project', value: 'new' },
        { title: 'Generate', description: 'Generate a command or event', value: 'gen' },
      ],
    },
    {
        type: (prev) => (prev === 'new' ? 'text' : null),
        name: 'data',
        message: 'What would you like this project to be called?',
        validate: (value) => (value.length === 0 ? `The project name cannot be empty!` : true)
    },
    {
        type: (prev) => (prev === 'gen' ? 'select' : null),
        name: 'data',
        message: 'What would you like to generate?',
        choices: [
            { title: 'Command', value: 'command', description: 'Generate a new command.'},
            { title: 'Event', value: 'event', description: 'Generate an event.' }
        ],
    }
]

const versionSelect = [
    {
        type: 'select',
        name: 'version',
        message: 'Which version would you like to use?',
        choices: [
            { title: 'Latest', value: 'latest', description: 'Install the latest version of Discord.JS' },
            { title: 'v12', value: '12.0.0', description: 'Install Discord.JS v12.0.0' },
        ]
    }
]

const getCredentials = [
    {
        type: 'password',
        name: 'token',
        message: 'Enter your bot token',
        validate: (value) => (value.length === 0 ? 'This field cannot be empty!' : true),
    },
    {
        type: 'text',
        name: 'prefix',
        message: 'Enter your bot prefix',
        valudate: (value) => (value.length === 0 ? 'this field cannot be empty!' : true)
    }
    
]

const commandGenerate = [
    {
        type: 'text',
        name: 'commandName',
        message: 'Enter the name of this command.',
    },
    {
        type: 'text',
        name: 'commandCategory',
        message: 'Enter category of this command.'
    }
]

const eventGenerate = [
    {
        type: 'multiselect',
        name: 'eventType',
        message: 'Which event would you like to generate.',
        instructions: false,
        choices: [
            { title: 'CHANNEL_CREATE', value: 'channelCreate' },
            { title: 'CHANNEL_DELETE', value: 'channelDelete' },
            { title: 'CHANNEL_PINS_UPDATE', value: 'channelPinsUpdate' },
            { title: 'CHANNEL_UPDATE', value: 'channelUpdate' },
            { title: 'DEBUG', value: 'debug' },
            { title: 'EMOJI_CREATE', value: 'emojiCreate' },
            { title: 'EMOJI_DELETE', value: 'emojiDelete' },
            { title: 'EMOJI_UPDATE', value: 'emojiUpdate' },
            { title: 'ERROR', value: 'error' },
            { title: 'GUILD_BAN_ADD', value: 'guildBanAdd' },
            { title: 'GUILD_BAN_REMOVE', value: 'guildBanRemove' },
            { title: 'GUILD_CREATE', value: 'guildCreate' },
            { title: 'GUILD_DELETE', value: 'guildDelete' },
            { title: 'GUILD_INTEGRATIONS_UPDATE', value: 'guildIntegrationsUpdate' },
            { title: 'GUILD_MEMBER_ADD', value: 'guildMemberAdd' },
            { title: 'GUILD_MEMBER_REMOVE', value: 'guildMemberRemove' },
            { title: 'GUILD_MEMBERS_CHUNK', value: 'guildMembersChunk' },
            { title: 'GUILD_MEMBERS_SPEAKING', value: 'guildMembersSpeaking' },
            { title: 'GUILD_MEMBER_UPDATE', value: 'guildMemberUpdate' },
            { title: 'GUILD_UNAVAILABLE', value: 'guildUnavailable' },
            { title: 'GUILD_UPDATE', value: 'guildUpdate' },
            { title: 'MESSAGE', value: 'message' },
            { title: 'MESSAGE_DELETE', value: 'messageDelete' },
            { title: 'MESSAGE_DELETE_BULK', value: 'messageDeleteBulk' },
            { title: 'MESSAGE_REACTION_ADD', value: 'messageReactionAdd' },
            { title: 'MESSAGE_REACTION_REMOVE', value: 'messageReactionRemove' },
            { title: 'MESSAGE_REACTION_REMOVE_ALL', value: 'messageReactionRemoveAll' },
            { title: 'MESSAGE_REACTION_REMOVE_EMOJI', value: 'messageReactionRemoveEmoji' },
            { title: 'MESSAGE_UPDATE', value: 'messageUpdate' },
            { title: 'PRESENCE_UPDATE', value: 'presenceUpdate' },
            { title: 'RATE_LIMIT', value: 'rateLimit' },
            { title: 'READY', value: 'ready' },
            { title: 'ROLE_CREATE', value: 'roleCreate' },
            { title: 'ROLE_DELETE', value: 'roleDelete' },
            { title: 'ROLE_UPDATE', value: 'roleUpdate' },
            { title: 'SHARD_DISCONNECT', value: 'shardDisconnect' },
            { title: 'SHARD_ERROR', value: 'shardError' },
            { title: 'SHARD_READY', value: 'shardReady' },
            { title: 'SHARD_RECONNECTING', value: 'shardReconnecting' },
            { title: 'SHARD_RESUME', value: 'shardResume' },
            { title: 'TYPING_START', value: 'typingStart' },
            { title: 'USER_UPDATE', value: 'userUpdate' },
            { title: 'VOICE_STATE_UPDATE', value: 'voiceStateUpdate' },
            { title: 'WARN', value: 'warn' },
            { title: 'WEBHOOK_UPDATE', value: 'webhookUpdate' },
        ],
        hint: '- Space to select. Return to submit',
    }
]

module.exports = { questions, versionSelect, getCredentials, commandGenerate, eventGenerate };