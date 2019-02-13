var CHAT_WIDTH = 400;
var CHAT_HEIGHT = 600;
var MARGINS = 7;
var PADDINGS = 5;
var BORDERS = 1;
var CORRECTION = 5; // поправка на расстояние от левой границы окна браузера до первого элемента
var SCROLL_WIDTH = getScrollWidth();
var chat;


function createChat() {
    chat = new Chat();
}

function Chat() {
    var chatWindowProps = 'left=' + (window.screenX + window.innerWidth - CHAT_WIDTH) + ',top=' + (window.screenY + window.innerHeight - CHAT_HEIGHT) + ',width=' + CHAT_WIDTH + ',height=' + CHAT_HEIGHT;

    this.win = window.open('about:blank', 'Chat', chatWindowProps);

    var generalContainer = this.win.document.createElement('div');
    this.win.document.body.appendChild(generalContainer);
    this.win.document.body.style.overflow = "hidden";

    this.chatBox = this.win.document.createElement('div');
    this.chatBox.style.display = 'none';
    generalContainer.appendChild(this.chatBox);

    this.messagesBox = this.win.document.createElement('div');
    this.chatBox.appendChild(this.messagesBox);

    this.messagesBox.style.width = CHAT_WIDTH - SCROLL_WIDTH - MARGINS * 2 - PADDINGS * 2 - BORDERS * 2 - CORRECTION;
    this.messagesBox.style.maxWidth = CHAT_WIDTH - SCROLL_WIDTH - MARGINS * 2 - PADDINGS * 2 - BORDERS * 2 - CORRECTION;
    this.messagesBox.style.height = (CHAT_HEIGHT - MARGINS * 3 - PADDINGS * 4 - BORDERS * 2) * 0.70;
    this.messagesBox.style.border = 'solid ' + BORDERS + 'px black';
    this.messagesBox.style.overflowY = 'scroll';
    this.messagesBox.style.margin = MARGINS;
    this.messagesBox.style.padding = PADDINGS;

    var elemsForSendingMsg = this.win.document.createElement('div');
    elemsForSendingMsg.style.margin = MARGINS;
    this.chatBox.appendChild(elemsForSendingMsg);

    this.msgTextArea = this.win.document.createElement('textArea');
    this.msgTextArea.style.height = (CHAT_HEIGHT - MARGINS * 3 - PADDINGS * 4 - BORDERS * 2) * 0.30;
    this.msgTextArea.style.width = (CHAT_WIDTH - MARGINS * 3 - PADDINGS * 2 - CORRECTION) * 0.78;
    this.msgTextArea.style.padding = PADDINGS;
    elemsForSendingMsg.appendChild(this.msgTextArea);

    this.sendMsgButton = this.win.document.createElement('button');
    this.sendMsgButton.style.height = (CHAT_HEIGHT - MARGINS * 3 - PADDINGS * 4 - BORDERS * 2) * 0.30;
    this.sendMsgButton.style.width = (CHAT_WIDTH - MARGINS * 3 - PADDINGS * 2 - CORRECTION) * 0.2;
    this.sendMsgButton.style.marginLeft = MARGINS;
    this.sendMsgButton.style.position = 'absolute';
    this.sendMsgButton.innerText = 'Send';
    this.sendMsgButton.addEventListener('click', this.sendMessage, false);
    elemsForSendingMsg.appendChild(this.sendMsgButton);

    this.startBox = this.win.document.createElement('div');
    this.startBox.style.position = 'relative';
    this.startBox.style.left = CHAT_WIDTH / 4 - CORRECTION;
    this.startBox.style.top = CHAT_HEIGHT / 3;
    generalContainer.appendChild(this.startBox);

    this.userNameInputField = this.win.document.createElement('input');
    this.userNameInputField.type = 'text';
    this.userNameInputField.placeholder = 'enter username...';
    this.userNameInputField.style.width = CHAT_WIDTH / 2;
    this.userNameInputField.style.padding = PADDINGS;
    this.startBox.appendChild(this.userNameInputField);

    var regButtons = this.win.document.createElement('div');
    regButtons.style.marginTop = MARGINS;
    this.startBox.appendChild(regButtons);

    var buttonsWidth = (CHAT_WIDTH / 2 - MARGINS) / 2;

    this.regAgentButton = this.win.document.createElement('button');
    this.regAgentButton.addEventListener('click', this.regAgent, false);
    this.regAgentButton.innerHTML = 'agent';
    this.regAgentButton.style.width = buttonsWidth;
    regButtons.appendChild(this.regAgentButton);

    this.regClientButton = this.win.document.createElement('button');
    this.regClientButton.addEventListener('click', this.regClient, false);
    this.regClientButton.innerHTML = 'client';
    this.regClientButton.style.marginLeft = MARGINS;
    this.regClientButton.style.width = buttonsWidth;
    regButtons.appendChild(this.regClientButton);
}

Chat.prototype.sendMessage = function () {
    //заглушка
    console.log('Message sended');
}

Chat.prototype.regAgent = function () {
    //заглушка
    console.log('Agent registered');
}

Chat.prototype.regClient = function () {
    //заглушка
    console.log('Client registered');
}

function getScrollWidth() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);

    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
}
