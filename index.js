const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { webp2stFile } = require("./lib/gif.js")
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs') 
const moment = require('moment-timezone')
const { exec } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const speed = require('performance-now');
const loli = new lolis()
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ryan \n' 
            + 'ORG:Arlequina ofc;\n'
            + 'TEL;type=CELL;type=VOICE;waid=553171704128:+55 31 7170-4128\n'
            + 'END:VCARD'
prefix = setting.prefix
blocked = []
fake = 'Arlequina Bot 💸'



const { crtt } = "Jogo da velha"
const { ptbr } = require('./mess')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./jdv/ttt/TTTconfig/tttme');
var tttset = require('./jdv/ttt/TTTconfig/tttset.json');
var esp = require('./jdv/ttt/TTTconfig/tttframe.json');
const dinheiro = JSON.parse(fs.readFileSync('./dados/dinheiro.json')) 
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))

const _pontuação1 = JSON.parse(fs.readFileSync('./x4bygst/pontuação1.json'));
const _pontuação2 = JSON.parse(fs.readFileSync('./x4bygst/pontuação2.json'));
const _pontuação3 = JSON.parse(fs.readFileSync('./x4bygst/pontuação3.json'));
const _pontuação4 = JSON.parse(fs.readFileSync('./x4bygst/pontuação4.json'));


//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen
const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
const addATM = (sender) => {
        	const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./dados/dinheiro.json', JSON.stringify(dinheiro))
        }
     
            const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./dados/dinheiro.json', JSON.stringify(dinheiro))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
        
            const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./dados/dinheiro.json', JSON.stringify(dinheiro))
            }
        } 
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	client.version = [3, 3234, 9];

	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o codigo com whatsapp web no numero do seu bot'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando qrcode...')
	})
	client.on('open', () => {
		success('2', 'Prontinho conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))


	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	client.on('CB:Call', async (json) => { const isOffer = json[1]['type'] == 'offer'; const number = `${json[1]['from'].split('@')[0]}@s.whatsapp.net`; if (!isOffer) return; client.log(`${('CALL')} From ${client.contacts[number].notify || number}`); await callHandler.rejectCall(number, json[1].id); })
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const arg = chats.slice(command.length + 2, chats.length)
			
			mess = {
				wait: 'Estou fazendo ⌛',
				success: '✔️ Deu certo ✔️',
				error: {
					stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
				   
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					ownerG: '❌ Este comando só pode ser usado pelo dono! ❌',
					ownerB: '❌ Este comando só pode ser usado pelo meu dono! ❌',
					admin: '❌ Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
				}
			}
            const totalchat = await client.chats.all()
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
            const mod = [ownerNumber,"${setting.mod}@s.whatsapp.net"]
            const adminbotnumber = ["${setting.adminbotnumber}@s.whatsapp.net"]
			const frendsowner = ["${setting.frendsowner}@s.whatsapp.net"]
            const premium = JSON.parse(fs.readFileSync('./database/vip.json'))
            const time1 = JSON.parse(fs.readFileSync('./x4bygst/time1.json'))
            const time2 = JSON.parse(fs.readFileSync('./x4bygst/time2.json'))
            const time3 = JSON.parse(fs.readFileSync('./x4bygst/time3.json'))
            const time4 = JSON.parse(fs.readFileSync('./x4bygst/time4.json'))
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const isPremium = premium.includes(sender)
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isBanned = ban.includes(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
            const tescuk = ["0@s.whatsapp.net"]
            const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
            const costum = (pesan, tipe, target, target2) => {
		     	client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			
			/****** TESTE DE PLAY BY GST KRL ******/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Erro ao baixar e enviar mídia_')
})
})
})
})
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
			
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`assets/botlogo.webp`)} } }
const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "50373488366@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isCmd) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
            if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

