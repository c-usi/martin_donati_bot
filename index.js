const Discord = require("discord.js");
const config = require("./config.json");
const messages = require("./messages.json");

const randItem = (arr) => {
  if (!arr) {
    return "";
  }
  if (arr.length === 1) {
    return arr[0];
  }
  const i = Math.floor(Math.random() * arr.length);
  return arr[i]
};

const client = new Discord.Client();
client.on('message', (msg) => {
  if (msg.author.bot) return;
  const content = msg.content;

  if (content.match(/(assignment)|(submit)/i)) {
    const send = randItem(config.assets.assignments);
    if (send === "") return;
    msg.channel.send("I submit my submission: " + send.name, {files: [send.url]});
    return;
  }

  // Reactions
  if (content.match(/(carza)|(anto)/i)) {
    msg.react(messages.emoji.anto);
  } else if (content.match(/(l.l)|(ahah)|(lmao)/i)) {
    msg.react(messages.emoji.lol);
  }

  // Messages
  let arr = undefined;
  let quote = undefined;
  if (content.match(/(_nomartin.*)|(__)/gm)) {
    arr = undefined;
  } else if (content.match(/(ciao)|(^hi)/i)) {
    arr = ["Ciao"];
  } else if (content.match(/(bye)/i)) {
    arr = ["Bye bye"];
  } else if (content.match(/(l.l)|(ah)|(lmao)/i)) {
    arr = messages.lol;
  } else if (quote = content.match(/(mocci)|(andrea)|(airfrance)/i)) {
    arr = messages.andrea;
  } else if (quote = content.match(/(carza)|(anto)/i)) {
    arr = messages.anto;
  } else if (quote = content.match(/(construction)|(contraction)/i)) {
    arr = messages.construction;
  } else if (quote = content.match(/(bini)|(domenico)|(maestro)|(vulcano)|(metal)/i)) {
    arr = messages.domenico;
  } else if (quote = content.match(/(vecchi)|(edoardo)|(bless)/i)) {
    arr = messages.edoardo;
  } else if (quote = content.match(/(crestani)|(fabio)|(paper.?author)/i)) {
    arr = messages.fabio;
  } else if (quote = content.match(/(frediani)|(federica)/i)) {
    arr = messages.federica;
  } else if (quote = content.match(/(kepel)|(gilles)|(geopol)|(qat)/i)) {
    arr = messages.gilles;
  } else if (quote = content.match(/(gnu)|(linux)|(ubuntu)|(fedora)|(arch)|(firefox)|(open source)/i)) {
    arr = messages.gnu;
  } else if (quote = content.match(/(intrighi(.*|\ *)passioni)|(eliza)/i)) {
    arr = messages.intrighi;
  } else if (quote = content.match(/linkedin/i)) {
    arr = messages.linkedin;
  } else if (quote = content.match(/(kim)|(korea)/i)) {
    arr = messages.kim;
  } else if (quote = content.match(/(ponzanelli)|(luca)/i)) {
    arr = messages.luca;
  } else if (quote = content.match(/(gambardella)|(maria)|(poeta)|(scrittore)|(^ai\ )|(\ ai$)|(\ ai\ )/i)) {
    arr = messages.maria;
  } else if (quote = content.match(/(giordano)|(marco)|(emmanuel)|(macron)|(insubria)/i)) {
    arr = messages.marco;
  } else if (quote = content.match(/(annoum)|(marwan)|(pencil)/i)) {
    arr = messages.marwan;
  } else if (quote = content.match(/(landoni)|(monica)/i)) {
    arr = messages.monica;
  } else if (quote = content.match(/(pezze)|(mauro)|(redundancy)|(ridondanz.)|(ridondant.)/i)) {
    arr = messages.mauro;
  } else if (quote = content.match(/(nystrom)|(nate)|(scala)|(uhm)/i)) {
    arr = messages.nate;
  } else if (quote = content.match(/(eugster)|(patrick)|(yoghuster)|(michael)|(multerer)|(love)/i)) {
    arr = messages.patrick;
  } else if (quote = content.match(/quot./i)) {
    arr = messages.quote;
  } else if (content.match(/(astley)|(rick)|(forse)|(maybe)|(certo)|(sure)/i)) {
    arr = messages.rick;
  } else if (quote = content.match(/(ros.)|(brace)|(bari)/i)) {
    arr = messages.rosa;
  } else if (content.match(/(sad)/i)) {
    arr = messages.sad;
  } else if (quote = content.match(/sveva/i)) {
    arr = messages.sveva;
  } else if (content.match(/(usi)|(meme)|(university of lugano)/i)) {
    arr = messages.usi;
  } else if (content.match(/(martin)|(donati)/)) {
    arr = messages.martin;
  }

  if (arr) {
    const forceMartin = content.match(/\.\./);
    const send = Math.random() < 0.90;
    if (forceMartin || send) {
      if (quote) {
        msg.channel.send("> " + quote[0]);
      }
      msg.channel.send(randItem(arr));
    }
  }
});
client.login(config.BOT_TOKEN);
