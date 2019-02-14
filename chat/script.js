var WS_URL = 'ws://localhost:8080/Chat/chat';

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
    this.win.onbeforeunload = () => this.closeSocket();

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
    this.sendMsgButton.addEventListener('click', e => this.sendMessage());
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
    //закомментированный рабочий вариант со стрелочной функцией
    //this.regAgentButton.addEventListener('click', e => this.regAgent());
    this.regAgentButton.addEventListener('click', this.regAgent, false);
    
    this.regAgentButton.innerHTML = 'agent';
    this.regAgentButton.style.width = buttonsWidth;
    regButtons.appendChild(this.regAgentButton);

    this.regClientButton = this.win.document.createElement('button');
    this.regClientButton.addEventListener('click', e => this.regClient());
    this.regClientButton.innerHTML = 'client';
    this.regClientButton.style.marginLeft = MARGINS;
    this.regClientButton.style.width = buttonsWidth;
    regButtons.appendChild(this.regClientButton);
}

Chat.prototype.openSocket = function () {
    this.ws = new WebSocket(WS_URL);
    this.ws.onopen = () => this.onOpen();
    this.ws.onmessage = (e) => this.onMessage(JSON.parse(e.data));
    this.ws.onclose = (e) => this.onClose();
    this.userName = this.userNameInputField.value;
    this.startBox.style.display = "none";
    this.chatBox.style.display = "block";
}

Chat.prototype.sendMessage = function () {
    this.send('TEXT_MESSAGE');
}

//теряется контекст
Chat.prototype.regAgent = function () {
    console.log(this); // вывод: <button style="width: 96.5px;">agent</button>
    this.status = 'agent';
    this.openSocket();
}                       // здесь вероятно нужно привязать контекст .bind(...); что нужно указать в качестве контекста??

Chat.prototype.regClient = function () {
    this.status = 'client';
    this.openSocket();
}

Chat.prototype.onOpen = function () {
    var typeRegMessage;
    if (this.status == 'agent') typeRegMessage = 'AGENT_REG_MESSAGE';
    else if (this.status == 'client') typeRegMessage = 'CLIENT_REG_MESSAGE';
    this.send(typeRegMessage);
}

Chat.prototype.onClose = function () {}

Chat.prototype.onMessage = function (message) {
    var pMsg = document.createElement("p");
    var messageTime = new Date();
    pMsg.innerText = messageTime.toTimeString().substring(0, 5) + ' ' + message.name + ': ' + message.text;
    this.messagesBox.appendChild(pMsg);
    this.messagesBox.scrollTop = this.messagesBox.scrollHeight;
}

Chat.prototype.send = function (msgType) {
    var message = {
        name: this.userName,
        text: this.msgTextArea.value,
        type: msgType,
        index: 0
    };
    this.ws.send(JSON.stringify(message));
    this.msgTextArea.value = "";
}

Chat.prototype.closeSocket = function(){
    this.ws.close();
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