//_VISUALIZA AS MENSAGENS 
client.chatRead(from)

			function addMetadata(packname, author) {	
				if (!packname) packname = 'Arlequina'; if (!author) author = 'Farpa';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
				
}
const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const dinheirosaku = Math.floor(Math.random() * 10) + 50 
	                addKoinUser(sender, dinheirosaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
			switch(command) {
/***** AQUI NESSA PARTE DE SWITCH COMMAND QUE COMEÇA OS COMANDOS *****/
/***** AI TEM SOMENTE OS COMANDO DO JOGO DA VELHA ******/

case 'meudinhero':
	case 'meumoney':
 case 'meudinheiro':
				const dinheiro = checkATMuser(sender)
				sayo = `*┏⊱ 「 🤑DINHERO🤑 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${dinheiro}\n┗━━━━━━━━━━`
				reply(sayo)
 break
case 'eu':
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔞 PERFIL 😈 」
│❧🗒 Nome : ${pushname}
│❧🪀 Número : @${sender.split("@")[0]}
│❧🐂 Nível gado : ${nivelgador}${nivelgado2r}%
│❧📱 Seu Célular : ${mek.key.id.length > 21 ? 'Android 🥺' : mek.key.id.substring(0, 2) == '3A' ? 'IOS👀' : 'Zap zap web 👺'}
│❧😈 Nível puta : ${putar}${putar2}%
│❧😋 Nível de gostosura : ${gostosurar}${gostosurar2}%
🍼 Valor do programa : R$${programa}`
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg , MessageType.image, {caption: dptr, quoted: mek})
break
    break
case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
 case 'help':
case 'menu':
wew = fs.readFileSync('./assets/help.jpg')
                client.sendMessage(from, wew, image, {quoted: mek, caption: help(pushname,prefix) })
				  break
case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
case 'banir': 
case 'remove': 
case 'ban': 
case 'remover': 
   if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
 client.sendMessage("Alvo removido com sucesso")
break
case 'cassino':
if (!isGroup) return reply(mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
let cassinao = ['🍉', '🍎','🍇']
let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
if(resposta1==resposta2&&resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Parabéns, _${pushname}_ VOCÊ GANHOU*!!!!!`, text, {quoted: mek})
}
else if(resposta1==resposta2||resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Puts, passou perto, _${pushname}_ Quase foi...*`, text, {quoted: mek})
}
else{
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*kkkkk se fodeu, _${pushname}_ Tente na próxima...*`, text, {quoted: mek})
}
break
					case 'desligar':
if (!isOwner) return reply(mess.only.ownerB)
reply('Bot desligado! \nAlerquina ♠️!')
setTimeout(() => {
client.close()
}, 3000)
break
case 'oi':
tujuh = fs.readFileSync('./assets/oi.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bomdia':
tujuh = fs.readFileSync('./assets/bomdia.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'boanoite':
tujuh = fs.readFileSync('./assets/boanoite.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'boatarde':
tujuh = fs.readFileSync('./assets/boatarde.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gritar':
tujuh = fs.readFileSync('./assets/gritar.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'meupau':
tujuh = fs.readFileSync('./assets/meupau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vtmnc':
tujuh = fs.readFileSync('./assets/vtmnc.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'linkgp': //「 ♠️ 」By ryan シ︎
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
				case 'marcar':
					if (!isPremium) return reply ("Voce precisa ser vip")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*AlerquinaBot* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'marcar2': 
                                if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} vemk macaco\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
case 'delete':
				case 'del':
				case 'd':  
				case 'deletar':
				if (!isGroupAdmins) return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*AlerquinaBot* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'marcar2': 
                                if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} vemk macaco\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
case 'rebaixar':
case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupDemoteAdmin(from, M_exe)
} else {
client.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [exe1])
}
reply("ok, chefe esse cara perdeu o adm!")
break

case 'promover': 
case 'promote': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupMakeAdmin(from, M_exe)
} else {
client.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [exe1])
}
reply("ok, chefe esse cara agora e admin!")
break
				case 'add': 
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quem vc quer que eu adicione?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar alvo, talvez porque esteja privado')
					}
					break
			case 'adic': 
			case 'adc':
			   if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupAdd(from, [exe1])
}
 client.sendMessage("Alvo removido com sucesso")
break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, emitido :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recebido, emitido : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
case 'setname': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
client.groupUpdateSubject(idgrup, `${body.slice(9)}`)
client.sendMessage(from, 'nome do grupo alterado', text, {
quoted: mek
})
break
case 'setdesk':
case 'setdesc': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, 'descrição do grupo alterada', text, {
quoted: mek
})
break
case 'opengc':
case 'abrirgrupo':
case 'grupoabrir':
case 'opengp':
case 'abrirgp':
case 'grupo abrir':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nAgora *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					reply(open)
					break
case 'closegc':
case 'fechagrupo':
case 'grupofechar':
case 'fechargp':
case 'closegp':
case 'grupo fechar':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nAgora *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
if (!isGroup) return reply(ptbr.group())
const { owner, creation, participants, desc } = groupMetadata
infogp = 
` 
        INFORMAÇÕES DO GRUPO\n
  ‣Nome do grupo: ${groupName}
  
  ‣membros comuns: ${groupMembers.length}
  
  ‣Total de administradores: ${groupAdmins.length}
  
  ‣Criador: @${owner.split('@')[0]}
  
  ‣Total de membros: ${groupMetadata.participants.length} membros
  
  ‣Descrição:
  ${groupMetadata.desc}`
await client.sendMessage(from, infogp, text, {quoted: mek})
break
case 'revoke':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        client.revokeInvite(from)
        reply("```link redefinido```")
        break
case 'play':
if(!isGroup) return (mess.only.group)
                reply(ptbr.wait)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(5)}&apikey=Skillerofc`)
               if (anu.erro) return reply(anu.error)
                 infomp3 =  `❒「  *AlerquinaBot*  」
_Sucesso em encontrar sua música!_ \n\n🎯 Título : ${anu.result.title}\n\n
📊Link : ${anu.result.source}\n\n
🔊 Tamanho : ${anu.result.size}\n\n
*Sua música ta sendo baixada, prfv aguarde...*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek}) 
                break 
               case 'tm':
					if (!isOwner) return reply('*apenas os donos podem usar este comando!*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ transmissão da BelaBot ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ transmissão da AlerquinaBot  な ]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
                case 'virarmp3':
                	client.updatePresence(from, Presence.composing) 
                       
					if (!isQuotedVideo) return reply('❗_*AlerquinaBot só consegue executar esse comando em videos*_ :(')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❄ _*A AlerquinaBot não conseguiu identificar esse video, tente novamente ou reduza o tamanho do video*_ ')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
case 'play2':
if (args.length < 1) return reply('O que você deseja procurar?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `ℹ「 By Alerquina-Bot 」ℹ

│❧  🎁 *Título :* ${res.all[0].title}
│
│❧ 💸 *Carregado em :* ${res.all[0].ago}
│
│❧  🔍 *Visualizações :* ${res.all[0].views}
│
│❧ 🕝 *Duração :* ${res.all[0].timestamp}
│
│❧ 📱 *Canal :* ${res.all[0].author.name}
│
│❧ 🛡 *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `ℹ「 By Alerquina-Bot 」ℹ

│❧  🎁 *Título :* ${res.all[0].title}
│
│❧ 💸 *Carregado em :* ${res.all[0].ago}
│
│❧  🔍 *Visualizações :* ${res.all[0].views}
│
│❧  🕝 *Duração :* ${res.all[0].timestamp}
│
│❧  📱 *Canal :* ${res.all[0].author.name}
│
│❧  🛡 *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play3':
addFilter(from)    
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
lagu = await getBuffer(anu.result.url)		
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break
                case 'timex4':
try{
if(!isGroup) return (mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
d = []
teks = 'Time para 4x4\n'
for(i = 0; i < 4; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `Time 1❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
try{
if(!isGroup) return (mess.only.group)
d = []
teks = 'Time para 4x4\n'
for(i = 0; i < 4; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `Time 2❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
try{
d = []
teks = 'Reservas\n'
for(i = 0; i < 2; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `Reserva ❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
reply('𖥻ꦼꦽ➳ 「 Alerquina bot! 」')
break         
case 'addtime1':
if (!isPremium) return reply ("Voce precisa ser vip")
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
time1.push(`${mentioned}`)
fs.writeFileSync('./x4bygst/time1.json', JSON.stringify(time1))
addtime = `_ O @${mentioned[0].split('@')[0]} Entrou para a lista_ *Time1* _Na bot!_`
mentions(`${addtime}`, mentioned, true)   
break
case 'addtime2':
if (!isPremium) return reply ("Voce precisa ser vip")
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
time1.push(`${mentioned}`)
fs.writeFileSync('./x4bygst/time2.json', JSON.stringify(time1))
addtime = `_ O @${mentioned[0].split('@')[0]} Entrou para a lista_ *Time2* _Na bot!_`
mentions(`${addtime}`, mentioned, true)   
break
case 'addtime3':
if (!isPremium) return reply ("Voce precisa ser vip")
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
time1.push(`${mentioned}`)
fs.writeFileSync('./x4bygst/time3.json', JSON.stringify(time1))
addtime = `_ O @${mentioned[0].split('@')[0]} Entrou para a lista_ *Time3* _Na bot!_`
mentions(`${addtime}`, mentioned, true)   
break
case 'addtime4':
if (!isPremium) return reply ("Voce precisa ser vip")
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
time1.push(`${mentioned}`)
fs.writeFileSync('./x4bygst/time4.json', JSON.stringify(time1))
addtime = `_ O @${mentioned[0].split('@')[0]} Entrou para a lista_ *Time4* _Na bot!_`
mentions(`${addtime}`, mentioned, true)   
break
case 'cleartime1':
if (!isPremium) return reply ("Voce precisa ser vip")
				removetime1 = body.slice(11)
				time1.splice(`${removetime1}@s.whatsapp.net`, 4)
				fs.writeFileSync('./x4bygst/time1.json', JSON.stringify(time1))
				client.sendMessage(from, `_4 usuários da Lista Time1 foram removidos!_`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
case 'cleartime2':
if (!isPremium) return reply ("Voce precisa ser vip")
				removetime2 = body.slice(11)
				time2.splice(`${removetime2}@s.whatsapp.net`, 4)
				fs.writeFileSync('./x4bygst/time2.json', JSON.stringify(time2))
				client.sendMessage(from, `_4 usuários da Lista Time2 foram removidos!_`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
case 'cleartime3':
if (!isPremium) return reply ("Voce precisa ser vip")
				removetime3 = body.slice(11)
				time3.splice(`${removetime3}@s.whatsapp.net`, 4)
				fs.writeFileSync('./x4bygst/time3.json', JSON.stringify(time3))
				client.sendMessage(from, `_4 usuários da Lista Time3 foram removidos!_`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
case 'cleartime4':
if (!isPremium) return reply ("Voce precisa ser vip")
				removetime4 = body.slice(11)
				time4.splice(`${removetime4}@s.whatsapp.net`, 4)
				fs.writeFileSync('./x4bygst/time4.json', JSON.stringify(time4))
				client.sendMessage(from, `_4 usuários da Lista Time4 foram removidos!_`,MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
case 'time1mostrar':
if (!isPremium) return reply ("Voce precisa ser vip")
					teks = '╭────*「 *X4 RESENHA 🎯* 」\n│❧ TIME 1:\n'
					for (let V of time1) {
						teks += `│❧ @${V.split('@')[0]}\n`
					}
					teks += `╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": time1}})
					teks = ` ≡ *Ponts time1*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _pontuação1) {
teks += `│❧ 🏆 PONTUAÇÃO: ${req}\n`
}
teks  += `└──────────────`
reply(teks.trim())
					break
case 'time2mostrar':
if (!isPremium) return reply ("Voce precisa ser vip")
					teks = '╭────*「 *X4 RESENHA 🎯* 」\n│❧ TIME 2:\n'
					for (let V of time2) {
						teks += `│❧ @${V.split('@')[0]}\n`
					}
					teks += `╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": time2}})
					teks = ` ≡ *Ponts time2*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _pontuação2) {
teks += `│❧ 🏆 PONTUAÇÃO: ${req}\n`
}
teks  += `└──────────────`
reply(teks.trim())
					break
case 'time3mostrar':
if (!isPremium) return reply ("Voce precisa ser vip")
					teks = '╭────*「 *X4 RESENHA 🎯* 」\n│❧ TIME 3:\n'
					for (let V of time3) {
						teks += `│❧ @${V.split('@')[0]}\n`
					}
					teks += `╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": time3}})
					teks = ` ≡ *Ponts time3*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _pontuação3) {
teks += `│❧ 🏆 PONTUAÇÃO: ${req}\n`
}
teks  += `└──────────────`
reply(teks.trim())
					break
case 'time4mostrar':
if (!isPremium) return reply ("Voce precisa ser vip")
					teks = '╭────*「 *X4 RESENHA 🎯* 」\n│❧ TIME 4:\n'
					for (let V of time4) {
						teks += `│❧ @${V.split('@')[0]}\n`
					}
					teks += `╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": time4}})
					teks = ` ≡ *Ponts time4*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _pontuação4) {
teks += `│❧ 🏆 PONTUAÇÃO: ${req}\n`
}
teks  += `└──────────────`
reply(teks.trim())
					break
case 'addponts1':
if (!isPremium) return reply ("Voce precisa ser vip")
yoi = q
if (args.length < 1) return reply('Digite a quantidade de pontos que queira adicionar no time 1!')
if (yoi.length > 5 ) return ('O texto excede o limite!')
_pontuação1.push(yoi)
fs.writeFileSync('./x4bygst/pontuação1.json', JSON.stringify(_pontuação1))
reply(`Ok ${pushname}, os pontos foram adicionados no *Time1*`)
break
case 'addponts2':
if (!isPremium) return reply ("Voce precisa ser vip")
yoi = q
if (args.length < 1) return reply('Digite a quantidade de pontos que queira adicionar no time 2!')
if (yoi.length > 5 ) return ('O texto excede o limite!')
_pontuação2.push(yoi)
fs.writeFileSync('./x4bygst/pontuação2.json', JSON.stringify(_pontuação2))
reply(`Ok ${pushname}, os pontos foram adicionados no *Time2*`)
break
case 'addponts3':
if (!isPremium) return reply ("Voce precisa ser vip")
yoi = q
if (args.length < 1) return reply('Digite a quantidade de pontos que queira adicionar no time 3!')
if (yoi.length > 5 ) return ('O texto excede o limite!')
_pontuação3.push(yoi)
fs.writeFileSync('./x4bygst/pontuação3.json', JSON.stringify(_pontuação3))
reply(`Ok ${pushname}, os pontos foram adicionados no *Time3*`)
break
case 'addponts4':
if (!isPremium) return reply ("Voce precisa ser vip")
yoi = q
if (args.length < 1) return reply('Digite a quantidade de pontos que queira adicionar no time 4!')
if (yoi.length > 5 ) return ('O texto excede o limite!')
_pontuação4.push(yoi)
fs.writeFileSync('./x4bygst/pontuação4.json', JSON.stringify(_pontuação4))
reply(`Ok ${pushname}, os pontos foram adicionados no *Time4*`)
break
                case 'gay':
case '%gay':		
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque os gay do gp!')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { quoted: mek })
					break
case '%lebisca':		
case 'lesbica':
case '%lesbica':
case 'lésbica':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque alguma lebisca')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é lebisca: *'+rate+'*\n\nSua porcentagem lebisca : '+ kl+'%\n essa ai ama uma buzeta 🤨', text, { quoted: mek })
					break
case '%pau':		
case 'pau':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque alguem')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como seu pau é grande: *'+rate+'*\n\nSua porcentagem de pauzao : '+ kl+'%\n pau pequeno viu🤨', text, { quoted: mek })
					break
case 'ship':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 2) return reply('marque alguem')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Vocês formam um belo casal: *'+rate+'*\n\nSua porcentagem de amor : '+ kl+'%\n *Shipo vocês dois🌹*', text, { quoted: mek })
					break
case 'casar':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 2) return reply('marque alguem')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Vocês formam um belo casal: *'+rate+'*\n\nSua porcentagem de amor : '+ kl+'%\n *Eu apoiaria vocês a se casar! 💍*', text, { quoted: mek })
					break
case '%feio':		
case '%feia':
case 'feio':
case 'feia':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque alguem fei que doi!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é feio(a): *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { quoted: mek })
					break
					case 'talarico':
if (!isGroup) return reply(mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
	            	if (args.length < 1) return reply('marque alguem talarico pra krlh!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é talarico(a): *'+rate+'*\n\nSua porcentagem de talaricagem é : '+ kl+'%\n mó talarico em fdp 🧐', text, { quoted: mek })
					break
case '%lindo':		
case '%linda':
case 'lindo':
case 'linda':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque alguem bonito!')
					rate = body.slice(8)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é lindo(a): *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { quoted: mek })
					break
case '%gostoso':		
case '%gostosa':
case 'gostoso':
case 'gostosa':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque alguém 🤷‍♂️!')
					rate = body.slice(9)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso(a) é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
					break
case '%gado':		
case '%gada':
case 'gado':
case 'gada':
if (!isGroup) return reply(mess.only.group)
	            	if (args.length < 1) return reply('marque um gado(a)!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { quoted: mek })
					break
case 'rankcaco':
case 'rankmacaco':
case 'rankmamaco':
case 'rankmacacos':
try{
if(!isGroup) return reply(mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
d = [] 
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranktalaricos':
case 'ranktalarico':
try{
if(!isGroup) return (mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
d = []
teks = '😡Ranks dos mais talaricos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😡❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'criasala':
try{
if(!isGroup) return (mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
d = []
teks = 'lista de quem vai criar salinha md3 \n'
for(i = 0; i < 3; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🪖❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankrodados':
try{
if(!isGroup) return (mess.only.group)
if (!isPremium) return reply ("Voce precisa ser vip")
d = []
teks = '🧐Lista dos mais rodados! \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🧐❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgay':
case 'rankgays':
case 'rankdosgays':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklesbica':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank das mais lesbicas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
case 'ranklindo':
case 'rankdosmaislindos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank dos mais lindos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazistas':
case 'ranknazista':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankmaconha':
case 'rankmaconheiros':
if (!isPremium) return reply ("Voce precisa ser vip")
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🚬Rank dos mais maconheiros\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🚬❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankputas':
case 'rankputa':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '‍ 🤰Rank dos roda bolsa\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤰❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostoso':
case 'rankgostosos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank dos mais gostosos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgado':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
  
case 'addvip':
if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return client.sendMessage(from, '「 𝖲𝗈𝗆𝖾𝗇𝗍𝖾 𝗈 𝖼𝗋𝗂𝖺𝖽𝗈𝗋 𝗉𝗈𝖽𝖾 𝖽𝖾𝖿𝗂𝗇𝗂𝗋 𝗇𝗈𝗏𝗈𝗌 𝗏𝗂𝗉𝗌 」',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `✅ @${mentioned[0].split('@')[0]}você virou Vip na Alerquina Bot ✅`
mentions(`${vip}`, mentioned, true)   
break
case 'blocklist':
if (!isGroup) return reply(mess.only.group)
					teks = '╭────*「 *USUÁRIOS BANIDOS❌* 」\n'
					for (let V of ban) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${ban.length}\n╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'setprefix':
				if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix mudado para : ${prefix}`)
					break
				case 'block':
case 'bloq':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*𝖠𝗉𝖾𝗇𝖺𝗌 𝗈 𝖼𝗋𝗂𝖺𝖽𝗈𝗋 𝗉𝗈𝖽𝖾 𝖻𝗅𝗈𝗊𝗎𝖾𝖺𝗋 𝗆𝖾𝗆𝖻𝗋𝗈𝗌 𝖽𝖾 𝗎𝗌𝖺𝗋 𝗈 𝖻𝗈𝗍 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫 @${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot 🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*𝖠𝗉𝖾𝗇𝖺𝗌 𝗈 𝖼𝗋𝗂𝖺𝖽𝗈𝗋 𝗉𝗈𝖽𝖾 𝖽𝖾𝗌𝖻𝗅𝗈𝗊𝗎𝖾𝖺𝗋 𝗆𝖾𝗆𝖻𝗋𝗈𝗌 𝖽𝖾 𝗎𝗌𝖺𝗋 𝗈 𝖻𝗈𝗍 🧐👍🏽* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎ @${mentioned[0].split('@')[0]} foi desbloqueado e você pode reutilizar os comandos do bot ❎`
mentions(`${susp}`, mentioned, true)   
break
case 'viplist':
if (!isGroup) return reply(mess.only.group)
					teks = '╭────*「 *VIPS DA ALERQUINA👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *ALERQUINA BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
					case 's':
case 'f':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'figura':
case 'figu':
case 'figurinha':
case 'sgif':  
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('AlerquinaBot', 'AlerquinaBot')} ${ran} -o ${ran}`, async (error) => {
								//	if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter $ {type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('AlerquinaBot', 'AlerquinaBot')} ${ran} -o ${ran}`, async (error) => {
						//			if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde. ')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('AlerquinaBot', 'AlerquinaBot')} ${ranw} -o ${ranw}`, async (error) => {
								//	if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie uma imagem com a legenda ${prefix}sticker ou imagem marcada já enviada`)
					}
					break
				case 'gif': 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅ Prontinho • By alerquina kk'})
fs.unlinkSync(mediaaa)
}
break
case 'img':
					if (!isQuotedSticker) return reply('❌ Marque uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter o adesivo em imagem ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Prontinho • By alerquina kk'})
						fs.unlinkSync(ran)
					})
					break
case 'ddd':
if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Digite seu texto. Ex: ?ddd 11')
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${teks}`)
msc = `
🔍 Consulta ddd 🔍

ℹ Info: ${anu.Mensagem}

🏙 Estado: ${anu.Estado}

🖼 Cidades : ${anu.Cidades}

`
reply(`${msc}`)
break
					case 'ip':
					if (!isGroup) return reply(mess.only.group)
			if (args.length < 1) return reply('Coloque o ip ao ser consultado')
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internet?ip=${teks}`)
msc = `
Cidade : ${anu.Cidade_Encontrada}
Código postal: ${anu.Codigo_Postal}
Hora local: ${anu.Horario_Local}
Ip informado: ${anu.IP_Informado}
País: ${anu.Pais_Encontrado}
Região: ${anu.Regiao_Encontrada}
`
reply(`${msc}`)
break
case 'cnpj':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Coloque o cnpj ao ser consultado')
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/juridico?cnpj=${teks}`)
msc = `
Info: ${anu.Mensagem}
Cnpj informado: ${anu.CNPJ_Informado}
Cnpj aberto: ${anu.Abertura_CNPJ}
Atividade Principal: ${anu.Atividade_Principal}
Nome: ${anu.Nome_Encontrado}
Rua: ${anu.Rua_Encontrada}
Bairro: ${anu.Bairro_Encontrado}
Cep: ${anu.CEP_Encontrado}
Cidade: ${anu.Cidade_Encontrada}
País: ${anu.Pais_Encontrado}
Complemento: ${anu.Complemento_Encontrado}
Data da situação: ${anu.Data_Da_Situacao}
Email: ${anu.Email_Encontrado}
Fantasia: ${anu.Fantasia_Encontrada}
Numero local: ${anu.Numero_Da_Casa}
Porte: ${anu.Porte_CNPJ}
Situação: ${anu.Situacao_Encontrada}
Telefone: ${anu.Telefone_Encontrado}
`
reply(`${msc}`)
break
case 'cep':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` 🔍 Consulta cep 🔍


Cep: ${hehe.cep}
Estado: ${hehe.state}
Cidade: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break 
case 'attp' : 
					try {
						var cholotxt = body.slice(5).trim()
						reply(mess.wait)
						url = encodeURI(`https://api.xteam.xyz/attp?file&text=${cholotxt}`)
						textofigu = await getBuffer(url) 
						client.sendMessage(from, textofigu, sticker, { quoted: mek })
					}
					
					
					catch (e) {
						reply("Error: Use apenas caracteres alfanuméricos")
					}
					break
case 'attp1':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`coloque o texto, exemplo: ${prefix}attp1 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`*coloque o texto, exemplo: ${prefix}attp2 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`*coloque o texto, exemplo: ${prefix}attp3 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`*coloque o texto, exemplo: ${prefix}attp4 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`*coloque o texto, exemplo: ${prefix}attp5 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`*coloque o texto, exemplo: ${prefix}attp6 AlerquinaBot*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
                  	break
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO MACACO 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO MACACO 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
				default:
				if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("wa.me")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("http://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
				if ((budy === `bot fofa`)){     
              client.sendMessage(from, 'obgd, vc tbm é! ❤️', text, {quoted: mek})
                    }
if ((budy === `bot on?`)){     
              client.sendMessage(from, 'nao,to te respondendo com meu dono no wpp fdp! 😤' , text, {quoted: mek})
                    }

if ((budy === `te amo alerquina`)){     
              client.sendMessage(from, 'fala que ama, mas não manda foto da raba pv! 🤧🤨', text, {quoted: mek})
                    }

if ((budy === `cade a bot`)){     
              client.sendMessage(from, 'comendo sua mãe 😡', text, {quoted: mek})
                    }
                    
if ((budy === `bot fdp`)){     
              client.sendMessage(from, 'seu pai de calcinha😘', text, {quoted: mek})
                    }
                    if ((budy === `boa noite`)){     
              client.sendMessage(from, 'boa noite espero que morra dormindo! 🤠', text, {quoted: mek})
                    }
                    if ((budy === `bom dia`)){     
              client.sendMessage(from, 'bom dia vagabundo(a) 😌', text, {quoted: mek})
                    }
                    if ((budy === `vtmnc bot`)){     
              client.sendMessage(from, 'vai tomar no c* é vitamina como tu e tua prima e por cima sua mina! 🙌🏽', text, {quoted: mek})
              }
              if ((budy === `oi bot`)){     
              client.sendMessage(from, 'oii lindo (a), tudo bem? <3', text, {quoted: mek})
                    }
                    if ((budy === `vsfd bot`)){     
              client.sendMessage(from, 'vai tu cara, ta pensando que é quem? 😡', text, {quoted: mek})
                    }
                    if ((budy === `boa tarde`)){     
              client.sendMessage(from, 'boa tarde, espero que voce fique calado! 💘', text, {quoted: mek})
                    }
                    if ((budy === `obgd bot`)){     
              client.sendMessage(from, 'denada vagabunda 😌💘', text, {quoted: mek})
                    }
                    if ((budy === `alerquina`)){     
              client.sendMessage(from, 'eu sou a deusa da palhaçada! 🌹', text, {quoted: mek})
                    }
if (selectedButton == `playByGstAudio`) {
try {
reply('Ok')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
lagu = await getBuffer(anu.Link_De_Download)
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
} catch(e) {
reply("Deu erro :/")
}
}

if (selectedButton == `audiooEMuitodKala`) {
try {
reply('Ok')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/video?video=${testeki}`)   
lagu = await getBuffer(anu.Link_De_Download)
client.sendMessage(from, lagu, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
} catch(e) {
reply("Deu erro :/")
}
}
if (body == `${prefix + command
}`)  {
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${prefix}${command}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("Cannot read property 'conversation' of null")) {
if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
if (!e.includes("Cannot set property 'mtype' of undefined")) {
if (!e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
}
}
}
}
}
})
}
starts()